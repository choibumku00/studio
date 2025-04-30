import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import {Button} from '@/components/ui/button';
import Link from 'next/link';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Similary',
  description: 'A similarity guessing game platform.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Mock user login state
  const isLoggedIn = false;
  const username = 'Player1';

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
      </body>
    </html>
  );
}
