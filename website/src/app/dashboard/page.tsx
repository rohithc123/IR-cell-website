"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const notifications = [
  {
    id: 1,
    title: "New Program Available",
    message: "Summer Research Program at MIT is now accepting applications",
    date: "2024-03-15",
    read: false
  },
  {
    id: 2,
    title: "Application Status Update",
    message: "Your application for the Exchange Program at ETH Zurich has been reviewed",
    date: "2024-03-14",
    read: true
  }
];

const applications = [
  {
    id: 1,
    program: "Summer Exchange Program - ETH Zurich",
    status: "Under Review",
    date: "March 15, 2024",
    deadline: "April 1, 2024"
  },
  {
    id: 2,
    program: "Research Internship - MIT",
    status: "Submitted",
    date: "March 10, 2024",
    deadline: "March 25, 2024"
  },
  {
    id: 3,
    program: "Cultural Exchange - University of Tokyo",
    status: "Accepted",
    date: "February 28, 2024",
    deadline: "March 15, 2024"
  }
];

const events = [
  {
    id: 1,
    title: "International Student Orientation",
    date: "April 1, 2024",
    time: "10:00 AM",
    location: "Convocation Hall"
  },
  {
    id: 2,
    title: "Pre-departure Briefing",
    date: "April 5, 2024",
    time: "2:00 PM",
    location: "IR Cell Office"
  }
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />

      <main className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#174869] mb-8">Dashboard</h1>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-[#F6F7F8]">
              <CardHeader>
                <CardTitle className="text-[#174869]">My Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {applications.map((app) => (
                    <div key={app.id} className="border-b pb-4 last:border-b-0">
                      <h3 className="font-semibold text-gray-900">{app.program}</h3>
                      <div className="flex justify-between items-center mt-2">
                        <span className={`px-2 py-1 rounded-full text-sm ${
                          app.status === "Accepted" ? "bg-green-100 text-green-800" :
                          app.status === "Under Review" ? "bg-yellow-100 text-yellow-800" :
                          "bg-blue-100 text-blue-800"
                        }`}>
                          {app.status}
                        </span>
                        <span className="text-sm text-gray-600">Applied: {app.date}</span>
                      </div>
                      <div className="mt-2 text-sm text-gray-600">
                        Deadline: {app.deadline}
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="mt-4 w-full bg-[#174869] hover:bg-[#1a5a7a] text-white">
                  View All Applications
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[#F6F7F8]">
              <CardHeader>
                <CardTitle className="text-[#174869]">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {events.map((event) => (
                    <div key={event.id} className="border-b pb-4 last:border-b-0">
                      <h3 className="font-semibold text-gray-900">{event.title}</h3>
                      <div className="mt-2 text-sm text-gray-600">
                        <p>Date: {event.date}</p>
                        <p>Time: {event.time}</p>
                        <p>Location: {event.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="mt-4 w-full bg-[#174869] hover:bg-[#1a5a7a] text-white">
                  View All Events
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#F6F7F8]">
              <CardHeader>
                <CardTitle className="text-[#174869]">Profile Completion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-[#174869] h-2.5 rounded-full" style={{ width: "75%" }}></div>
                </div>
                <p className="mt-2 text-sm text-gray-600">75% Complete</p>
                <Button className="mt-4 w-full bg-[#174869] hover:bg-[#1a5a7a] text-white">
                  Update Profile
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[#F6F7F8]">
              <CardHeader>
                <CardTitle className="text-[#174869]">Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Resume</span>
                    <span className="text-sm text-green-600">Uploaded</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Transcript</span>
                    <span className="text-sm text-green-600">Uploaded</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">LOR</span>
                    <span className="text-sm text-yellow-600">Pending</span>
                  </div>
                </div>
                <Button className="mt-4 w-full bg-[#174869] hover:bg-[#1a5a7a] text-white">
                  Manage Documents
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[#F6F7F8]">
              <CardHeader>
                <CardTitle className="text-[#174869]">Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">
                    View Available Programs
                  </Button>
                  <Button variant="outline" className="w-full">
                    Check Application Status
                  </Button>
                  <Button variant="outline" className="w-full">
                    Download Documents
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 