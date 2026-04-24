import "../Css/Carousel.css";

const images = [
  "/images/image 5.jpg",
  "/images/image 6.jpg",
  "/images/image 7.jpg",
  "/images/image 8.jpg",
  "/images/image 9.jpg",
  "/images/image 10.jpg",
  "/images/image 11.jpg",
];

function Carousel() {
  return (
    <div className="carousel">
      <div className="carousel-track">
        {/* duplirano radi smooth infinite scroll-a */}
        {images.concat(images).map((img, index) => (
          <div className="carousel-item" key={index}>
            <img src={img} alt={`carousel-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
