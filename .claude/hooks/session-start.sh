#!/bin/bash
# SessionStart hook - Solo se ejecuta en sesiones remotas (Claude Code web)
set -euo pipefail

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

echo ">>> [SessionStart] Instalando dependencias Python..."
pip install -r "$CLAUDE_PROJECT_DIR/requirements.txt" -q

echo ">>> [SessionStart] Construyendo índice vectorial RAG..."
python "$CLAUDE_PROJECT_DIR/rag/build_index.py"

echo ">>> [SessionStart] Listo. El RAG está disponible."
