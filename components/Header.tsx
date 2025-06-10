// app/components/Header.tsx
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.jpg";
import MobileNavClient from "./HeaderClient";

const navItems = [
  { name: "Home", path: "/", icon: "🏠" },
  { name: "About", path: "/about", icon: "👤" },
  { name: "Projects", path: "/projects", icon: "💼" },
  { name: "Teaching", path: "/teaching", icon: "📖" },
  { name: "Contact", path: "/contact", icon: "✉️" },
  { name: "Download Resume", path: "/resume.pdf", icon: "⬇️", download: true },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-md p-4 dark:bg-gray-900/70">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="Logo" className="rounded-full md:w-36 w-20" />
        </Link>

        {/* Mobile Nav Client Component */}
        <MobileNavClient navItems={navItems} />
      </div>
    </header>
  );
};

export default Header;
