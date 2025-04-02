'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center space-y-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-9xl font-bold text-[#1E3A8A]">
          404
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800">
            Page Not Found
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Oops! The page you're looking for seems to have wandered off.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="inline-block">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-[#1E3A8A] text-white hover:bg-[#FFD700] hover:text-[#1E3A8A] transition-colors duration-300">
            <span className="mr-2">←</span>
            Return Home
          </Link>
        </motion.div>

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-8">
          <svg
            className="w-32 h-32 mx-auto text-[#1E3A8A]" 
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 15s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}