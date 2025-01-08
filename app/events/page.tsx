'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [events] = useState([
    { id: 1, title: 'Town Hall Meeting', date: '2023-08-15', time: '19:00', location: 'Ryde Community Center' },
    { id: 2, title: 'Campaign Rally', date: '2023-08-22', time: '14:00', location: 'Eastwood Park' },
    { id: 3, title: 'Fundraising Dinner', date: '2023-08-29', time: '18:30', location: 'Epping Club' },
    { id: 4, title: 'Community Cleanup', date: '2023-09-05', time: '10:00', location: 'Parramatta River' },
    { id: 5, title: 'Volunteer Meetup', date: '2023-09-12', time: '16:00', location: 'Macquarie Shopping Centre' },
    { id: 6, title: 'Health Fair', date: '2023-09-19', time: '09:00', location: 'West Ryde Public School' },
  ]);

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Upcoming Campaign Events</h1>

      {/* Search Bar */}
      <div className="mb-6">
        <Input
          placeholder="Search for events by title or location..."
          className="w-full p-3 border border-gray-300 rounded-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <Card key={event.id} className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{event.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600">
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Time:</strong> {event.time}</p>
              <p><strong>Location:</strong> {event.location}</p>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>RSVP</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>RSVP for {event.title}</DialogTitle>
                  </DialogHeader>
                  <form
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert('RSVP Confirmed! Thank you for registering.');
                    }}
                  >
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Your email" required />
                    </div>
                    <Button type="submit">Confirm RSVP</Button>
                  </form>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* No Events Found */}
      {filteredEvents.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No events match your search. Try a different query.</p>
      )}
    </div>
  );
}
