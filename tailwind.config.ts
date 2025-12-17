import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a73e8',
        secondary: '#34a853',
        accent: '#ff6d00',
        dark: '#1a1a1a',
        light: '#f5f5f5',
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
export default config
