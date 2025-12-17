import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Bible App - Read & Study',
  description: 'A modern YouVersion-style Bible app with multiple translations, daily verses, and reading tracking',
  manifest: '/manifest.json',
  themeColor: '#1a73e8',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="bg-white dark:bg-dark text-dark dark:text-light">
        {children}
      </body>
    </html>
  );
}
