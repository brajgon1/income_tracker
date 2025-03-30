import { useEffect, useState, useRef } from "react";
import img1 from "./photos/IMG_6751.jpeg";
import img2 from "./photos/IMG_6774.jpeg";
import img3 from "./photos/IMG_6851.jpeg";
import img4 from "./photos/IMG_6894.jpeg";
import img5 from "./photos/IMG_5928.jpeg";
import img6 from "./photos/IMG_7819.jpeg";
import img7 from "./photos/IMG_7919.jpeg";
import gsap from "gsap";

const images = [img1, img2, img3, img4, img5, img6, img7];

export default function ColeInvite() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [rsvped, setRsvped] = useState(false);
  const messageRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 4000);
    return () => clearTimeout(timer);
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

  const handleRSVP = () => {
    window.location.href =
      "mailto:brajgon@gmail.com?subject=RSVP for the Party&body=Hi, I would like to RSVP for the party.";
    setRsvped(true);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-dark text-white">
      <div className="absolute inset-0 overflow-hidden">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Slide ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {showMessage && (
        <div
          ref={messageRef}
          className="relative bg-white bg-opacity-90 p-6 rounded-lg shadow-lg text-gray-900 text-center w-full max-w-2xl mx-4 border border-blue-500 md:w-3/4 lg:w-1/2"
        >
          {rsvped ? (
            <h2 className="text-2xl font-bold text-blue-600">
              Thank you for RSVPing! 🎉
            </h2>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-blue-600">
                You're Invited! 🎉
              </h2>
              <p className="text-lg text-gray-700 mt-2">
                Join us for an unforgettable day of fun and celebration!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    📍 Location:
                  </p>
                  <p className="text-sm text-gray-600">
                    150 S 2000 W, N County Blvd
                  </p>
                  <p className="text-sm text-gray-600">
                    Pleasant Grove, UT 84062
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    🕒 Time:
                  </p>
                  <p className="text-sm text-gray-600">1:00 PM - 3:30 PM</p>
                  <p className="text-sm font-semibold text-gray-900">
                    📅 Date:
                  </p>
                  <p className="text-sm text-gray-600">
                    Saturday, April 12, 2025
                  </p>
                </div>
              </div>
              <hr className="my-4" />
              <p className="text-sm font-semibold text-gray-900">📩 RSVP:</p>
              <p className="text-sm text-gray-600">
                Text: 385-309-7172 | Email: brajgon@gmail.com
              </p>
              <button
                onClick={handleRSVP}
                className="mt-3 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
              >
                RSVP Now
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
