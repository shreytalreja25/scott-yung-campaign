import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import Script from 'next/script'; // For Instagram embed

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-10 space-y-12">
      {/* Header Section */}
      <h1 className="text-4xl font-bold mb-8 text-center">About Scott Yung</h1>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-start justify-between md:space-x-8 mb-10">
        {/* Image Section */}
        <Image
          src="/placeholder.jpg"
          alt="Scott Yung"
          width={300}
          height={300}
          className="rounded-lg shadow-lg"
        />

        {/* Text Section with Grey Background */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md md:w-2/3">
          <p className="text-lg leading-relaxed mb-4">
            Scott Yung is a dedicated community leader and entrepreneur committed to making a difference in Bennelong. Raised by migrant parents in public housing, Scott's journey reflects his resilience and commitment to community development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <strong>Early Years:</strong> Raised by migrant parents in public housing in Sydney.
            </div>
            <div>
              <strong>Education:</strong> Attended public schools, laying the foundation for his future success.
            </div>
            <div>
              <strong>Career:</strong> Started as a bank teller and progressed to become Head of Recruitment at an ASX-listed wealth management firm.
            </div>
            <div>
              <strong>Entrepreneurship:</strong> Currently runs an education business in Ryde, contributing to the local economy.
            </div>
          </div>
        </div>
      </div>

      {/* Vision for Bennelong Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-center">Vision for Bennelong</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Supporting Families', 'Empowering Small Businesses', 'Addressing Local Challenges'].map((vision) => (
            <Card key={vision} className="shadow-md bg-gray-50">
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">{vision}</h3>
                <p className="text-sm">Scott is committed to {vision.toLowerCase()} in Bennelong, ensuring a brighter future for all residents.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Social Media Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Scott on Social Media</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Instagram Post 1 */}
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/p/C-yxuD8BO8j/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: '0',
              borderRadius: '3px',
              boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
              margin: '1px',
              maxWidth: '540px',
              minWidth: '326px',
              padding: '0',
              width: '100%',
            }}
          ></blockquote>

          {/* Instagram Post 2 */}
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/reel/DD8XcHOBDNV/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: '0',
              borderRadius: '3px',
              boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
              margin: '1px',
              maxWidth: '540px',
              minWidth: '326px',
              padding: '0',
              width: '100%',
            }}
          ></blockquote>

          {/* Instagram Post 3 */}
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/p/DDy6pojzwDK/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: '0',
              borderRadius: '3px',
              boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
              margin: '1px',
              maxWidth: '540px',
              minWidth: '326px',
              padding: '0',
              width: '100%',
            }}
          ></blockquote>
        </div>
      </div>

      {/* Include Instagram Script */}
      <Script async src="//www.instagram.com/embed.js" />
    </div>
  );
}
