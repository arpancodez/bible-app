'use client';
import React, { useState } from "react";
import Link from "next/link";

const bibleBooks = [
  { name: "Genesis", chapters: 50 },
  { name: "Exodus", chapters: 40 },
  { name: "Matthew", chapters: 28 },
  { name: "Mark", chapters: 16 },
  { name: "Luke", chapters: 24 },
  { name: "John", chapters: 21 },
  { name: "Psalms", chapters: 150 },
  { name: "Proverbs", chapters: 31 },
];

const sampleVerses: Record<string, Record<number, string[]>> = {
  "Genesis": {
    1: [
      "In the beginning God created the heavens and the earth.",
      "Now the earth was formless and empty, darkness was over the surface of the deep.",
      "And God said, Let there be light: and there was light.",
    ],
  },
  "John": {
    1: [
      "In the beginning was the Word, and the Word was with God.",
      "He was with God in the beginning.",
      "Through him all things were made.",
    ],
  },
};

export default function ReaderPage() {
  const [selectedBook, setSelectedBook] = useState("Genesis");
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [highlights, setHighlights] = useState<number[]>([]);

  const currentBook = bibleBooks.find((b) => b.name === selectedBook);
  const verses = sampleVerses[selectedBook]?.[selectedChapter] || [];

  const toggleHighlight = (index: number) => {
    if (highlights.includes(index)) {
      setHighlights(highlights.filter((h) => h !== index));
    } else {
      setHighlights([...highlights, index]);
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f9fafb", color: "#1f2937" }}>
      <header style={{ backgroundColor: "#fff", padding: "1rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/" style={{ textDecoration: "none", color: "#3b82f6" }}>
            <h1 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "bold" }}>📖 Bible App</h1>
          </Link>
          <span style={{ fontSize: "0.875rem", color: "#6b7280" }}>Daily Streak: 🔥 5 days</span>
        </div>
      </header>

      <main style={{ maxWidth: "1280px", margin: "0 auto", padding: "2rem", display: "grid", gridTemplateColumns: "200px 1fr", gap: "2rem" }}>
        <aside style={{ backgroundColor: "#fff", padding: "1rem", borderRadius: "0.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", height: "fit-content" }}>
          <h2 style={{ marginTop: 0, marginBottom: "1rem", fontSize: "1rem", fontWeight: "bold" }}>📚 Books</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", maxHeight: "70vh", overflowY: "auto" }}>
            {bibleBooks.map((book) => (
              <button
                key={book.name}
                onClick={() => {
                  setSelectedBook(book.name);
                  setSelectedChapter(1);
                }}
                style={{
                  padding: "0.5rem",
                  backgroundColor: selectedBook === book.name ? "#3b82f6" : "#f3f4f6",
                  color: selectedBook === book.name ? "#fff" : "#1f2937",
                  border: "none",
                  borderRadius: "0.375rem",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  textAlign: "left",
                  transition: "all 0.2s",
                }}
              >
                {book.name}
              </button>
            ))}
          </div>
        </aside>

        <section>
          <div style={{ backgroundColor: "#fff", padding: "1.5rem", borderRadius: "0.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", marginBottom: "1.5rem" }}>
            <h1 style={{ margin: "0 0 1rem 0", fontSize: "1.5rem", fontWeight: "bold" }}>{"{selectedBook} - Chapter "}{selectedChapter}</h1>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {Array.from({ length: currentBook?.chapters || 1 }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setSelectedChapter(i + 1)}
                  style={{
                    padding: "0.5rem 0.75rem",
                    backgroundColor: selectedChapter === i + 1 ? "#3b82f6" : "#e5e7eb",
                    color: selectedChapter === i + 1 ? "#fff" : "#1f2937",
                    border: "none",
                    borderRadius: "0.375rem",
                    cursor: "pointer",
                    fontSize: "0.75rem",
                    fontWeight: "500",
                  }}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          <div style={{ backgroundColor: "#fff", padding: "2rem", borderRadius: "0.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)", lineHeight: "1.8" }}>
            {verses.length > 0 ? (
              verses.map((verse, index) => (
                <div
                  key={index}
                  onClick={() => toggleHighlight(index)}
                  style={{
                    marginBottom: "1.5rem",
                    padding: "0.75rem",
                    borderRadius: "0.375rem",
                    backgroundColor: highlights.includes(index) ? "#fef08a" : "transparent",
                    borderLeft: highlights.includes(index) ? "4px solid #fbbf24" : "transparent",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  <sup style={{ color: "#3b82f6", fontWeight: "bold", marginRight: "0.5rem" }}>{index + 1}</sup>
                  {verse}
                </div>
              ))
            ) : (
              <p style={{ color: "#6b7280", textAlign: "center" }}>Click on verses to highlight them. More content coming soon!</p>
            )}
          </div>
        </section>
      </main>

      <footer style={{ backgroundColor: "#1f2937", color: "#f3f4f6", padding: "2rem", textAlign: "center", marginTop: "2rem" }}>
        <p style={{ margin: "0" }}>© 2025 Bible App. Study at your own pace.</p>
      </footer>
    </div>
  );
}
