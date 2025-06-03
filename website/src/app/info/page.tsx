'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const countries = [
  { value: 'all', label: 'All Locations' },
  { value: 'usa', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'canada', label: 'Canada' },
  { value: 'australia', label: 'Australia' },
  { value: 'germany', label: 'Germany' },
  { value: 'france', label: 'France' },
  { value: 'japan', label: 'Japan' },
  { value: 'korea', label: 'South Korea' },
  { value: 'singapore', label: 'Singapore' },
  { value: 'china', label: 'China' },
  { value: 'india', label: 'India' },
  { value: 'brazil', label: 'Brazil' },
  { value: 'south-africa', label: 'South Africa' },
  { value: 'switzerland', label: 'Switzerland' },
  { value: 'netherlands', label: 'Netherlands' },
  { value: 'sweden', label: 'Sweden' },
  { value: 'denmark', label: 'Denmark' },
  { value: 'norway', label: 'Norway' },
  { value: 'finland', label: 'Finland' },
  { value: 'italy', label: 'Italy' },
  { value: 'spain', label: 'Spain' },
  { value: 'portugal', label: 'Portugal' },
  { value: 'belgium', label: 'Belgium' },
  { value: 'austria', label: 'Austria' },
  { value: 'new-zealand', label: 'New Zealand' },
  { value: 'ireland', label: 'Ireland' },
  { value: 'israel', label: 'Israel' },
  { value: 'uae', label: 'United Arab Emirates' },
  { value: 'saudi-arabia', label: 'Saudi Arabia' },
  { value: 'qatar', label: 'Qatar' },
  { value: 'hong-kong', label: 'Hong Kong' },
  { value: 'taiwan', label: 'Taiwan' },
  { value: 'malaysia', label: 'Malaysia' },
  { value: 'thailand', label: 'Thailand' },
  { value: 'vietnam', label: 'Vietnam' },
  { value: 'indonesia', label: 'Indonesia' },
  { value: 'philippines', label: 'Philippines' },
  { value: 'mexico', label: 'Mexico' },
  { value: 'chile', label: 'Chile' },
  { value: 'argentina', label: 'Argentina' },
  { value: 'colombia', label: 'Colombia' },
  { value: 'peru', label: 'Peru' },
  { value: 'turkey', label: 'Turkey' },
  { value: 'egypt', label: 'Egypt' },
  { value: 'nigeria', label: 'Nigeria' },
  { value: 'kenya', label: 'Kenya' },
  { value: 'ghana', label: 'Ghana' },
  { value: 'ethiopia', label: 'Ethiopia' },
  { value: 'morocco', label: 'Morocco' }
];

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

export default function InfoPage() {
  const [programs, setPrograms] = useState<ProgramInfo[]>([]);
  const [filteredPrograms, setFilteredPrograms] = useState<ProgramInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLocation, setFilterLocation] = useState('all');
  const [filterNomination, setFilterNomination] = useState('all');

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await fetch('/api/info');
        if (!response.ok) {
          throw new Error('Failed to fetch programs');
        }
        const data = await response.json();
        setPrograms(data);
        setFilteredPrograms(data);
      } catch (err) {
        setError('Failed to load programs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  useEffect(() => {
    let filtered = [...programs];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(program =>
        program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.eligibility.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply location filter
    if (filterLocation !== 'all') {
      filtered = filtered.filter(program =>
        program.location.toLowerCase().includes(filterLocation.toLowerCase())
      );
    }

    // Apply nomination filter
    if (filterNomination !== 'all') {
      filtered = filtered.filter(program =>
        program.college_nomination === filterNomination
      );
    }

    setFilteredPrograms(filtered);
  }, [searchTerm, filterLocation, filterNomination, programs]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="animate-pulse space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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

          <div className="mb-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                placeholder="Search programs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
              <Select value={filterLocation} onValueChange={setFilterLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by location" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country.value} value={country.value}>
                      {country.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={filterNomination} onValueChange={setFilterNomination}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by nomination" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Programs</SelectItem>
                  <SelectItem value="YES">Requires Nomination</SelectItem>
                  <SelectItem value="NO">No Nomination Required</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-6">
            {filteredPrograms.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-600">No programs found matching your criteria.</p>
              </div>
            ) : (
              filteredPrograms.map((program) => (
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
              ))
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}