import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="\placeholder.jpg"
                alt="Scott Yung"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h1 className="text-4xl font-bold mb-4">A Stronger Voice for Bennelong</h1>
              <p className="text-xl mb-6">Join Scott Yung in building a brighter future for our community.</p>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/donate">Donate Now</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/volunteer">Volunteer</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Issues</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['Healthcare', 'Housing Affordability', 'Small Business Support', 'Education'].map((issue) => (
                <Card key={issue}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{issue}</h3>
                    <p className="mb-4">Learn about Scott's plan for {issue.toLowerCase()} in Bennelong.</p>
                    <Button asChild variant="outline">
                      <Link href={`/policies#${issue.toLowerCase().replace(' ', '-')}`}>Read More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>


    </div>
  )
}

