#!/bin/bash
# ==============================================
# GUARDAR SESIÓN - Ejecutar al final de cada sesión
# ==============================================

cd /home/user/Projects

git config user.email "leospot@users.noreply.github.com"
git config user.name "leospot"

echo ">>> Agregando archivos..."
git add -A

echo ">>> Creando commit..."
FECHA=$(date '+%Y-%m-%d %H:%M')
git commit -m "Session saved: $FECHA"

echo ">>> Subiendo a GitHub..."
git push origin main

echo ""
echo "✓ Sesión guardada en GitHub correctamente."
