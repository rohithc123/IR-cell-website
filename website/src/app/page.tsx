"use client"

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

const notifications = [
  {
    id: 1,
    title: "New Exchange Program",
    message: "Applications open for Summer Exchange Program at ETH Zurich",
    date: "2024-03-15",
    link: "/info",
    image: "/notifications/eth.webp"
  },
  {
    id: 2,
    title: "Upcoming Event",
    message: "International Student Orientation on April 1st, 2024",
    date: "2024-03-14",
    link: "/events",
    image: "/notifications/orientation.webp"
  },
  {
    id: 3,
    title: "Research Opportunity",
    message: "Summer Research Program at MIT is now accepting applications",
    date: "2024-03-13",
    link: "/info",
    image: "/notifications/mit.webp"
  },
  {
    id: 4,
    title: "Scholarship Announcement",
    message: "New scholarship opportunities for international studies",
    date: "2024-03-12",
    link: "/info",
    image: "/notifications/scholarship.webp"
  },
  {
    id: 5,
    title: "Workshop Series",
    message: "International Research Workshop Series starting next month",
    date: "2024-03-11",
    link: "/events",
    image: "/notifications/workshop.webp"
  }
];

export default function LandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex + 1 >= notifications.length - cardsPerView + 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />

      <main>
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/thomson1.webp"
              alt="Background"
              fill
              className="object-cover opacity-50"
              priority
            />
          </div>
          <div className="max-w-9xl mx-auto text-center relative z-10">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              International Relations Cell
            </h1>
            <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto font-bold">
              Bridging global opportunities with academic excellence at IIT Roorkee
            </p>
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-[#174869] mb-8">Latest Updates</h2>
            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
                >
                  {notifications.map((notification) => (
                    <div key={notification.id} className="w-1/3 flex-shrink-0 px-2">
                      <Card className="hover:shadow-xl transition-all duration-300 h-full">
                        <div className="relative h-48">
                          <Image
                            src={notification.image}
                            alt={notification.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="text-[#174869]">{notification.title}</CardTitle>
                          <CardDescription>{notification.date}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4">{notification.message}</p>
                          <Button asChild className="bg-[#174869] hover:bg-[#1a5a7a] text-white">
                            <Link href={notification.link}>Learn More</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
              <button 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10"
                onClick={() => setCurrentIndex((prev) => 
                  prev === 0 ? notifications.length - cardsPerView : prev - 1
                )}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10"
                onClick={() => setCurrentIndex((prev) => 
                  prev + 1 >= notifications.length - cardsPerView + 1 ? 0 : prev + 1
                )}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-[#F6F7F8]">
              <CardHeader>
                <CardTitle>International Programs</CardTitle>
                <CardDescription>
                  Access global exchange programs and internships
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Connect with leading universities worldwide through our extensive network
                </p>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-[#F6F7F8]">
              <CardHeader>
                <CardTitle>Research Opportunities</CardTitle>
                <CardDescription>
                  Collaborate with international research institutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Engage in cutting-edge research projects with global partners
                </p>
              </CardContent>
            </Card>

            <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-[#F6F7F8]">
              <CardHeader>
                <CardTitle>Cultural Exchange</CardTitle>
                <CardDescription>
                  Experience diverse cultural perspectives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Broaden your horizons through international cultural programs
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="about" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-md text-gray-600 mb-6">
                  Founded in 1847, IIT Roorkee has a rich legacy of global impact and academic excellence. From the early days, it has trained engineers for transformative projects worldwide, such as William Willcocks, a 1872 graduate who proposed the first Aswan Dam and led irrigation initiatives in South Africa and Turkey. With students from over 55 countries, IIT Roorkee is a hub of cultural and academic diversity, especially in Water Resources. 
                </p>
                <p className="text-md text-gray-600">
                  The International Relations Cell furthers this legacy by fostering global collaborations, student exchanges, and research partnerships. Its mission is to provide international exposure and cross-cultural learning, shaping leaders for a global future.
                </p>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/aboutus.webp"
                  alt="IR Cell IIT Roorkee"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}