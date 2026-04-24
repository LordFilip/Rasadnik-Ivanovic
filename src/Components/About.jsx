import { useEffect, useRef, useState } from "react";
import "../Css/About.css";

function About() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const hasAnimated = useRef(false); // 👈 KLJUČ

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setVisible(true);
          hasAnimated.current = true; // 👈 pokreni samo jednom
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className={`about ${visible ? "show" : ""}`}>
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=1200&q=80"
          alt="Rasadnik"
        />
      </div>

      <div className="about-text">
        <h2>O nama</h2>

        <p>
          Mi smo mali porodični rasadnik iz Danilovgrada, smješteni u
          Bjelopavlićima, gdje već više od decenije njegujemo tradiciju uzgoja
          biljaka i ljubav prema prirodi.
        </p>

        <p>
          Naša priča počinje iz jednostavne, ali snažne ljubavi prema zemlji i
          radu sa biljkama. Vremenom smo tu strast pretvorili u posao kojem se u
          potpunosti posvećujemo, vodeći računa o svakom detalju u procesu
          uzgoja.
        </p>

        <p>
          U ponudi imamo širok izbor sezonskog cvijeća, ukrasnog bilja i povrća,
          pažljivo uzgojenog na prirodan način, uz maksimalnu brigu o kvalitetu
          i zdravlju svake biljke.
        </p>

        <p>
          Naš cilj je da svako dvorište, terasa ili bašta postane mala zelena
          oaza, ispunjena bojama, mirisima i životom koji donosi priroda.
        </p>
      </div>
    </section>
  );
}

export default About;
