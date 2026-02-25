import { useState } from "react";

export default function About() {
  const [showImage, setShowImage] = useState(false);

  const profileImg =
    "https://i.ibb.co.com/Xk7KSPCC/COmpressedfav-Prof-Img.jpg";

  const bannerImg =
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085"; // replace with your banner

  return (
    <section className="bg-gray-100 pb-10">
      {/* Banner */}
      <div className="relative">
        <img
          src={bannerImg}
          alt="Banner"
          className="w-full h-48 md:h-64 object-cover"
        />

        {/* Profile Image (Overlapping Banner) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16">
          <img
            src={profileImg}
            alt="Md. Samiulla Hossen"
            onClick={() => setShowImage(true)}
            className="w-40 h-40 rounded-full border-4 border-white shadow-xl cursor-pointer hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>

      {/* Content */}
      <div className="text-center mt-20 px-6">
        <h2 className="text-3xl font-bold">Hi,</h2>
        <h3 className="text-2xl font-semibold mt-2">
          MD. Samiulla Hossen
        </h3>
        <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
          MERN Stack Front-End Developer passionate about building fast,
          accessible, and beautiful web applications.
        </p>
      </div>

      {/* Fullscreen Modal */}
      {showImage && (
        <div
          onClick={() => setShowImage(false)}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        >
          <img
            src={profileImg}
            alt="Full View"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}