import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importar iconos
import "./Carrusel.css"; // Asegúrate de tener este archivo para la personalización
import { useRef } from "react";

const Carrusel = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false, // Desactivar los controles por defecto de Slick
  };

  return (
    <div className="carrusel-container">
      {/* Botón izquierdo personalizado */}
      <button
        className="nav-btn prev-btn"
        onClick={() => sliderRef.current.slickPrev()} // ← Retrocede
      >
        <FaChevronLeft />
      </button>

      {/* Botón derecho personalizado */}
      <button
        className="nav-btn next-btn"
        onClick={() => sliderRef.current.slickNext()} // ← Avanza
      >
        <FaChevronRight />
      </button>

      {/* Carrusel */}
      <Slider ref={sliderRef} {...settings}>
        <div>
          <h3>¿Qué estás buscando?</h3>
        </div>
        <div>
          <h3>Trámites municipales más buscados</h3>
        </div>
        <div>
          <h3>Encuentra lo que necesitas fácilmente</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Carrusel;
