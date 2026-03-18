#!/bin/bash
set -euo pipefail

# Base paths
BASE="/home/c/commano5/iki.commandc.ru/public_html"
APP_DIR="$BASE/server"
LOG_FILE="$BASE/api.log"

# Ensure PATH works under cron
export PATH="/usr/local/bin:/usr/bin:/bin:$PATH"
export NODE_ENV="${NODE_ENV:-production}"
export HOST="${HOST:-127.0.0.1}"
export PORT="${PORT:-3001}"

cd "$APP_DIR"

# Stop previous instance if any
pkill -f "node json-server.js" 2>/dev/null || true

# Start in background and log stdout/stderr
nohup env HOST="$HOST" PORT="$PORT" npm start >>"$LOG_FILE" 2>&1 &

echo "Started json-server.js on $HOST:$PORT (log: $LOG_FILE)"
