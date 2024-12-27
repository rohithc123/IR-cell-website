import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 ">
    <header className="w-full py-6 px-4 bg-[#174869] shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3 ">
          <Image 
            src="/ircell_logo.webp"
            alt="IR Cell Logo"
            width={60}
            height={60}
            className="object-contain pl-0"
          />
          <div>
            <h1 className="text-xl font-bold text-white">International Relations</h1>
            <span className="text-white">IIT Roorkee</span>
          </div>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-white hover:text-gray-200">Home</Link>
          <Link href="/info" className="text-white hover:text-gray-200">Programs</Link>
          <Link href="#about" className="text-white hover:text-gray-200">About</Link>
        </nav>
        <Button asChild className="bg-white hover:bg-gray-100 text-black">
          <Link href="/info">View Programs</Link>
        </Button>
      </div>
    </header>

      <main>
        {/* Hero Section with Background Image */}
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

        {/* Features Section */}
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

        {/* About Section */}
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

      <footer className="bg-[#174869] text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text text-white hover:text-gray-200">IR CELL IIT Roorkee</h3>
              <p className='text-white hover:text-gray-200'>Building global connections, fostering innovation</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white hover:text-gray-200">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-white hover:text-gray-200">Home</Link></li>
                <li><Link href="/info" className="text-white hover:text-gray-200">Programs</Link></li>
                <li><Link href="#about" className="text-white hover:text-gray-200">About</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-white hover:text-gray-200">Contact</h4>
              <p className='text-white hover:text-gray-200'>Indian Institute of Technology Roorkee</p>
              <p className='text-white hover:text-gray-200'>Roorkee, Uttarakhand, India</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-white hover:text-gray-200">
            <p className='text-white hover:text-gray-200'>&copy; {new Date().getFullYear()} IR CELL IIT Roorkee. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}