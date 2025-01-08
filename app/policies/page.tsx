'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';

export default function PoliciesPage() {
  const policies = [
    {
      id: 'healthcare',
      title: 'Healthcare',
      description: 'Improving access to quality care for all residents of Bennelong.',
      details: 'Scott Yung is committed to enhancing healthcare services in Bennelong by advocating for increased funding for local hospitals, supporting mental health initiatives, and ensuring that every resident has access to affordable and high-quality medical care.',
      icon: '🩺', // Icon for healthcare
      image: '/placeholder.svg' // Placeholder image
    },
    {
      id: 'housing-affordability',
      title: 'Housing Affordability',
      description: 'Making housing more accessible and affordable in Sydney.',
      details: "Scott's plan for housing affordability includes working with local councils to increase housing supply, supporting first-time homebuyers with targeted assistance programs, and advocating for policies that balance development with maintaining the character of our neighborhoods.",
      icon: '🏡', // Icon for housing
      image: '/placeholder.svg' // Placeholder image
    },
    {
      id: 'small-business-support',
      title: 'Small Business Support',
      description: 'Reducing red tape and providing financial assistance to local businesses.',
      details: 'Scott understands the challenges faced by small businesses. His policy includes streamlining bureaucratic processes, providing tax incentives for small business owners, and creating local business hubs to foster innovation and collaboration.',
      icon: '💼', // Icon for small business
      image: '/placeholder.svg' // Placeholder image
    },
    {
      id: 'education',
      title: 'Education',
      description: 'Enhancing funding for schools and programs for students in Bennelong.',
      details: "Education is a cornerstone of Scott's campaign. He plans to fight for increased funding for public schools in Bennelong, support programs that prepare students for the jobs of the future, and work to make higher education more accessible and affordable for local residents.",
      icon: '📚', // Icon for education
      image: '/placeholder.svg' // Placeholder image
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Scott Yung's Policy Priorities</h1>
      
      {/* Accordion Section */}
      <Accordion type="single" collapsible className="w-full">
        {policies.map((policy) => (
          <AccordionItem key={policy.id} value={policy.id} className="mb-6">
            <AccordionTrigger className="text-xl font-semibold flex items-center">
              <span className="mr-2">{policy.icon}</span>
              {policy.title}
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <Image
                  src={policy.image}
                  alt={`${policy.title} image`}
                  width={400}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
                <div>
                  <p className="mb-4 text-lg">{policy.description}</p>
                  <p className="text-sm">{policy.details}</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
