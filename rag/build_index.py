"""
build_index.py
Lee los documentos de /documents y construye el índice vectorial con ChromaDB.
Se ejecuta al inicio de cada sesión via setup.sh
"""

import os
import chromadb
from sentence_transformers import SentenceTransformer
from pypdf import PdfReader

DOCS_DIR = os.path.join(os.path.dirname(__file__), "../documents")
CHROMA_DIR = os.path.join(os.path.dirname(__file__), "../chroma_db")

def load_documents():
    docs = []
    for filename in os.listdir(DOCS_DIR):
        filepath = os.path.join(DOCS_DIR, filename)
        if filename.endswith(".txt"):
            with open(filepath, "r", encoding="utf-8") as f:
                text = f.read()
                docs.append({"filename": filename, "text": text})
        elif filename.endswith(".pdf"):
            reader = PdfReader(filepath)
            text = "\n".join(page.extract_text() for page in reader.pages if page.extract_text())
            docs.append({"filename": filename, "text": text})
    return docs

def chunk_text(text, chunk_size=500, overlap=50):
    words = text.split()
    chunks = []
    for i in range(0, len(words), chunk_size - overlap):
        chunk = " ".join(words[i:i + chunk_size])
        if chunk:
            chunks.append(chunk)
    return chunks

def build_index():
    docs = load_documents()
    if not docs:
        print("No hay documentos en /documents. Agrega archivos .txt o .pdf y vuelve a ejecutar.")
        return

    print(f"Cargando modelo de embeddings...")
    model = SentenceTransformer("all-MiniLM-L6-v2")

    client = chromadb.PersistentClient(path=CHROMA_DIR)

    # Borrar colección anterior si existe
    try:
        client.delete_collection("documents")
    except Exception:
        pass

    collection = client.create_collection("documents")

    all_chunks = []
    all_ids = []
    all_metadata = []

    for doc in docs:
        chunks = chunk_text(doc["text"])
        for i, chunk in enumerate(chunks):
            all_chunks.append(chunk)
            all_ids.append(f"{doc['filename']}_chunk_{i}")
            all_metadata.append({"source": doc["filename"]})

    print(f"Generando embeddings para {len(all_chunks)} fragmentos...")
    embeddings = model.encode(all_chunks).tolist()

    collection.add(
        documents=all_chunks,
        embeddings=embeddings,
        ids=all_ids,
        metadatas=all_metadata
    )

    print(f"Índice construido con {len(all_chunks)} fragmentos de {len(docs)} documento(s).")

if __name__ == "__main__":
    build_index()
