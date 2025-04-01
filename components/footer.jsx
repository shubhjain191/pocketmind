import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-yellow-400">PocketMind</h3>
            <p className="text-sm text-gray-300">
              Your personal AI-powered finance assistant for smarter money management.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">How It Works</Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-yellow-400 transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: shubhjain191@gmail.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Finance Street</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-yellow-400">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/shubhjain191" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/shubhjain19" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-black text-center text-sm text-white">
          <p>© {new Date().getFullYear()} PocketMind. Made with ❤️ by Shubh Jain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
