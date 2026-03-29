const projects = [

  {
    name: "CareerCode (Full Stack MERN Platform)",
    desc: "A full-stack career guidance and practice platform with secure authentication, social login, and protected backend APIs built using the MERN stack.",
    live: "https://career-code-dd759.web.app/",
    github: {
      client: "https://github.com/Samiul2024/CareerCodeClient-practice-",
      server: "https://github.com/Samiul2024/CareerCodeServer-practice-",
    },
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Firebase Authentication",
      "Firebase Hosting",
      "Vercel"
    ],
    features: [
      "User Registration & Login system",
      "Secure JWT-based authentication",
      "Google Social Login integration",
      "Logout functionality with token handling",
      "Protected API routes",
      "Full MERN architecture (Client + Server separation)",
      "RESTful backend API with MongoDB",
      "Frontend deployed on Firebase Hosting",
      "Backend deployed on Vercel"
    ],
  },
  {
    name: "Coffee Store App (Full Stack)",
    desc: "Full CRUD app for managing coffee products | Separate admin dashboard | Add/Edit/Delete coffee items.",
    live: "https://coffee-store-app-59ed4.web.app/",
    github: {
      client: "https://github.com/Samiul2024/coffee-store-client.git",
      server: "https://github.com/Samiul2024/coffee-store-server.git",
    },
    techStack: ["React", "Firebase", "TailwindCSS"],
    features: [
      "Full CRUD operations",
      "Admin dashboard",
      "Product management (Add/Edit/Delete)",
    ],
  },
  {
    name: "Study Tracker App (Web + Mobile)",
    desc: "Developed a spaced-repetition-based study planner to boost memory retention with auto-scheduled review cycles.",
    live: "https://study-tracker-by-samiul.netlify.app/",
    github: "https://github.com/Samiul2024/my-personal-study-tracker-app",
    techStack: ["React", "Firebase", "Netlify"],
    features: [
      "Spaced repetition algorithm",
      "Auto scheduling of reviews",
      "Mobile and web responsive",
    ],
  },
  {
    name: "Awake Me - Alarm PWA",
    desc: "A progressive web application alarm clock with audio preview, silence button, and everyday only once repeat functionality.",
    live: "https://awake-me.netlify.app/",
    github: "https://github.com/Samiul2024/awake-me",
    techStack: ["React", "PWA", "HTML5, Audio API"],
    features: [
      "Audio preview for alarm sounds",
      "Silence button",
      "Repeat alarm only once per day",
    ],
  },
  {
    name: "Bills Payment & Management Systems",
    desc: "A secure platform for users to add, track, and manage bill payments using Firebase Authentication. Features Google Login, protected routes, dynamic UI with animations.",
    live: "https://bill-payment-app-by-samiul.netlify.app/",
    github: "https://github.com/Samiul2024/bills-management",
    techStack: ["React", "Firebase Auth", "React Router", "Framer Motion"],
    features: [
      "Google Authentication",
      "Protected routes",
      "Dynamic UI animations",
      "Bill payment tracking",
    ],
  },
  {
    name: "The Dragon News Portal",
    desc: "Built a dynamic, category-based news portal with modular React components and nested routing. Responsive layout with TailwindCSS.",
    live: "https://the-dragon-news-ddc3f.web.app",
    github: "https://github.com/Samiul2024/dragon-news-portal",
    techStack: ["React", "React Router", "TailwindCSS", "Firebase"],
    features: [
      "Category based news filtering",
      "Nested routing",
      "Responsive design",
    ],
  },
  {
    name: "Lawyer Booking App",
    desc: "An appointment booking platform connecting clients with lawyers. Features booking management, user authentication, and admin control panel.",
    live: "https://lawyer-booking-website.netlify.app/", // Replace with  real link
    github: "https://github.com/Samiul2024/lawyer-booking-app", // Replace with  repo
    techStack: ["React", "Firebase", "Redux", "Material-UI"],
    features: [
      "User authentication and profile",
      "Booking appointment system",
      "Admin dashboard to manage bookings",
      "Responsive UI",
    ],
  },
];

export default function Projects() {
  return (
    <section className="p-6 bg-base-100 text-base-content transition-colors duration-500">
      <h2 className="text-2xl font-bold text-center mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow hover:shadow-xl transition-all duration-300 bg-base-200"
          >
            {/* Project Name */}
            <h3 className="text-xl font-semibold mb-2">{proj.name}</h3>

            {/* Description */}
            <p className="text-sm text-base-content/70 mb-3">{proj.desc}</p>

            {/* Tech Stack */}
            <div className="mb-2">
              <strong>Tech Stack: </strong>
              {proj.techStack?.map((tech, i) => (
                <span
                  key={i}
                  className="inline-block bg-primary/20 text-primary px-2 py-1 text-xs rounded mr-1 mb-1"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Features */}
            <div className="mb-4">
              <strong>Features:</strong>
              <ul className="list-disc list-inside text-base-content/80 text-sm">
                {proj.features?.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Live Preview */}
            <div className="w-full h-64 mb-4 border rounded overflow-hidden">
              <iframe
                src={proj.live}
                title={`preview-${index}`}
                className="w-full h-full"
                sandbox="allow-scripts allow-same-origin"
              ></iframe>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2">
              <a
                href={proj.live}
                className="btn btn-sm btn-success"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>

              {/* GitHub Links */}
              {typeof proj.github === "string" && (
                <a
                  href={proj.github}
                  className="btn btn-sm btn-neutral"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}

              {typeof proj.github === "object" && (
                <>
                  {proj.github.client && (
                    <a
                      href={proj.github.client}
                      className="btn btn-sm btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Client
                    </a>
                  )}
                  {proj.github.server && (
                    <a
                      href={proj.github.server}
                      className="btn btn-sm btn-accent"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Server
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}