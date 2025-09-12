# PM2 GameHub Next.js Deployment Guide (EC2 - Yarn)

This project deploys a Next.js app on EC2 using PM2 and Yarn.

## 🚀 EC2 initial setup

### 1. First-time setup on the EC2 instance

```bash
# Move to your project directory
cd /path/to/your/project

# Run EC2 setup script (installs yarn and PM2)
./ec2-setup.sh
```

### 2. Set environment variables

```bash
# Auto-configure environment variables (recommended)
./set-env.sh

# Or configure manually
cp .env.example .env.production
nano .env.production
```

### 3. Verify environment variables

```bash
# Check configured env vars
echo $NEXT_PUBLIC_API_URL
echo $NODE_ENV
echo $PORT
```

## 🚀 Deployment scripts

### 1. Full redeploy (recommended)

```bash
# Run the script (from project root)
./deploy.sh

# Or use yarn script
yarn pm2:deploy
```

### 2. Quick restart

```bash
# Run the script
./restart.sh

# Or use yarn script
yarn pm2:restart
```

## 📋 Yarn and PM2 commands

### Yarn basics

```bash
# Install dependencies
yarn install

# Build
yarn build

# Start
yarn start

# Or via package scripts
yarn pm2:start
yarn pm2:stop
yarn pm2:status
yarn pm2:logs
```

### PM2 commands (direct)

```bash
# Start application
pm2 start ecosystem.config.js --env production

# Restart application
pm2 restart gamehub-next

# Stop application
pm2 stop gamehub-next

# Delete application
pm2 delete gamehub-next

# Show all process status
pm2 status

# Tail logs
pm2 logs gamehub-next

# Monitor
pm2 monit

# Save PM2 process list (persist across reboot)
pm2 save
```

## 🔧 EC2 environment

### Environment variables

- `NODE_ENV=production`
- `PORT=3000` (or your preferred port)
- Managed in `.env.production`

### Security group

Open these ports in the EC2 security group:

- HTTP: 80
- HTTPS: 443
- Custom: 3000 (or the port you configured)

### Firewall (Ubuntu)

```bash
sudo ufw allow 3000
sudo ufw allow 80
sudo ufw allow 443
```

## 📁 Files

- `ecosystem.config.js`: PM2 config (uses relative paths)
- `deploy.sh`: Full redeploy script
- `restart.sh`: Quick restart script
- `ec2-setup.sh`: EC2 setup script
- `.env.example`: Example env file
- `logs/`: PM2 log directory

## 🔧 Configuration tweaks

### Change port

Set env var `PORT` or edit `ecosystem.config.js`:

```bash
export PORT=8080
```

### Adjust memory limit

Edit `max_memory_restart` in `ecosystem.config.js`.

### Change instance count

Edit `instances` in `ecosystem.config.js`.

## 🐛 Troubleshooting

### Port already in use

```bash
# Find process using port 3000
sudo lsof -i :3000

# Kill process
sudo kill -9 <PID>
```

### Reset PM2 processes

```bash
# Delete all PM2 processes
pm2 delete all

# Kill PM2 daemon
pm2 kill

# Restore PM2 processes
pm2 resurrect
```

### Check logs

```bash
# Application logs
pm2 logs gamehub-next

# System logs
sudo tail -f /var/log/syslog

# Inspect PM2 log files directly
tail -f logs/combined.log
```

## 🔄 Auto-restart on reboot

### Start PM2 on system boot

```bash
# Configure PM2 startup
pm2 startup

# Save current processes
pm2 save
```
