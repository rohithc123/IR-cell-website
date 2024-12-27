'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface ProgramInfo {
  _id: string;
  name: string;
  link: string;
  location: string;
  stipend: string;
  date: string;
  deadline: string;
  duration: string;
  eligibility: string;
  college_nomination: 'YES' | 'NO';
  remarks: string;
}

const dummyData: ProgramInfo[] = [
  {
    _id: '1',
    name: 'Summer Research Program',
    link: 'https://example.com/program1',
    location: 'MIT, Cambridge, USA',
    stipend: '$3000/month',
    date: '2024-06-01',
    deadline: '2024-03-15',
    duration: '3 months',
    eligibility: 'Third year students with CGPA > 8.0',
    college_nomination: 'YES',
    remarks: 'Priority given to students with research experience'
  },
  {
    _id: '2',
    name: 'Global Engineering Internship',
    link: 'https://example.com/program2',
    location: 'Technical University of Munich, Germany',
    stipend: '1000€/month',
    date: '2024-07-01',
    deadline: '2024-04-01',
    duration: '2 months',
    eligibility: 'Second and Third year Engineering students',
    college_nomination: 'NO',
    remarks: 'German language proficiency preferred but not mandatory'
  },
  {
    _id: '3',
    name: 'Research Exchange Program',
    link: 'https://example.com/program3',
    location: 'University of Tokyo, Japan',
    stipend: '150000 JPY/month',
    date: '2024-05-15',
    deadline: '2024-02-28',
    duration: '6 months',
    eligibility: 'Final year students with relevant research background',
    college_nomination: 'YES',
    remarks: 'JLPT N3 or higher preferred'
  }
];

export default function InfoPage() {
  const [programs, setPrograms] = useState<ProgramInfo[]>(dummyData);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <header className="mb-8">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-900">Available Programs</h1>
              <Button asChild variant="outline">
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
            <p className="mt-2 text-gray-600">
              Explore international opportunities and research programs
            </p>
          </header>

          <div className="grid gap-6">
            {programs.map((program) => (
              <Card
                key={program._id}
                className="hover:shadow-2xl hover:scale-105 transition-all"
              >
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <span>{program.name}</span>
                    {program.college_nomination === 'YES' && (
                      <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        College Nomination Required
                      </span>
                    )}
                  </CardTitle>
                  <CardDescription>{program.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Program Details</h4>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <span className="font-medium">Duration:</span> {program.duration}
                        </li>
                        <li>
                          <span className="font-medium">Stipend:</span> {program.stipend}
                        </li>
                        <li>
                          <span className="font-medium">Start Date:</span>{' '}
                          {formatDate(program.date)}
                        </li>
                        <li className="text-red-600 font-bold">
                          <span className="font-medium">Application Deadline:</span>{' '}
                          {formatDate(program.deadline)}
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Requirements</h4>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <span className="font-medium">Eligibility:</span>{' '}
                          {program.eligibility}
                        </li>
                        <li>
                          <span className="font-medium">Remarks:</span> {program.remarks}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <Button
                      as="a"
                      href={program.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 bg-[#174869] text-primary-foreground"
                      variant="primary"
                    >
                      Apply Now
                    </Button>
                  </div>
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