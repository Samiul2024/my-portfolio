import { useEffect, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

const ScrollButtons = () => {
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;

      setShowTop(scrollY > 300); // show top button after 300px
      setShowBottom(scrollY < height - 300); // show bottom if not at bottom
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="fixed right-6 bottom-6 flex flex-col gap-3 z-50">
      {showTop && (
        <button
          onClick={scrollToTop}
          className="btn btn-primary text-black btn-circle shadow-lg hover:scale-110 transition-transform tooltip tooltip-left" data-tip="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {showBottom && (
        <button
          onClick={scrollToBottom}
          className="btn btn-primary text-black btn-circle shadow-lg hover:scale-110 transition-transform tooltip tooltip-left" data-tip="Scroll to bottom"
        >
          <ArrowDown size={20} />
        </button>
      )}
    </div>
  );
};

export default ScrollButtons;