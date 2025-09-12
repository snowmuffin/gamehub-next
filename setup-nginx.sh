#!/bin/bash

echo "🔧 Configuring nginx for HTTPS-enabled domain access..."

# Path to nginx configuration file
NGINX_CONF="/opt/homebrew/etc/nginx/nginx.conf"
PROJECT_DIR="/Volumes/X31/Documents/snowmuffin/gamehub-next"
DOMAIN="yourdomain.com"

# Function to create SSL certificate
create_ssl_certificate() {
    echo "🔐 Generating SSL certificate..."
    
    # Create SSL directories
    sudo mkdir -p /etc/ssl/certs
    sudo mkdir -p /etc/ssl/private
    
    # Create temporary openssl config file
    cat > /tmp/openssl.conf << EOF
[req]
distinguished_name = req_distinguished_name
x509_extensions = v3_req
prompt = no

[req_distinguished_name]
C = KR
ST = Seoul
L = Seoul
O = SnowMuffin
OU = GameHub
CN = $DOMAIN

[v3_req]
subjectAltName = @alt_names

[alt_names]
DNS.1 = $DOMAIN
DNS.2 = *.$DOMAIN
EOF

    # Generate self-signed SSL certificate
    sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
        -keyout /etc/ssl/private/$DOMAIN.key \
        -out /etc/ssl/certs/$DOMAIN.crt \
        -config /tmp/openssl.conf \
        -extensions v3_req
    
    # Remove temporary config file
    rm /tmp/openssl.conf
    
    # Set permissions for SSL files
    sudo chmod 600 /etc/ssl/private/$DOMAIN.key
    sudo chmod 644 /etc/ssl/certs/$DOMAIN.crt
    
    echo "✅ SSL certificate generated: /etc/ssl/certs/$DOMAIN.crt"
}

# Stop existing nginx
echo "📛 Stopping existing nginx process..."
sudo nginx -s stop 2>/dev/null || true

# Backup nginx configuration
echo "💾 Backing up nginx configuration..."
sudo cp "$NGINX_CONF" "$NGINX_CONF.backup" 2>/dev/null || true

# Create SSL certificate
create_ssl_certificate

# Create nginx configuration
echo "📝 Creating nginx HTTPS configuration file..."
sudo tee "$NGINX_CONF" > /dev/null << 'EOF'
events {
    worker_connections 1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    # HTTP to HTTPS redirect
    server {
        listen 80;
        server_name REDACTED_TEST;
        return 301 https://$server_name$request_uri;
    }

    # HTTPS server
    server {
        listen 443 ssl;
        http2 on;
        server_name REDACTED_TEST;

        # SSL Certificate paths
        ssl_certificate /etc/ssl/certs/REDACTED_TEST.crt;
        ssl_certificate_key /etc/ssl/private/REDACTED_TEST.key;

        # SSL configuration
        ssl_protocols TLSv1.2 TLSv1.3;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384;
        ssl_prefer_server_ciphers off;
        ssl_session_cache shared:SSL:10m;
        ssl_session_timeout 10m;

        # Security headers
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
        add_header X-Frame-Options DENY;
        add_header X-Content-Type-Options nosniff;
        add_header X-XSS-Protection "1; mode=block";

    # Proxy to Next.js dev server
        location / {
            proxy_pass http://localhost:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto https;
            proxy_cache_bypass $http_upgrade;
        }

    # WebSocket support for Next.js hot reload (HTTPS)
        location /_next/webpack-hmr {
            proxy_pass http://localhost:3000/_next/webpack-hmr;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto https;
        }
    }
}
EOF

# Test nginx configuration
echo "🧪 Testing nginx configuration..."
if sudo nginx -t; then
    echo "✅ nginx configuration validated"
else
    echo "❌ nginx configuration error"
    echo "🔄 Restoring from backup configuration..."
    sudo cp "$NGINX_CONF.backup" "$NGINX_CONF"
    exit 1
fi

# Start nginx
echo "🚀 Starting nginx..."
sudo nginx

echo ""
echo "🎉 HTTPS setup complete!"
echo ""
echo "🌐 You can now safely access via:"
echo "   https://REDACTED_TEST (HTTPS - recommended)"
echo "   http://REDACTED_TEST (HTTP - auto-redirects to HTTPS)"
echo ""
echo "📋 Additional info:"
echo "   - Next.js dev server: http://localhost:3000"
echo "   - nginx config: $NGINX_CONF"
echo "   - SSL cert: /etc/ssl/certs/$DOMAIN.crt"
echo "   - SSL key: /etc/ssl/private/$DOMAIN.key"
echo ""
echo "🔧 nginx management commands:"
echo "   - Stop nginx: sudo nginx -s stop"
echo "   - Restart nginx: sudo nginx -s reload"
echo "   - Restore config: sudo cp $NGINX_CONF.backup $NGINX_CONF"
echo ""
echo "⚠️  Your browser may show a self-signed certificate warning."
echo "    In development, proceed via 'Advanced' > 'Continue to unsafe site'."
