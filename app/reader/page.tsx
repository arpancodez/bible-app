'use client';

import { useState } from 'react';
import Link from 'next/link';

// Bible books data
const bibleBooks = [
  { name: 'Genesis', chapters: 50, abbreviation: 'Gen' },
  { name: 'Exodus', chapters: 40, abbreviation: 'Exo' },
  { name: 'Leviticus', chapters: 27, abbreviation: 'Lev' },
  { name: 'Numbers', chapters: 36, abbreviation: 'Num' },
  { name: 'Deuteronomy', chapters: 34, abbreviation: 'Deu' },
  { name: 'Joshua', chapters: 24, abbreviation: 'Jos' },
  { name: 'Judges', chapters: 21, abbreviation: 'Jdg' },
  { name: 'Ruth', chapters: 4, abbreviation: 'Rut' },
  { name: '1 Samuel', chapters: 31, abbreviation: '1Sa' },
  { name: '2 Samuel', chapters: 24, abbreviation: '2Sa' },
  { name: '1 Kings', chapters: 22, abbreviation: '1Ki' },
  { name: '2 Kings', chapters: 25, abbreviation: '2Ki' },
  { name: 'Psalms', chapters: 150, abbreviation: 'Psa' },
  { name: 'Proverbs', chapters: 31, abbreviation: 'Pro' },
  { name: 'Isaiah', chapters: 66, abbreviation: 'Isa' },
  { name: 'Jeremiah', chapters: 52, abbreviation: 'Jer' },
  { name: 'Matthew', chapters: 28, abbreviation: 'Mat' },
  { name: 'Mark', chapters: 16, abbreviation: 'Mar' },
  { name: 'Luke', chapters: 24, abbreviation: 'Luk' },
  { name: 'John', chapters: 21, abbreviation: 'Joh' },
];

// Sample verses
const versesData: Record<string, Record<number, Record<number, string>>> = {
  'Genesis': {
    1: {
      1: 'In the beginning God created the heavens and the earth.',
      2: 'Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.',
      3: 'And God said, "Let there be light," and there was light.',
    }
  },
  'Matthew': {
    5: {
      1: 'Now when Jesus saw the crowds, he went up on a mountainside and sat down. His disciples came to him,',
      2: 'and he began to teach them.',
      3: 'He said: "Blessed are the poor in spirit, for theirs is the kingdom of heaven.',
    }
  },
  'John': {
    1: {
      1: 'In the beginning was the Word, and the Word was with God, and the Word was God.',
      2: 'He was with God in the beginning.',
      3: 'Through him all things were made; without him nothing has been made that has been made.',
    }
  }
};

export default function ReaderPage() {
  const [selectedBook, setSelectedBook] = useState('Genesis');
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [highlightedVerses, setHighlightedVerses] = useState<number[]>([]);

  const currentBook = bibleBooks.find(b => b.name === selectedBook);
  const verses = versesData[selectedBook]?.[selectedChapter] || {};

  const toggleHighlight = (verseNumber: number) => {
    setHighlightedVerses(prev =>
      prev.includes(verseNumber)
        ? prev.filter(v => v !== verseNumber)
        : [...prev, verseNumber]
    );
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', color: '#1f2937', paddingBottom: '2rem' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#fff', padding: '1rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ textDecoration: 'none', color: '#3b82f6' }}>
            <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold' }}>📖 Bible App</h1>
          </Link>
          <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Daily Streak: 🔥 5 days</div>
        </div>
      </header>

      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '1rem', display: 'grid', gridTemplateColumns: '250px 1fr', gap: '1.5rem' }}>
        {/* Sidebar - Book Selection */}
        <div style={{ backgroundColor: '#fff', borderRadius: '0.5rem', padding: '1rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', height: 'fit-content' }}>
          <h2 style={{ marginTop: 0, fontSize: '1.125rem', fontWeight: 'bold' }}>📚 Books</h2>
          <div style={{ maxHeight: '60vh', overflowY: 'auto' }}>
            {bibleBooks.map(book => (
              <button
                key={book.name}
                onClick={() => { setSelectedBook(book.name); setSelectedChapter(1); }}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  marginBottom: '0.5rem',
                  backgroundColor: selectedBook === book.name ? '#3b82f6' : '#f3f4f6',
                  color: selectedBook === book.name ? '#fff' : '#1f2937',
                  border: 'none',
                  borderRadius: '0.375rem',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  textAlign: 'left',
                  transition: 'all 0.2s'
                }}
              >
                {book.abbreviation}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Chapter Selection */}
          <div style={{ backgroundColor: '#fff', borderRadius: '0.5rem', padding: '1rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h1 style={{ margin: 0, fontSize: '1.5rem' }}>{selectedBook} - Chapter {selectedChapter}</h1>
              <button style={{ backgroundColor: '#3b82f6', color: '#fff', padding: '0.5rem 1rem', borderRadius: '0.375rem', border: 'none', cursor: 'pointer' }}>🔖 Bookmark</button>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {Array.from({ length: currentBook?.chapters || 1 }).map((_, i) => {
                const chapterNum = i + 1;
                return (
                  <button
                    key={chapterNum}
                    onClick={() => setSelectedChapter(chapterNum)}
                    style={{
                      padding: '0.5rem 0.75rem',
                      backgroundColor: selectedChapter === chapterNum ? '#3b82f6' : '#e5e7eb',
                      color: selectedChapter === chapterNum ? '#fff' : '#1f2937',
                      border: 'none',
                      borderRadius: '0.375rem',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      fontWeight: '500'
                    }}
                  >
                    {chapterNum}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Verses Display */}
          <div style={{ backgroundColor: '#fff', borderRadius: '0.5rem', padding: '2rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', lineHeight: '1.8' }}>
            {Object.entries(verses).length > 0 ? (
              Object.entries(verses).map(([verseNum, verseText]) => {
                const num = parseInt(verseNum);
                const isHighlighted = highlightedVerses.includes(num);
                return (
                  <div
                    key={verseNum}
                    onClick={() => toggleHighlight(num)}
                    style={{
                      marginBottom: '1.5rem',
                      padding: '0.75rem',
                      borderRadius: '0.375rem',
                      backgroundColor: isHighlighted ? '#fef08a' : 'transparent',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      borderLeft: isHighlighted ? '4px solid #fbbf24' : 'transparent'
                    }}
                  >
                    <sup style={{ color: '#3b82f6', fontWeight: 'bold', marginRight: '0.5rem' }}>{num}</sup>
                    <span>{verseText}</span>
                  </div>
                );
              })
            ) : (
              <p style={{ color: '#6b7280' }}>Select a chapter to read verses. More content coming soon!</p>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1f2937', color: '#f3f4f6', padding: '2rem', textAlign: 'center', marginTop: '3rem' }}>
        <p style={{ margin: '0.5rem 0' }}>© 2025 Bible App. Study at your own pace.</p>
      </footer>
    </div>
  );
}
