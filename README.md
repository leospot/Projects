# Projects - RAG Template

Repositorio base para armar un sistema RAG (Retrieval-Augmented Generation) con persistencia entre sesiones de Claude Code.

---

## Como funciona

1. Los documentos (.txt, .pdf) se guardan en `/documents`
2. Al inicio de sesión se construye el índice vectorial automáticamente
3. Al final de sesión se guarda todo en GitHub
4. En la próxima sesión se retoma desde donde se dejó

---

## Inicio de sesión

Al comenzar una nueva sesión decirle a Claude:

> "Clona el repo leospot/Projects, ejecuta el setup y reconstruye el índice"

O manualmente:
```bash
git clone https://github.com/leospot/Projects.git
cd Projects
bash setup.sh
```

---

## Agregar documentos

Colocar archivos `.txt` o `.pdf` en la carpeta `/documents` y ejecutar:
```bash
python rag/build_index.py
```

---

## Consultar el RAG

```bash
python rag/query.py "tu pregunta aqui"
```

---

## Guardar sesión

Al final de la sesión decirle a Claude:

> "Guarda todo en el repo"

O manualmente:
```bash
bash save_session.sh
```

---

## Estructura

```
Projects/
├── documents/         # Tus documentos (.txt, .pdf)
├── rag/
│   ├── build_index.py # Construye el índice vectorial
│   └── query.py       # Consulta el índice
├── setup.sh           # Setup inicial de sesión
├── save_session.sh    # Guardar sesión en GitHub
├── requirements.txt   # Dependencias Python
└── .gitignore
```

---

## Stack

| Componente | Tecnología |
|------------|------------|
| Embeddings | `sentence-transformers` (all-MiniLM-L6-v2) |
| Vector DB  | `ChromaDB` (local) |
| PDFs       | `pypdf` |

---

GitHub: [@leospot](https://github.com/leospot)
