export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', color: '#1f2937' }}>
      <header style={{ backgroundColor: '#fff', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>📖 Bible App</h1>
        <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Modern Bible Reading Experience</p>
      </header>

      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 1rem' }}>
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '0.5rem',
          padding: '2rem',
          marginBottom: '2rem',
          borderLeft: '4px solid #3b82f6',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginTop: 0 }}>📖 Welcome to Bible App</h2>
          <p style={{ fontSize: '1.125rem', color: '#4b5563', lineHeight: '1.6' }}>
            Experience the Bible like never before. Read, study, and track your spiritual journey with our modern reading platform.
          </p>
          <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>🚀 Coming Soon: Multiple translations, daily verses, audio narration, highlights, and more!</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '0.75rem', padding: '1.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginTop: 0 }}>📚 Multiple Versions</h3>
            <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Access KJV, ESV, NIV and more</p>
          </div>

          <div style={{ backgroundColor: '#fff', borderRadius: '0.75rem', padding: '1.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginTop: 0 }}>❤️ Highlights & Notes</h3>
            <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Mark and annotate your passages</p>
          </div>

          <div style={{ backgroundColor: '#fff', borderRadius: '0.75rem', padding: '1.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginTop: 0 }}>🎵 Audio Narration</h3>
            <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Listen to chapter readings</p>
          </div>

          <div style={{ backgroundColor: '#fff', borderRadius: '0.75rem', padding: '1.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginTop: 0 }}>🔥 Reading Streaks</h3>
            <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Track your daily progress</p>
          </div>
        </div>

        <div style={{
          background: 'linear-gradient(to right, #3b82f6, #4f46e5)',
          color: '#fff',
          borderRadius: '1rem',
          padding: '3rem 2rem',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginTop: 0 }}>Start Your Reading Journey</h3>
          <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>Experience God's Word in a modern, intuitive interface designed for your mobile device.</p>
          <button style={{
            backgroundColor: '#fff',
            color: '#3b82f6',
            padding: '0.75rem 2rem',
            borderRadius: '0.5rem',
            border: 'none',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}>
            Begin Reading
          </button>
        </div>
      </main>

      <footer style={{ backgroundColor: '#1f2937', color: '#f3f4f6', padding: '2rem', textAlign: 'center', marginTop: '2rem' }}>
        <p style={{ margin: '0.5rem 0' }}>© 2025 Bible App. Built with ❤️ for Bible readers.</p>
        <p style={{ margin: '0.5rem 0', fontSize: '0.875rem', color: '#9ca3af' }}>A modern, responsive reading experience</p>
      </footer>
    </div>
  );
}
