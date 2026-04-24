import { useState } from "react";
import "../Css/Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Rasadnik Ivanović</div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <div className={`links ${open ? "active" : ""}`}>
        <a href="#home" onClick={() => setOpen(false)}>
          Početna
        </a>

        <a href="#about" onClick={() => setOpen(false)}>
          O nama
        </a>

        <a href="#gallery" onClick={() => setOpen(false)}>
          Galerija
        </a>

        <a href="#contact" onClick={() => setOpen(false)}>
          Kontakt
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
