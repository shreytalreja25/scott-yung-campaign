'use client'

import { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function PoliciesPage() {
  const [activePolicy, setActivePolicy] = useState('healthcare')

  const policies = [
    {
      id: 'healthcare',
      title: 'Healthcare',
      description: 'Improving access to quality care for all residents of Bennelong.',
      details: 'Scott Yung is committed to enhancing healthcare services in Bennelong by advocating for increased funding for local hospitals, supporting mental health initiatives, and ensuring that every resident has access to affordable and high-quality medical care.'
    },
    {
      id: 'housing-affordability',
      title: 'Housing Affordability',
      description: 'Making housing more accessible and affordable in Sydney.',
      details: "Scott's plan for housing affordability includes working with local councils to increase housing supply, supporting first-time homebuyers with targeted assistance programs, and advocating for policies that balance development with maintaining the character of our neighborhoods."
    },
    {
      id: 'small-business-support',
      title: 'Small Business Support',
      description: 'Reducing red tape and providing financial assistance to local businesses.',
      details: 'Scott understands the challenges faced by small businesses. His policy includes streamlining bureaucratic processes, providing tax incentives for small business owners, and creating local business hubs to foster innovation and collaboration.'
    },
    {
      id: 'education',
      title: 'Education',
      description: 'Enhancing funding for schools and programs for students in Bennelong.',
      details: "Education is a cornerstone of Scott's campaign.He plans to fight for increased funding for public schools in Bennelong, support programs that prepare students for the jobs of the future, and work to make higher education more accessible and affordable for local residents."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Scott Yung's Policy Priorities</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <nav className="space-y-2">
            {policies.map((policy) => (
              <button
                key={policy.id}
                onClick={() => setActivePolicy(policy.id)}
                className={`w-full text-left px-4 py-2 rounded ${activePolicy === policy.id ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
                  }`}
              >
                {policy.title}
              </button>
            ))}
          </nav>
        </div>
        <div className="md:col-span-3">
          <Accordion type="single" collapsible className="w-full">
            {policies.map((policy) => (
              <AccordionItem key={policy.id} value={policy.id}>
                <AccordionTrigger>{policy.title}</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">{policy.description}</p>
                  <p>{policy.details}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}

