import "../Css/Footer.css";

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        {/* LEFT */}
        <div className="footer-left">
          <h2>Rasadnik Ivanović</h2>
          <p>
            Mali porodični rasadnik iz Danilovgrada, Bjelopavlići. Više od
            decenije uzgajamo cvijeće i povrće sa ljubavlju.
          </p>
        </div>

        {/* CENTER */}
        <div className="footer-center">
          <h3>Brzi linkovi</h3>
          <ul>
            <li>
              <a href="#home">Početna</a>
            </li>
            <li>
              <a href="#about">O nama</a>
            </li>
            <li>
              <a href="#gallery">Galerija</a>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <h3>Kontakt</h3>
          <p>📍 Lalevići, Danilovgrad</p>
          <p>📞 +382 67 351 707</p>
          <p>Instagram: @rasadnik_ivanovic__</p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Lord Studio</p>
      </div>
    </footer>
  );
}

export default Footer;
