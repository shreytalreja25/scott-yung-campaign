import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About Scott Yung</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Scott Yung"
            width={400}
            height={400}
            className="rounded-lg shadow-lg mb-4"
          />
          <p className="text-lg mb-4">
            Scott Yung is a dedicated community leader and entrepreneur committed to making a difference in Bennelong.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Scott's Journey</h2>
          <ul className="space-y-4">
            <li>
              <strong>Early Years:</strong> Raised by migrant parents in public housing in Sydney.
            </li>
            <li>
              <strong>Education:</strong> Attended public schools, laying the foundation for his future success.
            </li>
            <li>
              <strong>Career:</strong> Started as a bank teller and progressed to become Head of Recruitment at an ASX-listed wealth management firm.
            </li>
            <li>
              <strong>Entrepreneurship:</strong> Currently runs an education business in Ryde, contributing to the local economy.
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Vision for Bennelong</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Supporting Families', 'Empowering Small Businesses', 'Addressing Local Challenges'].map((vision) => (
            <Card key={vision}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{vision}</h3>
                <p>Scott is committed to {vision.toLowerCase()} in Bennelong, ensuring a brighter future for all residents.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

