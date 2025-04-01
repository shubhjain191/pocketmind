"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  const goldColor = "#FFD700"; // Gold color
  const blueColor = "#1E3A8A"; // Blue color
  
  return (
    <div className="bg-background py-20 md:py-32 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <motion.span
              className="text-[gold] block mb-2" // Use gold color
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              
            >
              Smart Money Management
            </motion.span>
            <motion.span
              className="text-[blue]" // Use blue color
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              with PocketMind
            </motion.span>
          </h1>
          <motion.p
            className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            AI-powered expense tracking to manage spending, analyze budgets, and save smarter. Stay in control and achieve financial freedom effortlessly!
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link href="/dashboard">
              <Button size="lg" className="w-full sm:w-auto" style={{ backgroundColor: blueColor, color: "white" }}>
                Get started
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" style={{ borderColor: blueColor, color: blueColor }}>
              Learn more
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Banner Image */}
      <div className="max-w-4xl mx-auto animate-fade mt-12">
        <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
          <img
            src="/banner.png"
            alt="Financial Dashboard Preview"
            className="w-full h-full object-cover bg-gray-200"
          />
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/10 dark:bg-primary/20 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{ backgroundColor: `${goldColor}1A` }} // Gold background effect
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-secondary/10 dark:bg-secondary/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{ backgroundColor: `${blueColor}1A` }} // Blue background effect
        />
        <motion.div
          className="absolute top-1/4 left-1/4 w-12 h-12 bg-primary/20 dark:bg-primary/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{ backgroundColor: `${goldColor}33` }} // Gold with 20% opacity
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-secondary/20 dark:bg-secondary/30 rounded-full"
          animate={{
            y: [0, 30, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{ backgroundColor: `${blueColor}33` }} // Blue with 20% opacity
        />
      </div>
    </div>
  );
}
