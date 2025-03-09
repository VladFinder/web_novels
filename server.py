#!/usr/bin/env python3
import http.server
import socketserver

PORT = 8080

Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map.update({
    '.js': 'application/javascript',
})

print(f"Запуск сервера на порту {PORT}...")
print(f"Откройте браузер и перейдите по адресу: http://localhost:{PORT}")
print("Для остановки сервера нажмите Ctrl+C")

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    httpd.serve_forever()