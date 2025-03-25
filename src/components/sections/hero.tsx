"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="home" className="w-full min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Frontend Developer</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          I build beautiful and responsive web experiences using modern technologies.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
} 