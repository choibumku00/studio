'use client';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { GoogleOAuthProvider } from '@react-oauth/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// export const metadata: Metadata = { // Cannot export metadata from client component
//   title: 'Similary',
//   description: 'A similarity guessing game platform.',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Mock user login state
  const isLoggedIn = false;
  const username = 'Player1';
  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  if (!googleClientId) {
    console.error("Missing NEXT_PUBLIC_GOOGLE_CLIENT_ID environment variable");
    // Optionally render an error message or fallback UI
  }


  return (
    <html lang="en">
      <head>
        <title>Similary</title>
        <meta name="description" content="A similarity guessing game platform." />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GoogleOAuthProvider clientId={googleClientId || "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com" /* Add your Client ID here */}>
          <header className="bg-secondary text-secondary-foreground p-4 flex justify-between items-center shadow-md">
            <Link href="/" className="text-2xl font-bold text-primary hover:text-primary/90 transition-colors">
              Similary
            </Link>
            <div>
              {isLoggedIn ? (
                <div className="flex items-center space-x-4">
                  <span className="font-medium">{username}</span>
                  <Button variant="outline" size="sm">
                    My Page
                  </Button>
                  <Button variant="outline" size="sm">
                    Logout
                  </Button>
                </div>
              ) : (
                <Link href="/login" passHref>
                  <Button variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </header>
          <main className="flex-grow">
            {children}
          </main>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
