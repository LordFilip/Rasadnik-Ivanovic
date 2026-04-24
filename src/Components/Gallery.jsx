import { useState, useEffect, useRef } from "react";
import "../Css/Gallery.css";

const images = [
  {
    img: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80",
    title: "Prirodna ljepota",
    text: "Svaka biljka raste s ljubavlju i pažnjom",
  },
  {
    img: "../../public/images/image 2.jpg",
    title: "Svježe cvijeće",
    text: "Boje koje oživljavaju svaki prostor",
  },
  {
    img: "../../public/images/image 3.jpg",
    title: "Zdravo povrće",
    text: "Prirodno uzgojeno bez hemije",
  },
  {
    img: "../../public/images/image 4.jpg",
    title: "Porodična tradicija",
    text: "Više od decenije posvećenog rada",
  },
];

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [visible, setVisible] = useState(false);
  const gridRef = useRef(null);

  const currentImage = currentIndex !== null ? images[currentIndex] : null;

  // SCROLL REVEAL
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (gridRef.current) observer.observe(gridRef.current);

    return () => observer.disconnect();
  }, []);

  // ESC + ARROWS
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentIndex === null) return;

      if (e.key === "Escape") setCurrentIndex(null);

      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }

      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <section id="gallery" className="gallery">
      <h2>Galerija</h2>

      <div ref={gridRef} className={`grid ${visible ? "show" : ""}`}>
        {images.map((item, index) => (
          <div
            key={index}
            className="card"
            onClick={() => setCurrentIndex(index)} // ✅ KLJUČNO
          >
            <img src={item.img} alt={item.title} />

            <div className="card-overlay">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {currentImage && (
        <div className="lightbox" onClick={() => setCurrentIndex(null)}>
          <button
            className="nav left"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex((prev) =>
                prev === 0 ? images.length - 1 : prev - 1,
              );
            }}
          >
            ❮
          </button>

          <img src={currentImage.img} alt={currentImage.title} />

          <button
            className="nav right"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex((prev) =>
                prev === images.length - 1 ? 0 : prev + 1,
              );
            }}
          >
            ❯
          </button>

          <div className="lightbox-text">
            <h3>{currentImage.title}</h3>
            <p>{currentImage.text}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
