import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", to: "home" },
    { label: "Skills", to: "skills" },
    { label: "Projects", to: "projects" },
    { label: "Resume", to: "resume" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-base-100 shadow-md" : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold text-primary cursor-pointer">
          Samiul.dev
        </h1>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-base-content">
            ☰
          </button>
        </div>

        <ul className="hidden md:flex gap-6 font-medium text-base-content">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:text-primary transition cursor-pointer"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* 🔥 THEME BUTTON */}
        <ThemeToggle />
      </div>

      {menuOpen && (
        <ul className="md:hidden px-6 pb-4 text-center bg-base-100 shadow">
          {navItems.map((item) => (
            <li key={item.label} className="py-2 border-b border-base-300">
              <Link
                to={item.to}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="text-base-content hover:text-primary transition cursor-pointer"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;