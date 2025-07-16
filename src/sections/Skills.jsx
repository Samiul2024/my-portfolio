export default function Skills() {
  const skills = [
    "HTML", "CSS", "TailwindCSS", "Bootstrap",
    "JavaScript", "React.js", "React Router", "Framer Motion",
    "Firebase", "Axios", "TanStack Query",
    "Node.js", "Express.js", "MongoDB",
    "Git", "GitHub", "Vercel", "Netlify",
    "WordPress", "Figma", "Notion", "Productivity Tools"
  ];

  return (
    <section id="skills" className="p-6 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold mb-4">My Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="bg-blue-100 px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
