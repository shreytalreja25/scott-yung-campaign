import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-600 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              Scott Yung
            </Link>
            <div className="space-x-4">
              <Link href="/about" className="hover:underline">
                About
              </Link>
              <Link href="/policies" className="hover:underline">
                Policies
              </Link>
              <Link href="/events" className="hover:underline">
                Events
              </Link>
              <Link href="/donate" className="hover:underline">
                Donate
              </Link>
              <Link href="/volunteer" className="hover:underline">
                Volunteer
              </Link>
              <Link href="/grievance" className="hover:underline">
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
