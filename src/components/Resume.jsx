export default function Resume() {
  return (
    <section className="text-center p-6 bg-blue-50">
      <h2 className="text-2xl font-bold mb-4">Resume</h2>
      <a
        href="https://drive.google.com/uc?export=download&id=16R_Qrl55JT28-gIWOhwlZl-_GeosVEIE"
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
      </a>
    </section>
  );
}
