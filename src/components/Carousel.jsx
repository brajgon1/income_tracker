import { useState } from "react";

export default function PhotoCarousel({ images }) {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrent((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* {images} */}
      <div className="overflow=hidden rounded-lg">
        <img
          src={images[current]}
          alt={`Slide ${current}`}
          className="w-full object-cover"
        />
      </div>
      <button
        onClick={prev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
      >
        $#8592
      </button>
      <button
        onClick={next}
        className="absolut top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
      >
        $#8594
      </button>
    </div>
  );
}
