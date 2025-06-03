'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/navigation';
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

export default function InfoManagementPage() {
  const [programs, setPrograms] = useState<ProgramInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<Partial<ProgramInfo>>({
    name: '',
    link: '',
    location: '',
    stipend: '',
    date: '',
    deadline: '',
    duration: '',
    eligibility: '',
    college_nomination: 'NO',
    remarks: ''
  });
  const { isAuthenticated, loading: authLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, authLoading, router]);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await fetch('/api/dashboard/info');
        if (!response.ok) {
          throw new Error('Failed to fetch programs');
        }
        const data = await response.json();
        setPrograms(data);
      } catch (err) {
        setError('Failed to load programs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (isAuthenticated) {
      fetchPrograms();
    }
  }, [isAuthenticated]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/dashboard/info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to add program');
      }

      const newProgram = await response.json();
      setPrograms([...programs, newProgram]);
      setFormData({
        name: '',
        link: '',
        location: '',
        stipend: '',
        date: '',
        deadline: '',
        duration: '',
        eligibility: '',
        college_nomination: 'NO',
        remarks: ''
      });
    } catch (err) {
      setError('Failed to add program. Please try again.');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/dashboard/info/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete program');
      }

      setPrograms(programs.filter(program => program._id !== id));
    } catch (err) {
      setError('Failed to delete program. Please try again.');
    }
  };

  if (loading || authLoading) {
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

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Manage Programs</h1>
            <p className="mt-2 text-gray-600">
              Add, edit, or remove international programs
            </p>
          </header>

          {error && (
            <div className="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Add New Program</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Program Name</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Link</label>
                    <Input
                      value={formData.link}
                      onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <Input
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Stipend</label>
                    <Textarea
                      value={formData.stipend}
                      onChange={(e) => setFormData({ ...formData, stipend: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Start Date</label>
                      <Input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Deadline</label>
                      <Input
                        type="date"
                        value={formData.deadline}
                        onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Duration</label>
                    <Input
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Eligibility</label>
                    <Textarea
                      value={formData.eligibility}
                      onChange={(e) => setFormData({ ...formData, eligibility: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">College Nomination</label>
                    <Select
                      value={formData.college_nomination}
                      onValueChange={(value: 'YES' | 'NO') => setFormData({ ...formData, college_nomination: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select nomination requirement" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="YES">Required</SelectItem>
                        <SelectItem value="NO">Not Required</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Remarks</label>
                    <Textarea
                      value={formData.remarks}
                      onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#174869] hover:bg-[#1a5a7a] text-white">
                    Add Program
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Existing Programs</h2>
              {programs.map((program) => (
                <Card key={program._id}>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>{program.name}</span>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(program._id)}
                      >
                        Delete
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">Location:</span> {program.location}</p>
                      <p><span className="font-medium">Duration:</span> {program.duration}</p>
                      <p><span className="font-medium">Deadline:</span> {new Date(program.deadline).toLocaleDateString()}</p>
                      <p><span className="font-medium">Nomination Required:</span> {program.college_nomination}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 