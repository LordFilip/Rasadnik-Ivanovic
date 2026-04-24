import "../Css/Carousel.css";

const images = [
  "../../public/images/image 5.jpg",
  "../../public/images/image 6.jpg",
  "../../public/images/image 7.jpg",
  "../../public/images/image 8.jpg",
  "../../public/images/image 9.jpg",
  "../../public/images/image 10.jpg",
  "../../public/images/image 11.jpg",
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
