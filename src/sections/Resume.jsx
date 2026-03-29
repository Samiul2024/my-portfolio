import { useState } from "react";

export default function Resume() {
  const [showResume, setShowResume] = useState(false);
  const resumeId = "1YwYYwlFuTsxo4CvOnKzrrkRtHDTF9d-A";

  return (
    <section className="text-center p-6 bg-base-100 text-base-content transition-colors duration-500">
      <h2 className="text-2xl font-bold mb-6">Resume</h2>

      {/* Buttons */}
      <div className="flex justify-center gap-4 flex-wrap mb-6">
        <button
          onClick={() => setShowResume(!showResume)}
          className="btn btn-primary btn-sm"
        >
          {showResume ? "Hide Resume" : "View Resume"}
        </button>

        <a
          href={`https://drive.google.com/uc?export=download&id=${resumeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-neutral btn-sm"
        >
          Download PDF
        </a>
      </div>

      {/* Resume Viewer */}
      {showResume && (
        <div className="w-full max-w-4xl mx-auto h-[600px] border rounded-lg shadow-lg overflow-hidden bg-base-200 transition-colors duration-500">
          <iframe
            src={`https://drive.google.com/file/d/${resumeId}/preview`}
            className="w-full h-full"
            allow="autoplay"
            title="Resume Preview"
          ></iframe>
        </div>
      )}
    </section>
  );
}