#!/bin/bash

# Forward traffic from port 80 to 3000 on macOS (pf)
# Usage: sudo ./port-forward.sh

echo "Setting up forwarding from port 80 to 3000..."

# Flush existing NAT rules (ignore errors)
echo "Flushing existing port forwarding rules..."
sudo pfctl -F nat 2>/dev/null || true

# Apply port forwarding rule
echo "Applying port forwarding rule..."
echo "rdr pass on lo0 inet proto tcp from any to 127.0.0.1 port 80 -> 127.0.0.1 port 3000" | sudo pfctl -ef - 2>/dev/null || {
    echo "Failed to configure forwarding using pfctl."
    echo ""
    echo "You can try the following alternatives:"
    echo ""
    echo "1. Set up an nginx reverse proxy:"
    echo "   brew install nginx"
    echo "   sudo nginx -s stop 2>/dev/null || true"
    echo ""
    echo "2. Use the domain with a port number:"
    echo "   http://REDACTED_TEST:3000"
    echo ""
    echo "3. Run a development HTTPS server:"
    echo "   npm run dev:https"
    echo ""
    exit 1
}

echo "✅ Port forwarding is configured!"
echo "You can now access http://REDACTED_TEST"
echo ""
echo "To disable forwarding:"
echo "sudo pfctl -F nat"
