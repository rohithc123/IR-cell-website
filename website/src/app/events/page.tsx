"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const events = [
  {
    id: 1,
    title: "International Student Orientation",
    date: "April 1, 2024",
    time: "10:00 AM - 2:00 PM",
    location: "Convocation Hall",
    description: "Welcome event for new international students with campus tour and information session",
    image: "/events/orientation.webp"
  },
  {
    id: 2,
    title: "Global Research Symposium",
    date: "April 15, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Main Auditorium",
    description: "Annual symposium showcasing international research collaborations and opportunities",
    image: "/events/symposium.webp"
  },
  {
    id: 3,
    title: "Cultural Exchange Festival",
    date: "May 5, 2024",
    time: "4:00 PM - 9:00 PM",
    location: "Student Activity Center",
    description: "Celebration of diverse cultures with food, performances, and interactive sessions",
    image: "/events/festival.webp"
  },
  {
    id: 4,
    title: "International Alumni Meet",
    date: "May 20, 2024",
    time: "6:00 PM - 9:00 PM",
    location: "Guest House",
    description: "Networking event with international alumni and current students",
    image: "/events/alumni.webp"
  }
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />

      <main className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#174869] mb-8 text-center">Upcoming Events</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-[#174869]">{event.title}</CardTitle>
                  <CardDescription>{event.date} | {event.time}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">{event.location}</p>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <Button asChild className="bg-[#174869] hover:bg-[#1a5a7a] text-white">
                    <Link href={`/events/${event.id}`}>Register Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 