"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />

      <main className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#174869] mb-8 text-center">About IR Cell</h1>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            The International Relations Cell at IIT Roorkee is dedicated to fostering global academic collaborations and providing students with international opportunities
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-[#F6F7F8] hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-[#174869]">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To facilitate and promote international academic collaborations, student exchange programs, and research opportunities for the IIT Roorkee community. We aim to create a globally connected academic environment that enriches the educational experience of our students and faculty.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#F6F7F8] hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-[#174869]">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To establish IIT Roorkee as a premier institution for international academic collaborations and to provide our students with world-class opportunities for global exposure and learning experiences.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-[#F6F7F8] hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-[#174869]">Student Exchange</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We facilitate student exchange programs with partner universities worldwide, providing students with opportunities to study abroad and experience different academic environments.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#F6F7F8] hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-[#174869]">Research Collaborations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We promote international research collaborations and joint projects between IIT Roorkee and leading global institutions, fostering innovation and knowledge exchange.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#F6F7F8] hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-[#174869]">International Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We organize international conferences, workshops, and cultural events to promote global academic exchange and cross-cultural understanding within the IIT Roorkee community.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-[#F6F7F8]">
            <CardHeader>
              <CardTitle className="text-[#174869]">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-[#174869] mb-4">Office Address</h3>
                  <p className="text-gray-600">
                    International Relations Cell<br />
                    Indian Institute of Technology Roorkee<br />
                    Roorkee - 247667, Uttarakhand, India
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#174869] mb-4">Contact Details</h3>
                  <p className="text-gray-600">
                    Email: ircell@iitr.ac.in<br />
                    Phone: +91-1332-285311<br />
                    Office Hours: 9:00 AM - 5:00 PM (Monday to Friday)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
} 