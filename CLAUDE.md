# Instrucciones para Claude

## Al iniciar sesión en este repositorio

Ejecutar automáticamente en este orden:

```bash
pip install -r requirements.txt -q
python rag/build_index.py
```

## Al finalizar sesión

Cuando el usuario diga "guarda todo", "guarda la sesión" o similar, ejecutar:

```bash
bash save_session.sh
```

## Contexto del proyecto

- Los documentos del usuario están en `/documents` (.txt o .pdf)
- El índice vectorial se construye localmente en `/chroma_db` (ignorado por git)
- Para consultar el RAG: `python rag/query.py "pregunta"`
- Para agregar documentos: colocarlos en `/documents` y reconstruir el índice
