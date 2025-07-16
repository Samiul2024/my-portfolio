const projects = [
  {
    name: "Study Tracker",
    live: "https://study-tracker-by-samiul.netlify.app/",
    github: "https://github.com/Samiul2024/my-personal-study-tracker-app",
    desc: "Spaced-repetition study app with review calendar and auto scheduling.",
  },
  {
    name: "Awake Me",
    live: "https://awake-me.netlify.app/",
    github: "https://github.com/Samiul2024/study-tracker-mobile-app",
    desc: "Alarm clock app with sound preview, silence function and alarm reset.",
  },
  {
    name: "Bill Management System",
    live: "https://coffee-store-app-59ed4.web.app/",
    github: "https://github.com/Samiul2024/A",
    desc: "Bill management with Google auth and payment logic.",
  },
];

export default function Projects() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <div key={index} className="p-4 border rounded shadow">
            <h3 className="text-xl font-semibold">{proj.name}</h3>
            <p className="my-2">{proj.desc}</p>
            <div className="flex gap-4 mt-2">
              <a href={proj.live} target="_blank" className="text-blue-600 underline">Live</a>
              <a href={proj.github} target="_blank" className="text-blue-600 underline">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
