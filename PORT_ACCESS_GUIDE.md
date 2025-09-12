# Domain access without port guide

## Current status ✅

- Next.js dev server running at `http://localhost:3000` and `http://0.0.0.0:3000`

## Solution options

### Option 1: Simple port forwarding (recommended)

On macOS, forward port 80 to 3000:

```bash
# Temporary port forwarding (cleared when terminal session ends)
echo "rdr pass on lo0 inet proto tcp from any to 127.0.0.1 port 80 -> 127.0.0.1 port 3000" | sudo pfctl -ef -

# To clear:
sudo pfctl -F nat
```

### Option 2: nginx reverse proxy

```bash
# 1. Run nginx setup script
./setup-nginx.sh

# 2. Stop nginx (if needed)
sudo nginx -s stop
```

### Option 3: Access directly from browser

Currently working methods:

- http://REDACTED_TEST:3000 (works)
- http://localhost:3000 (works)
- http://121.129.86.174:3000 (works)

### Option 4: Run on port 80 with sudo

```bash
sudo PORT=80 npm run dev
```

## Recommended approach

**Simplest and safest approach:**
Given the current state, save a browser bookmark so you don't need to remember the port:

1. Open `http://REDACTED_TEST:3000` in your browser
2. Save a bookmark (e.g., "GameHub Dev")
3. Click the bookmark next time

## In production

On real servers, nginx or Apache will handle port 80 automatically.

## Currently accessible URLs

✅ **Working URLs:**
⚠️ **URL available after setting port 80:**

- `http://REDACTED_TEST` (no port number)
