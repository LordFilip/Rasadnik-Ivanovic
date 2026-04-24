import { useEffect, useRef, useState } from "react";
import "../Css/LocationMap.css";

function LocationMap() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

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

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={`map-section ${visible ? "active" : ""}`}>
      <div className="map-text">
        <h2>Naša lokacija</h2>
        <p>
          Posjetite nas u Rasadniku Ivanović. Nalazimo se u Podgorici i uvijek
          smo otvoreni za naše kupce.
        </p>

        <div className="info">
          <p>📍 Podgorica, Crna Gora</p>
          <p>🌿 Rasadnik Ivanović</p>
          <p>📞 Dostupni svaki dan</p>
        </div>
      </div>

      <div className="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.6905532261444!2d19.08563907658785!3d42.56663112202515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134dbb0071a5c96f%3A0x17abb5af95fa8a74!2sRasadnik%20ivanovic%20lalevici!5e1!3m2!1sen!2s!4v1777030234487!5m2!1sen!2s"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default LocationMap;
