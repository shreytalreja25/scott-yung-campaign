'use client';

import Link from 'next/link';
import './globals.css';
import { useState } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body>
        <header className="bg-blue-600 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold">
              Scott Yung
            </Link>

            {/* Hamburger Menu (Mobile View) */}
            <button
              className="block md:hidden focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Navigation"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>

            {/* Navigation Links */}
            <div
              className={`${
                isMenuOpen ? 'block' : 'hidden'
              } md:flex md:items-center space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0`}
            >
              <Link href="/about" className="hover:underline block md:inline-block">
                About
              </Link>
              <Link href="/policies" className="hover:underline block md:inline-block">
                Policies
              </Link>
              <Link href="/events" className="hover:underline block md:inline-block">
                Events
              </Link>
              <Link href="/donate" className="hover:underline block md:inline-block">
                Donate
              </Link>
              <Link href="/volunteer" className="hover:underline block md:inline-block">
                Volunteer
              </Link>
              <Link href="/grievance" className="hover:underline block md:inline-block">
                Grievance
              </Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
