# 📖 Bible App - Modern YouVersion-Style Bible Reader

A fully responsive, progressive web app (PWA) designed to read, study, and track your Bible reading journey. Built with modern web technologies for desktop, tablet, and mobile devices.

## ✨ Features

### Core Reading Features
- **Multiple Bible Versions**: Support for KJV, ESV, NIV, NKJV, and more
- **Book & Chapter Navigation**: Smooth, intuitive navigation through 66 books
- **Parallel Translations**: Compare multiple versions side-by-side
- **Font Customization**: Adjustable font sizes and reading themes (light/dark mode)
- **Search Functionality**: Search verses across all translations

### User Features
- **Highlights & Notes**: Highlight verses and add personal notes
- **Bookmarks**: Save your favorite passages for quick access
- **Reading Plans**: Follow structured daily reading plans
- **Reading Progress**: Track your reading streaks and statistics

### Daily Verse & Streaks
- **Verse of the Day**: Curated daily verse from the Bible
- **Streak Counter**: Track consecutive days of reading
- **Achievement Badges**: Unlock badges for reading milestones (7 days, 30 days, etc.)

### Audio Features
- **Chapter Audio**: Listen to complete Bible chapters
- **Audio Player**: Play/pause, speed control, resume from last position
- **Offline Support**: Download audio for offline listening

### PWA Features
- **Installable**: Install directly on home screen (iOS/Android)
- **Offline Support**: Read Bible text offline
- **Background Sync**: Sync highlights and notes when online
- **Push Notifications**: Get reminded for daily readings

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Zustand** - State management
- **Axios** - HTTP client
- **Date-fns** - Date utilities
- **React Hot Toast** - Notifications

### Backend & Database
- **Next.js API Routes** - Serverless backend
- **Prisma** - ORM for database
- **PostgreSQL/MongoDB** - Database options
- **NextAuth.js** - Authentication
- **JWT** - Secure token authentication

### External APIs
- **API.Bible** or **Bible Brain** - Bible text and audio data
- **Faith Comes By Hearing** - High-quality audio narration

### DevOps
- **Vercel** - Deployment platform
- **GitHub** - Version control
- **Workbox** - Service Worker caching

## 📋 Project Structure

```
bible-app/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── globals.css             # Global styles
│   ├── (auth)/                 # Auth routes
│   │   ├── login/
│   │   ├── signup/
│   │   └── forgot-password/
│   ├── (main)/                 # Main app routes
│   │   ├── page.tsx            # Home/dashboard
│   │   ├── reader/[book]/[chapter]/ # Bible reader
│   │   ├── plans/              # Reading plans
│   │   ├── notes/              # User notes
│   │   └── settings/           # User settings
│   └── api/                    # API routes
│       ├── bible/              # Bible endpoints
│       ├── auth/               # Auth endpoints
│       ├── user/               # User endpoints
│       └── streak/             # Streak tracking
├── components/
│   ├── BibleReader/            # Main reader component
│   ├── VerseCard/              # Single verse display
│   ├── AudioPlayer/            # Audio playback
│   ├── Navbar/                 # Top navigation
│   ├── Sidebar/                # Side navigation
│   ├── HighlightMenu/          # Highlight options
│   └── StreakBadge/            # Streak display
├── lib/
│   ├── bible-api.ts            # Bible API client
│   ├── auth.ts                 # Authentication utils
│   ├── db.ts                   # Database client
│   ├── store.ts                # Zustand store
│   └── utils.ts                # Utility functions
├── types/
│   ├── bible.ts                # Bible types
│   ├── user.ts                 # User types
│   └── api.ts                  # API response types
├── prisma/
│   ├── schema.prisma           # Database schema
│   └── migrations/             # DB migrations
├── public/
│   ├── manifest.json           # PWA manifest
│   ├── service-worker.js       # Service worker
│   └── icons/                  # App icons
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.ts          # Tailwind config
├── next.config.js              # Next.js config
└── .env.example                # Environment variables
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- PostgreSQL database (or MongoDB)
- API.Bible or Bible Brain API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/arpancodez/bible-app.git
   cd bible-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` and add:
   ```env
   # Database
   DATABASE_URL=postgresql://user:password@localhost:5432/bible_app
   
   # API Keys
   BIBLE_API_KEY=your_api_bible_key
   NEXT_PUBLIC_BIBLE_API_URL=https://api.api.bible/v1
   
   # Auth
   NEXTAUTH_SECRET=your_secret_key_here
   NEXTAUTH_URL=http://localhost:3000
   
   # Environment
   NEXT_PUBLIC_APP_NAME=Bible App
   ```

4. **Set up database**
   ```bash
   npx prisma migrate dev
   ```

5. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

## 📚 Database Schema (Prisma)

```typescript
// User
model User {
  id                String     @id @default(cuid())
  email             String     @unique
  name              String
  password          String
  lastReadDate      DateTime?
  currentStreak     Int        @default(0)
  longestStreak     Int        @default(0)
  createdAt         DateTime   @default(now())
  updatedAt         DateTime   @updatedAt
  
  highlights        Highlight[]
  notes             Note[]
  bookmarks         Bookmark[]
  readingProgress   ReadingProgress[]
}

// Highlight
model Highlight {
  id                String     @id @default(cuid())
  userId            String
  user              User       @relation(fields: [userId], references: [id], onDelete: Cascade)
  bibleVersion      String
  reference         String     // e.g., "John.3.16"
  color             String     @default("yellow")
  createdAt         DateTime   @default(now())
}

// Note
model Note {
  id                String     @id @default(cuid())
  userId            String
  user              User       @relation(fields: [userId], references: [id], onDelete: Cascade)
  reference         String
  content           String
  createdAt         DateTime   @default(now())
  updatedAt         DateTime   @updatedAt
}

// Bookmark
model Bookmark {
  id                String     @id @default(cuid())
  userId            String
  user              User       @relation(fields: [userId], references: [id], onDelete: Cascade)
  reference         String
  label             String?
  createdAt         DateTime   @default(now())
}

// Reading Progress
model ReadingProgress {
  id                String     @id @default(cuid())
  userId            String
  user              User       @relation(fields: [userId], references: [id], onDelete: Cascade)
  date              DateTime
  bibleVersion      String
  firstReference    String
  lastReference     String
  deviceType        String     // "mobile", "tablet", "desktop"
  createdAt         DateTime   @default(now())
}
```

## 🎨 Key Components

### BibleReader Component
Main component for displaying and navigating Bible text.

```typescript
<BibleReader
  book="John"
  chapter={3}
  version="ESV"
  onVerseSelect={(verse) => setSelectedVerse(verse)}
/>
```

### AudioPlayer Component
Audio playback with speed and resume functionality.

```typescript
<AudioPlayer
  chapter={3}
  book="John"
  narration="dramatized"
/>
```

## 🔑 API Endpoints

### Bible Data
- `GET /api/bible/versions` - Get available Bible versions
- `GET /api/bible/books` - Get list of books
- `GET /api/bible/chapter?version=ESV&book=John&chapter=3` - Get chapter text
- `GET /api/bible/search?q=love` - Search verses

### User Features
- `POST /api/user/highlights` - Create highlight
- `GET /api/user/highlights` - Get user highlights
- `DELETE /api/user/highlights/:id` - Delete highlight
- `POST /api/user/notes` - Create note
- `GET /api/user/notes` - Get user notes

### Streaks
- `GET /api/streak/status` - Get current streak
- `POST /api/streak/record` - Record reading for today

## 📱 Mobile Optimization

- **Responsive Design**: Fully responsive from 320px+ devices
- **Touch Gestures**: Swipe to navigate between chapters
- **Mobile-First CSS**: CSS-in-JS optimized for mobile
- **Fast Loading**: ~1-2 second initial load
- **Offline Support**: Works without internet connection

## 🚢 Deployment

### Deploy to Vercel

```bash
# Connect your GitHub repo to Vercel
# Push to main branch triggers automatic deployment

vercel deploy
```

### Environment Variables on Vercel
Set these in Vercel dashboard:
- `DATABASE_URL`
- `BIBLE_API_KEY`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`

## 📖 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Guide](https://tailwindcss.com/docs)
- [Prisma ORM](https://www.prisma.io/docs/)
- [API.Bible Documentation](https://scripture.api.bible/)
- [PWA Guide](https://web.dev/progressive-web-apps/)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

MIT License - feel free to use this project for commercial or personal projects.

## 📧 Support

For issues, questions, or suggestions, please open an issue on GitHub or contact the maintainer.

## 🙏 Acknowledgments

- Bible text from API.Bible and Bible Brain
- Audio narration from Faith Comes By Hearing
- UI inspiration from YouVersion and similar apps
- Community feedback and contributions

---

**Made with ❤️ for Bible readers worldwide**
