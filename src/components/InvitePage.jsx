import { useEffect, useState, useRef } from "react";
import img1 from "./photos/IMG_6751.jpeg";
import img2 from "./photos/IMG_6774.jpeg";
import img3 from "./photos/IMG_6851.jpeg";
import img4 from "./photos/IMG_6894.jpeg";
import gsap from "gsap";

const images = [img1, img2, img3, img4];

export default function ColeInvite() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showMessage, setShowMessage] = useState(true);
  const messageRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (showMessage) {
      gsap.fromTo(
        messageRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, [showMessage]);

  return (
    <div className="relative min-h-screen d-flex align-items-center justify-content-center bg-dark text-white">
      <div className="position-absolute w-100 h-100 overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`position-absolute w-100 h-100 object-fit-contain transition-opacity ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {showMessage && (
        <div
          ref={messageRef}
          className="position-relative bg-light bg-opacity-90 p-4 rounded shadow-lg text-dark text-center w-50 mx-auto border border-primary"
        >
          <button
            onClick={() => setShowMessage(false)}
            className="btn-close position-absolute top-0 end-0 m-3"
            aria-label="Close"
          ></button>
          <h2 className="fw-bold text-primary">You're Invited! 🎉</h2>
          <p className="fs-5 text-secondary">
            Join us for an unforgettable day of fun and celebration!
          </p>
          <p className="fs-6">
            RSVP to 385-309-7172 or brajgon@gmail.com
          </p>
          <a href="mailto:contact@example.com" className="btn btn-primary mt-3">
            Contact Us
          </a>
        </div>
      )}
    </div>
  );
}
