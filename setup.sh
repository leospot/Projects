#!/bin/bash
# ==============================================
# SETUP - Ejecutar al inicio de cada sesión
# ==============================================

echo ">>> Instalando dependencias..."
pip install -r requirements.txt -q

echo ">>> Reconstruyendo índice vectorial..."
python rag/build_index.py

echo ""
echo "✓ Listo. Puedes empezar a usar el RAG."
echo "  Ejemplo: python rag/query.py 'tu pregunta aqui'"
