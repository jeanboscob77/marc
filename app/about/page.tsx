import Link from "next/link";
import { FaGithub, FaDownload } from "react-icons/fa";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Marc SENTWALI - Academician | Full-Stack Engineer | Data Scientist",
  description:
    "Learn more about Marc SENTWALI's journey in academia, full-stack engineering, data science, and his contributions to technology and research.",
  keywords:
    "Marc SENTWALI, about, full-stack engineer, data scientist, academician, portfolio, biography, software development, AI, machine learning, research",
  openGraph: {
    type: "website",
    title:
      "About Marc SENTWALI - Academician | Full-Stack Engineer | Data Scientist",
    description:
      "Learn more about Marc SENTWALI's journey in academia, full-stack engineering, data science, and his contributions to technology and research.",
    url: "https://marc-rose.vercel.app/about",
    siteName: "Marc SENTWALI's Website",
    images: [
      {
        url: "https://www.yourwebsite.com/path-to-your-image.jpg",
        width: 800,
        height: 600,
        alt: "Marc SENTWALI - Academician | Full-Stack Engineer | Data Scientist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About Marc SENTWALI - Academician | Full-Stack Engineer | Data Scientist",
    description:
      "Learn more about Marc SENTWALI's journey in academia, full-stack engineering, data science, and his contributions to technology and research.",
    // image: "https://www.yourwebsite.com/path-to-your-image.jpg",
    site: "@yourtwitterhandle",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white px-6 py-12">
      <div className="max-w-4xl mx-auto text-left">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 dark:text-white mb-10 animate-fade-in">
          About Me
        </h1>

        {/* Name & Role */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2 animate-slide-up">
          Marc SENTWALI
        </h2>
        <h3
          className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          Academician | Full-Stack Engineer | Data Scientist
        </h3>

        {/* Description */}
        <p
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          Bridging <strong> years of academia and industry innovation</strong>,
          I specialize in transforming complex ideas into impactful software and
          data-driven solutions.
        </p>

        {/* Expertise */}
        <div
          className="grid gap-4 md:grid-cols-2 text-left mb-10 animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
              🌐 Web & Software Development
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              React.js, Next.js, Node.js, Java, Python, Express, TailwindCSS,
              MongoDB
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
              📊 Data & AI
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              PySpark, Machine Learning, Databricks, Tableau, Power BI
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
              ⚙️ Systems Engineering
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              Scalable architectures, DevOps practices, Cloud platforms
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
            <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
              🎓 Mission
            </h4>
            <p className="text-gray-700 dark:text-gray-300">
              I teach, build, and optimize—turning code into solutions and data
              into decisions.
            </p>
          </div>
        </div>

        {/* Featured Links */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-8 animate-slide-up"
          style={{ animationDelay: "0.8s" }}
        >
          <Link
            href="/projects/latest"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow-md transition-transform hover:scale-105"
          >
            🔍 Latest Project
          </Link>
          <Link
            href="/courses"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md transition-transform hover:scale-105"
          >
            📚 Courses Taught
          </Link>
          <Link
            href="/research"
            className="bg-indigo-400 hover:bg-indigo-500 text-white px-6 py-3 rounded-full shadow-md transition-transform hover:scale-105"
          >
            📊 AI/ML Research
          </Link>
        </div>

        {/* Action Buttons */}
        <div
          className="flex flex-wrap justify-center gap-4 animate-slide-up"
          style={{ animationDelay: "1s" }}
        >
          <Link
            href="/collaborate"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md transition-transform hover:scale-105"
          >
            Let’s Collaborate
          </Link>
          <Link
            href="https://github.com/"
            target="_blank"
            className="bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-full shadow-md flex items-center gap-2 transition-transform hover:scale-105"
          >
            <FaGithub /> View GitHub
          </Link>
          <Link
            href="/Marc-SENTWALI-CV.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-md flex items-center gap-2 transition-transform hover:scale-105"
          >
            <FaDownload /> Download CV
          </Link>
        </div>
      </div>
    </div>
  );
}
