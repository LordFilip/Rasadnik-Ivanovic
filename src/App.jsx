import Navbar from "./Components/Navbar";
import "./App.css";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";
import CarouselVertical from "./Components/CarouselVertical";
import LocationMap from "./Components/LocationMap";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Carousel />
      <CarouselVertical />
      <LocationMap />
      <Footer />
    </>
  );
}

export default App;
