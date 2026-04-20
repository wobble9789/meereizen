#!/bin/bash
# Script om Playwright dependencies te installeren in Codespaces

echo "Installing Playwright system dependencies..."

# Update package lists (negeer Yarn error)
sudo apt-get update 2>/dev/null || true

# Installeer benodigde libraries (Ubuntu 24.04 gebruikt t64 suffixes)
sudo apt-get install -y --no-install-recommends \
  libatk1.0-0t64 \
  libatk-bridge2.0-0t64 \
  libcups2t64 \
  libdrm2 \
  libxkbcommon0 \
  libxcomposite1 \
  libxdamage1 \
  libxfixes3 \
  libxrandr2 \
  libgbm1 \
  libasound2t64 \
  libpango-1.0-0 \
  libcairo2 \
  libatspi2.0-0t64

echo "✅ Dependencies installed successfully!"
