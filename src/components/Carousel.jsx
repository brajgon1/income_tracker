import Carousel from "react-bootstrap/Carousel";
import img1 from "./photos/IMG_6751.jpeg";
import img2 from "./photos/IMG_6774.jpeg";
import img3 from "./photos/IMG_6851.jpeg";
import img4 from "./photos/IMG_6894.jpeg";
// import { CarouselCaption } from "react-bootstrap";

export default function PhotoCarousel() {
  const images = [img1, img2, img3, img4];

  return (
    <div className="container mx-auto px-4 sm:px-2">
      <Carousel fade controls={false} indicators={false} interval={900}>
        {images.map((img, i) => (
          <Carousel.Item key={i}>
            <img
              src={img}
              alt={`Slide ${i + 1}`}
              className="d-block w-100"
              style={{ maxHeight: "520px", objectFit: "contain" }}
            />
          </Carousel.Item>
        ))}

      </Carousel>
    </div>
  );
}
