"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

type NavItem = {
  name: string;
  path: string;
  icon: string | React.ReactNode;
  external?: boolean;
  download?: boolean;
};

const MobileNavClient = ({ navItems }: { navItems: NavItem[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-6">
        {navItems.map(({ name, path, icon, external, download }) => {
          const isActive = pathname === path;
          return (
            <Link
              key={name}
              href={path}
              className={`flex items-center space-x-1 text-sm font-medium ${
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
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-gray-800 dark:text-white"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        )}
      </nav>

      {/* Mobile Buttons */}
      <div className="md:hidden flex items-center space-x-2">
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-gray-800 dark:text-white"
          >
            {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        )}
        <button
          onClick={toggleMenu}
          className="text-gray-800 dark:text-white"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sliding Panel */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-0 left-0 w-full max-w-sm h-screen bg-white dark:bg-gray-900 z-50 p-6 transition-transform duration-300 ease-in-out transform translate-x-0">
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
          </div>
        </>
      )}
    </>
  );
};

export default MobileNavClient;
