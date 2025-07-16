export default function Footer() {
  return (
    <footer className="text-center py-6 bg-gray-900 text-white">
      <p>
        © {new Date().getFullYear()}{" "}
        <a
          href="https://github.com/Samiul2024"
          className=" hover:text-blue-400 transition"
          target="_blank"
        >
          Md. Samiulla Hossen
        </a>
      </p>
      <div className="mt-4 flex justify-center gap-4 text-xl">
        <a href="https://github.com/Samiul2024" target="_blank" className="hover:text-blue-400"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/md-samiulla-hossen" target="_blank" className="hover:text-blue-400"><i className="fab fa-linkedin"></i></a>
        <a href="mdsamiullahossen@gmail.com" target="_blank" className="hover:text-blue-400"><i className="fas fa-envelope"></i></a>
      </div>
    </footer>
  );
}
