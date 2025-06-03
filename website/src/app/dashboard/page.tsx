"use client"

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ProgramStats {
  totalPrograms: number;
  activePrograms: number;
  upcomingDeadlines: number;
  programsByLocation: { [key: string]: number };
}

export default function DashboardPage() {
  const [stats, setStats] = useState<ProgramStats>({
    totalPrograms: 0,
    activePrograms: 0,
    upcomingDeadlines: 0,
    programsByLocation: {}
  });
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/dashboard/info');
        if (!response.ok) {
          throw new Error('Failed to fetch dashboard info');
        }
        const data = await response.json();
        
        // Calculate statistics from the data
        const now = new Date();
        const activePrograms = data.filter(program => 
          new Date(program.deadline) > now
        ).length;
        
        const upcomingDeadlines = data.filter(program => {
          const deadline = new Date(program.deadline);
          const diffDays = Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
          return diffDays > 0 && diffDays <= 30;
        }).length;

        const programsByLocation = data.reduce((acc: { [key: string]: number }, program) => {
          acc[program.location] = (acc[program.location] || 0) + 1;
          return acc;
        }, {});

        setStats({
          totalPrograms: data.length,
          activePrograms,
          upcomingDeadlines,
          programsByLocation
        });
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />

      <main className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-[#174869]">Admin Dashboard</h1>
            <Button 
              className="bg-[#174869] hover:bg-[#1a5a7a] text-white"
              onClick={() => router.push('/dashboard/info')}
            >
              Manage Programs
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-[#F6F7F8]">
              <CardHeader>
                <CardTitle className="text-[#174869]">Total Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-gray-900">{stats.totalPrograms}</p>
                <p className="text-sm text-gray-600 mt-2">Active programs in the system</p>
              </CardContent>
            </Card>

            <Card className="bg-[#F6F7F8]">
              <CardHeader>
                <CardTitle className="text-[#174869]">Active Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-gray-900">{stats.activePrograms}</p>
                <p className="text-sm text-gray-600 mt-2">Programs currently accepting applications</p>
              </CardContent>
            </Card>

            <Card className="bg-[#F6F7F8]">
              <CardHeader>
                <CardTitle className="text-[#174869]">Upcoming Deadlines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-gray-900">{stats.upcomingDeadlines}</p>
                <p className="text-sm text-gray-600 mt-2">Deadlines in the next 30 days</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-[#F6F7F8]">
              <CardHeader>
                <CardTitle className="text-[#174869]">Programs by Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(stats.programsByLocation).map(([location, count]) => (
                    <div key={location} className="flex justify-between items-center">
                      <span className="text-gray-900">{location}</span>
                      <span className="text-[#174869] font-semibold">{count} programs</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#F6F7F8]">
              <CardHeader>
                <CardTitle className="text-[#174869]">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button 
                    className="w-full bg-[#174869] hover:bg-[#1a5a7a] text-white"
                    onClick={() => router.push('/dashboard/info')}
                  >
                    Add New Program
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-[#174869] text-[#174869] hover:bg-[#174869] hover:text-white"
                    onClick={() => router.push('/dashboard/info')}
                  >
                    View All Programs
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-[#174869] text-[#174869] hover:bg-[#174869] hover:text-white"
                    onClick={() => router.push('/')}
                  >
                    View Public Page
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