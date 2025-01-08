import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Scott Yung Campaign',
  description: 'Political campaign website for Scott Yung',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {/* Navbar */}
        <header className="bg-blue-600 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">Scott Yung</Link>
            <div className="space-x-4">
              <Link href="/about" className="hover:underline">About</Link>
              <Link href="/policies" className="hover:underline">Policies</Link>
              <Link href="/events" className="hover:underline">Events</Link>
              <Link href="/donate" className="hover:underline">Donate</Link>
              <Link href="/volunteer" className="hover:underline">Volunteer</Link>
            </div>
          </nav>
        </header>
        {/* Page Content */}
        <main>{children}</main>
      </body>
    </html>
  )
}
