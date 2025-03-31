"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">

        {/* Logo & Brand Name */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="PocketMind Logo" width={40} height={20} className="cursor-pointer" />
          <span className="text-2xl font-extrabold tracking-wide uppercase"
            style={{
              fontFamily: "'Poppins', sans-serif",
              background: "linear-gradient(90deg, #FFD700, #1E3A8A)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            PocketMind
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-[#1E3A8A] focus:outline-none">
          {menuOpen ? <i className="fa fa-times text-2xl"></i> : <i className="fa fa-bars text-2xl"></i>}
        </button>

        {/* Navigation Links */}
        <ul className={`lg:flex space-x-6 items-center ${menuOpen ? "block" : "hidden"} absolute top-16 left-0 w-full bg-white shadow-md lg:relative lg:top-0 lg:w-auto lg:shadow-none`}>
          <SignedOut>
            <li><Link href="/" className="text-[#1E3A8A] hover:text-[#FFD700] transition">Home</Link></li>
            <li><a href="#features" className="text-[#1E3A8A] hover:text-[#FFD700] transition">Features</a></li>
            <li><a href="#testimonials" className="text-[#1E3A8A] hover:text-[#FFD700] transition">Testimonials</a></li>
            <li><Link href="#about-us" className="text-[#1E3A8A] hover:text-[#FFD700] transition">About Us</Link></li>
            <li><Link href="#contact-us" className="text-[#1E3A8A] hover:text-[#FFD700] transition">Contact</Link></li>
          </SignedOut>
        </ul>

        {/* Action Buttons */}
        <div className="flex space-x-4 items-center">
          <SignedIn>
            <Link href="/dashboard">
              <Button variant="outline" className="flex items-center gap-2 text-[#1E3A8A] border-[#1E3A8A] hover:bg-[#FFD700] hover:border-[#FFD700] hover:text-black">
                <LayoutDashboard size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
            <Link href="/transaction/create">
              <Button className="flex items-center gap-2 bg-[#FFD700] text-black hover:bg-[#1E3A8A] hover:text-white transition">
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button variant="outline" className="text-[#1E3A8A] border-[#1E3A8A] hover:bg-[#FFD700] hover:border-[#FFD700] hover:text-black">
                Login
              </Button>
            </SignInButton>
            <SignUpButton>
              <Button className="bg-[#1E3A8A] text-white px-4 py-2 rounded-lg hover:bg-[#FFD700] hover:text-black transition">
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton appearance={{ elements: { avatarBox: "w-10 h-10" } }} />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
