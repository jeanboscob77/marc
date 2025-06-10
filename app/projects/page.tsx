import ProjectList from "./project-list";

const categories = ["All", "Frontend", "Backend", "Full Stack"];

const projects = [
  {
    title: "HolyTalk Chat App",
    description:
      "A Christian-based real-time chat app with private and group messaging.",
    imageSrc: "/images/holytalk-screenshot.jpg",
    tags: ["#React", "#Node.js", "#Socket.IO"],
    category: "Full Stack",
    link: "/projects/holytalk",
    createdAt: new Date("2024-10-05"),
  },
  {
    title: "EdTech Platform",
    description:
      "A course management site where students can enroll and track learning.",
    imageSrc: "/images/edtech-screenshot.jpg",
    tags: ["#React", "#MongoDB", "#Node.js"],
    category: "Frontend",
    link: "/projects/edtech",
    createdAt: new Date("2024-08-01"),
  },
  {
    title: "PublicEcho",
    description:
      "A citizen engagement system for submitting and tracking complaints.",
    imageSrc: "/images/publicecho-screenshot.jpg",
    tags: ["#React", "#MongoDB", "#Node.js"],
    category: "Backend",
    link: "/projects/publicecho",
    createdAt: new Date("2024-05-10"),
  },
];

// Sort latest first (descending)
const sortedProjects = projects.sort(
  (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
);

export default function ProjectsPage() {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">My Projects</h1>
      <ProjectList categories={categories} projects={sortedProjects} />
    </main>
  );
}
