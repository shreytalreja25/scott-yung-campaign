'use client';

import Link from 'next/link';
import './globals.css';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <html lang="en">
      <body>
        {/* Header Section */}
        <header className="bg-blue-600 text-white p-4 shadow-md">
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
              } md:flex md:items-center space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0 transition-all duration-300 ease-in-out`}
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

        {/* Main Content */}
        <main className="container mx-auto py-8">{children}</main>

        {/* Footer Section */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="hover:underline">About Scott</Link></li>
                  <li><Link href="/policies" className="hover:underline">Policies</Link></li>
                  <li><Link href="/events" className="hover:underline">Events</Link></li>
                  <li><Link href="/donate" className="hover:underline">Donate</Link></li>
                  <li><Link href="/volunteer" className="hover:underline">Volunteer</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p>Email: scott.yung@nswliberal.org.au</p>
                <p>Phone: 02 8356 0300</p>
                <p>Address: PO BOX 892, Chatswood 2057</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-blue-400" aria-label="LinkedIn">LinkedIn</a>
                  <a href="#" className="hover:text-blue-400" aria-label="Instagram">Instagram</a>
                  <a href="#" className="hover:text-blue-400" aria-label="Facebook">Facebook</a>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p>&copy; 2025 Scott Yung Campaign. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* AI Chatbot */}
        <div className="fixed bottom-4 right-4">
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700"
          >
            💬 Chat
          </button>

          {isChatOpen && (
            <div className="fixed bottom-16 right-4 w-80 h-96 bg-white shadow-lg border rounded-lg flex flex-col">
              <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
                <h3 className="text-lg font-bold">AI Chatbot</h3>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="text-white hover:text-gray-200"
                  aria-label="Close Chat"
                >
                  ✖
                </button>
              </div>
              <div className="flex-grow overflow-y-auto p-4">
                <p className="text-sm text-gray-600 mb-4">Ask me anything about Scott Yung’s campaign!</p>
                <textarea
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  rows={4}
                  placeholder="Type your message here..."
                ></textarea>
                <Button className="mt-2 bg-blue-600 text-white w-full">Send</Button>
              </div>
            </div>
          )}
        </div>
      </body>
    </html>
  );
}
