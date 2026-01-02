#!/bin/bash

# EC2 Memory Optimization Script
# This script adds swap space to prevent OOM kills during Next.js builds

set -e

echo "🔧 Setting up swap space for EC2 instance..."

# Check if swap already exists
if [ $(swapon --show | wc -l) -gt 0 ]; then
    echo "✅ Swap space already exists:"
    swapon --show
    echo ""
    read -p "Do you want to recreate swap? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Exiting..."
        exit 0
    fi
    sudo swapoff -a
    sudo rm -f /swapfile
fi

# Create 2GB swap file
echo "📝 Creating 2GB swap file..."
sudo dd if=/dev/zero of=/swapfile bs=1M count=2048 status=progress

# Set proper permissions
echo "🔒 Setting permissions..."
sudo chmod 600 /swapfile

# Make swap
echo "🔨 Making swap..."
sudo mkswap /swapfile

# Enable swap
echo "✅ Enabling swap..."
sudo swapon /swapfile

# Make swap permanent
echo "💾 Making swap permanent..."
if ! grep -q '/swapfile' /etc/fstab; then
    echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
fi

# Verify swap
echo "✅ Swap status:"
swapon --show
echo ""
free -h

echo ""
echo "✅ Swap setup complete!"
echo "💡 You can now run ./deploy.sh to deploy your application"
