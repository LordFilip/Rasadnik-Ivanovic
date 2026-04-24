import { useEffect, useRef, useState } from "react";
import "../Css/CarouselVertical.css";

const images = [
  "/images/image 12.jpg",
  "/images/image 13.jpg",
  "/images/image 14.jpg",
  "/images/image 15.jpg",
  "/images/image 16.jpg",
  "/images/image 17.jpg",
  "/images/image 11.jpg",
];

function WhyUs() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`whyus ${visible ? "active" : ""}`}>
      {/* LEFT TEXT */}
      <div className="whyus-text">
        <h2>Zašto mi?</h2>

        <ul>
          <li>🌿 Više od 10 godina iskustva</li>
          <li>🌸 Kvalitetno i zdravo cvijeće</li>
          <li>🥕 Prirodno uzgojeno povrće</li>
          <li>👨‍👩‍👧 Porodična tradicija</li>
          <li>💚 Posvećenost svakom kupcu</li>
        </ul>
      </div>

      {/* RIGHT CAROUSEL */}
      <div className="whyus-carousel">
        <div className="vertical-track">
          {[...images, ...images].map((img, index) => (
            <div className="vertical-item" key={index}>
              <img src={img} alt={`img-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
