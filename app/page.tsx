'use client';

import React from 'react';
import { BookOpen, Heart, Music, Flame } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 shadow-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Bible App</h1>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300">Modern Bible Reading Experience</p>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-16 mb-12 border-l-4 border-blue-600">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            📖 Welcome to Bible App
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
            Experience the Bible like never before. Read, study, and track your spiritual journey with our modern reading platform.
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            🚀 Coming Soon: Multiple translations, daily verses, audio narration, highlights, and more!
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Feature 1 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <BookOpen className="w-12 h-12 text-blue-600 mb-3" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Multiple Versions</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">Access KJV, ESV, NIV and more</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <Heart className="w-12 h-12 text-red-600 mb-3" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Highlights & Notes</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">Mark and annotate your passages</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <Music className="w-12 h-12 text-green-600 mb-3" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Audio Narration</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">Listen to chapter readings</p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <Flame className="w-12 h-12 text-orange-600 mb-3" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Reading Streaks</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">Track your daily progress</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Start Your Reading Journey</h3>
          <p className="text-blue-100 mb-8 text-lg">
            Experience God's Word in a modern, intuitive interface designed for your mobile device.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Begin Reading
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-300">© 2025 Bible App. Built with ❤️ for Bible readers.</p>
          <p className="text-slate-400 text-sm mt-2">A modern, responsive reading experience</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
