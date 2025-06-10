"use client";
import React, { useState } from "react";
import axios from "axios";
import { Mail, MessageCircle, PenLine, Send, User } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Input validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("Please fill in all fields!");
      return;
    }

    // Simple email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(formData.email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contacts`,
        formData
      );

      if (response.data) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Error submitting form. Check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-700 to-slate-900 flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
          Get in Touch
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="flex items-center gap-3 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 bg-white dark:bg-gray-800">
            <User className="text-gray-500 dark:text-gray-400" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-white"
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 bg-white dark:bg-gray-800">
            <Mail className="text-gray-500 dark:text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-white"
            />
          </div>

          {/* Subject */}
          <div className="flex items-center gap-3 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 bg-white dark:bg-gray-800">
            <PenLine className="text-gray-500 dark:text-gray-400" />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-white"
            />
          </div>

          {/* Message */}
          <div className="flex items-start gap-3 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 bg-white dark:bg-gray-800">
            <MessageCircle className="mt-1 text-gray-500 dark:text-gray-400" />
            <textarea
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full bg-transparent focus:outline-none resize-none text-gray-800 dark:text-white"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex items-center justify-center w-full gap-2 ${
              isSubmitting ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            } text-white font-semibold py-3 px-6 rounded-xl transition`}
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <Send size={18} /> Send Message
              </>
            )}
          </button>
        </form>

        {/* Toast Container */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
