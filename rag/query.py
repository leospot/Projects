"""
query.py
Consulta el índice vectorial y devuelve los fragmentos más relevantes.
Uso: python rag/query.py "tu pregunta aqui"
"""

import os
import sys
import chromadb
from sentence_transformers import SentenceTransformer

CHROMA_DIR = os.path.join(os.path.dirname(__file__), "../chroma_db")

def query(question, top_k=3):
    model = SentenceTransformer("all-MiniLM-L6-v2")
    client = chromadb.PersistentClient(path=CHROMA_DIR)
    collection = client.get_collection("documents")

    embedding = model.encode([question]).tolist()
    results = collection.query(query_embeddings=embedding, n_results=top_k)

    print(f"\nPregunta: {question}\n")
    print("=" * 60)
    for i, (doc, meta) in enumerate(zip(results["documents"][0], results["metadatas"][0])):
        print(f"\n[{i+1}] Fuente: {meta['source']}")
        print(f"{doc[:500]}...")
    print("=" * 60)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Uso: python rag/query.py 'tu pregunta'")
        sys.exit(1)
    question = " ".join(sys.argv[1:])
    query(question)
