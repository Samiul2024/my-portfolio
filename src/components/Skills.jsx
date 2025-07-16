const skills = ["HTML", "CSS", "JavaScript", "React", "Firebase", "TailwindCSS", "Bootstrap", "WordPress", "Git & GitHub"];

export default function Skills() {
  return (
    <section className="p-6 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span key={index} className="bg-blue-200 px-4 py-2 rounded-full text-sm font-semibold">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
