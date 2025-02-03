import { useEffect, useState, useRef } from "react";
import img1 from "./photos/IMG_6751.jpeg";
import img2 from "./photos/IMG_6774.jpeg";
import img3 from "./photos/IMG_6851.jpeg";
import img4 from "./photos/IMG_6894.jpeg";
import gsap from "gsap";

const images = [img1, img2, img3, img4];

export default function ColeInvite() {
  const [currentImage, setCurrentImage] = useState(0);
  const formRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 3, ease: "power2.out" }
    );
  });

//   fix state issue with form 

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white">
      <div className="absolute inset-0 z-0 overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div 
      ref={formRef}
      className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md text-gray-900 mx-auto mt-8">
        <h2 className="text-2xl font-semibold text-center mb-4">
          RSVP to the Party!
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Want to Party with Cole? let us know you're coming!
        </p>
        <form action="#" method="POST">
          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-1/2 pl-2">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex justify-between items-center mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Will you be Attending?
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="attendance"
                  value="yes"
                  className="focus:ring-blue-500"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="attendance"
                  value="no"
                  className="focus:ring-red-500"
                />
                <span>No</span>
              </label>
            </div>
          </div>
          <div className="flex-justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:blue-blue-600 focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
