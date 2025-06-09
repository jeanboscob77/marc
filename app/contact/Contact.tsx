"use client";
import Image from "next/image";
import React from "react";
import { Mail, MessageCircle, PenLine, Send, User } from "lucide-react";
import { motion } from "framer-motion";
import contact from "@/public/contact.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-700 to-slate-900 flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8 space-y-6">
        {/* Animated Image */}
        <motion.div
          className="flex justify-center"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 12 }}
        >
          <motion.div
            animate={{
              y: [0, -7, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src={contact}
              alt="contact"
              className="w-3/4 h-40 object-contain"
            />
          </motion.div>
        </motion.div>
        {/* 
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
          Get in Touch
        </h2> */}

        <form className="space-y-5">
          {/* Name */}
          <div className="flex items-center gap-3 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 bg-white dark:bg-gray-800">
            <User className="text-gray-500 dark:text-gray-400" />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-white"
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 bg-white dark:bg-gray-800">
            <Mail className="text-gray-500 dark:text-gray-400" />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-white"
            />
          </div>

          {/* Subject */}
          <div className="flex items-center gap-3 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 bg-white dark:bg-gray-800">
            <PenLine className="text-gray-500 dark:text-gray-400" />
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-white"
            />
          </div>

          {/* Message */}
          <div className="flex items-start gap-3 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 bg-white dark:bg-gray-800">
            <MessageCircle className="mt-1 text-gray-500 dark:text-gray-400" />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full bg-transparent focus:outline-none resize-none text-gray-800 dark:text-white"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center justify-center w-full gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition"
          >
            <Send size={18} />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
