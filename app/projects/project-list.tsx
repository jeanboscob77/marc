"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  category: string;
  link: string;
  createdAt: Date;
}

type SortOption = "latest" | "oldest" | "title-asc" | "title-desc";

export default function ProjectList({
  categories,
  projects,
}: {
  categories: string[];
  projects: Project[];
}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState<SortOption>("latest");

  const filtered =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const sorted = [...filtered].sort((a, b) => {
    switch (sortOption) {
      case "latest":
        return b.createdAt.getTime() - a.createdAt.getTime();
      case "oldest":
        return a.createdAt.getTime() - b.createdAt.getTime();
      case "title-asc":
        return a.title.localeCompare(b.title);
      case "title-desc":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  return (
    <>
      {/* Filter & Sort Controls Container */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4 max-w-4xl mx-auto px-4">
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 rounded-full text-sm sm:text-base font-semibold transition
                ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-400/40"
                    : "bg-gray-200 text-gray-700 hover:bg-blue-100"
                }
              `}
              onClick={() => setSelectedCategory(category)}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center space-x-3">
          <label
            htmlFor="sort"
            className="font-medium text-gray-700 select-none"
          >
            Sort by:
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value as SortOption)}
            className="rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition shadow-sm"
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="title-asc">Title (A-Z)</option>
            <option value="title-desc">Title (Z-A)</option>
          </select>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {sorted.map((project, index) => (
          <div
            key={index}
            className="p-6 border border-gray-300 rounded-3xl shadow-md hover:shadow-lg transition transform hover:scale-[1.03] bg-white"
          >
            <Image
              src={project.imageSrc}
              alt={project.title}
              width={400}
              height={250}
              className="rounded-2xl mb-5 object-cover"
            />
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-block text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href={project.link}
              className="text-blue-600 font-medium hover:underline inline-block"
            >
              View Project &rarr;
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
