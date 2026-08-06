
import { useRef } from "react";

const NotFound = () => {
  const overlayRef = useRef(null);

  const handleMouseMove = (e) => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const x = e.clientX;
    const y = e.clientY;
    const pos = `${x}px ${y}px`;

    const mask = `radial-gradient(circle 4000px at ${pos}, transparent 1%, black 300px)`;
    overlay.style.maskImage = mask;
    overlay.style.webkitMaskImage = mask;
  };

  return (
    <div
      className="relative w-screen h-screen bg-gray-900 text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
        <h1 className="text-6xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl max-w-xl">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded"
        >
          Go Home
        </a>
      </div>

      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black z-20 pointer-events-none"
      />
    </div>
  );
};

export default NotFound;
