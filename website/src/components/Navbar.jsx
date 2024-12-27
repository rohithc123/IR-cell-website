'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    <header className="w-full py-6 px-4 bg-[#174869] shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
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
  );
};

export default Navbar;