"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Jean from "@/public/Jean Bosco.jpg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-indigo-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white px-6 py-12 transition-colors duration-300 overflow-hidden">
      {/* Floating Background Blobs */}
      <div className="absolute w-96 h-96 bg-purple-700 dark:bg-purple-700 opacity-20 rounded-full filter blur-3xl top-[-100px] left-[-100px]"></div>
      <div className="absolute w-96 h-96 bg-pink-700 dark:bg-pink-700 opacity-20 rounded-full filter blur-3xl bottom-[-120px] right-[-80px]"></div>

      {/* Container for stacking card and CTA */}
      <div className="flex flex-col items-center justify-center z-10">
        {/* Glass Card */}
        <motion.div
          className="relative w-full max-w-3xl bg-white/70 dark:bg-white/10 backdrop-blur-lg border border-white/30 dark:border-white/20 rounded-3xl shadow-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Profile Image */}
          <motion.div
            className="mb-6 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-[130px] h-[130px] rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
              <Image
                src={Jean}
                alt="Jean Bosco"
                width={130}
                height={130}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Jean Bosco
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Web Developer & UI/UX Enthusiast
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            I design and build beautiful, fast, and accessible web experiences.
            Passionate about clean code and delightful interfaces. Let's connect
            and collaborate!
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/projects"
              className="px-6 py-3 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 hover:scale-105 transition-transform"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-white dark:bg-gray-700 text-indigo-600 dark:text-white rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 hover:scale-105 transition-transform"
            >
              Contact Me
            </Link>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center gap-6 text-2xl text-indigo-600 dark:text-indigo-400 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-800 dark:hover:text-white transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-800 dark:hover:text-white transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-800 dark:hover:text-white transition-colors"
            >
              <FaTwitter />
            </a>
          </motion.div>
        </motion.div>

        {/* Lecture Call to Action Section */}
        <section className="w-full max-w-3xl mt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/20 rounded-2xl shadow-xl px-8 py-10"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Interested in My Lectures?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I regularly share my knowledge through personal sessions and
              university lectures. Explore some of the topics I teach and how
              you can join!
            </p>
            <Link
              href="/lectures"
              className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-full shadow-md hover:bg-indigo-700 hover:scale-105 transition-transform"
            >
              Explore My Lectures
            </Link>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
