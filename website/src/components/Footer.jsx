'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#174869] text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white hover:text-gray-200">IR CELL IIT Roorkee</h3>
            <p className="text-white hover:text-gray-200">Building global connections, fostering innovation</p>
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
            <p className="text-white hover:text-gray-200">Indian Institute of Technology Roorkee</p>
            <p className="text-white hover:text-gray-200">Roorkee, Uttarakhand, India</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-white hover:text-gray-200">&copy; {new Date().getFullYear()} IR CELL IIT Roorkee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;