'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-[#1E3A8A] focus:outline-none"
      >
        {menuOpen ? (
          <i className="fa fa-times text-2xl"></i>
        ) : (
          <i className="fa fa-bars text-2xl"></i>
        )}
      </button>

      <ul
        className={`${menuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-white shadow-md`}
      >
        <li>
          <Link href="/" className="block p-4 text-[#1E3A8A] hover:text-[#FFD700] transition">
            Home
          </Link>
        </li>
        <li>
          <a
            href="#features"
            className="block p-4 text-[#1E3A8A] hover:text-[#FFD700] transition"
          >
            Features
          </a>
        </li>
        <li>
          <a
            href="#testimonials"
            className="block p-4 text-[#1E3A8A] hover:text-[#FFD700] transition"
          >
            Testimonials
          </a>
        </li>
        <li>
          <Link
            href="#about-us"
            className="block p-4 text-[#1E3A8A] hover:text-[#FFD700] transition"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="#contact-us"
            className="block p-4 text-[#1E3A8A] hover:text-[#FFD700] transition"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;