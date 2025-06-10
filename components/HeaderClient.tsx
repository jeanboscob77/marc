"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Moon,
  Sun,
  Home,
  User,
  Briefcase,
  Mail,
  Download,
  BookOpen,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import logo from "@/public/logo.jpg";

type NavItem = {
  name: string;
  path: string;
  icon: React.ReactNode;
  external?: boolean;
  download?: boolean;
};

const navItems: NavItem[] = [
  { name: "Home", path: "/", icon: <Home size={18} /> },
  { name: "About", path: "/about", icon: <User size={18} /> },
  { name: "Projects", path: "/projects", icon: <Briefcase size={18} /> },
  { name: "teaching", path: "/teaching", icon: <BookOpen size={18} /> },
  { name: "Contact", path: "/contact", icon: <Mail size={18} /> },
  {
    name: "Download Resume",
    path: "/resume.pdf",
    icon: <Download size={18} />,
    download: true,
  },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-md p-4 dark:bg-gray-900/70">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800 dark:text-white">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              className="rounded-full md:w-36 w-20"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map(({ name, path, icon, external, download }) => {
            const isActive = pathname === path;
            const baseClass =
              "hover:underline transition-colors duration-200 flex items-center space-x-1";
            const activeClass =
              "text-blue-600 dark:text-blue-400 font-semibold";
            const inactiveClass = "text-gray-700 dark:text-gray-200";

            return external ? (
              <Link
                key={name}
                href={path}
                target="_blank"
                rel="noopener noreferrer"
                className={`${baseClass} ${inactiveClass}`}
              >
                <span>{icon}</span>
                <span>{name}</span>
              </Link>
            ) : (
              <Link
                key={name}
                href={path}
                className={`${baseClass} ${
                  isActive ? activeClass : inactiveClass
                }`}
                {...(download ? { download: true } : {})}
              >
                <span>{icon}</span>
                <span>{name}</span>
              </Link>
            );
          })}

          {/* Theme Toggle Button (Desktop) */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-gray-800 dark:text-white transition-colors duration-200"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
        </nav>

        {/* Mobile Buttons */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Theme Toggle Button (Mobile) */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-gray-800 dark:text-white focus:outline-none"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          )}
          <button
            onClick={toggleMenu}
            className="text-gray-800 dark:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black dark:bg-black bg-opacity-30 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Sliding Panel */}
            <motion.div
              key="mobile-nav"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 w-full max-w-sm h-screen bg-white dark:bg-gray-900 z-50 p-6 overflow-hidden"
            >
              <div className="divide-y divide-gray-300 dark:divide-gray-700">
                {navItems.map(({ name, path, icon, external, download }) => {
                  const isActive = pathname === path;

                  return (
                    <Link
                      key={name}
                      href={path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-2 text-lg font-medium py-3 ${
                        isActive
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-gray-800 dark:text-gray-200"
                      }`}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      {...(download ? { download: true } : {})}
                    >
                      <span>{icon}</span>
                      <span>{name}</span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
