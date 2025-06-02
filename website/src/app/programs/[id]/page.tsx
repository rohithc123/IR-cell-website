import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProgramApplicationPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      
      <div className="max-w-3xl mx-auto py-16 px-4">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-[#174869]">
              Program Application
            </CardTitle>
            <p className="text-gray-600">Fill out the form to apply for the program</p>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="roll">Roll Number</Label>
                <Input id="roll" placeholder="Enter your roll number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">IITR Email</Label>
                <Input id="email" type="email" placeholder="Enter your IITR email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Input id="department" placeholder="Enter your department" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">Year of Study</Label>
                <Input id="year" placeholder="Enter your year of study" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cgpa">Current CGPA</Label>
                <Input id="cgpa" type="number" step="0.01" placeholder="Enter your CGPA" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="statement">Statement of Purpose</Label>
                <Textarea
                  id="statement"
                  placeholder="Why do you want to participate in this program? (500 words max)"
                  className="min-h-[200px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="resume">Upload Resume</Label>
                <Input id="resume" type="file" accept=".pdf,.doc,.docx" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="transcript">Upload Transcript</Label>
                <Input id="transcript" type="file" accept=".pdf" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="recommendation">Letter of Recommendation</Label>
                <Input id="recommendation" type="file" accept=".pdf,.doc,.docx" />
              </div>
              <div className="flex items-center space-x-2">
                <Input type="checkbox" id="terms" className="w-4 h-4" />
                <Label htmlFor="terms" className="text-sm">
                  I confirm that all the information provided is accurate and I understand that any false information may lead to disqualification.
                </Label>
              </div>
              <div className="flex justify-end space-x-4">
                <Button variant="outline" className="border-[#174869] text-[#174869] hover:bg-[#174869] hover:text-white">
                  Cancel
                </Button>
                <Button className="bg-[#174869] hover:bg-[#1a5a7a] text-white">
                  Submit Application
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
} 