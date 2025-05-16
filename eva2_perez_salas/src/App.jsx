import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Carousel from './componentes/Carrusel';
import ServiciosContent from './componentes/Servicios';
import './App.css';

// Componentes para cada subpágina
const Municipalidad = () => (
  <div className="municipalidad">
    <div className="contenedor-transparente">
      <h2>La Municipalidad</h2>
      <p>
        La Municipalidad de Cholchol, en la Región de la Araucanía, tiene una historia que se remonta a la época de la Ocupación Chilena de la Araucanía. 
        Fue fundada el 22 de noviembre de 1881 por el Coronel Gregorio Urrutia Venegas, como un fuerte español, en el contexto de la represión a la sublevación mapuche de 1881. 
        La comuna actual de Cholchol fue creada el 22 de abril de 2004, segregándose de la comuna de Nueva Imperial.
      </p>
    </div>
  </div>
);

const Alcalde = () => (
  <div className="alcalde">
    <div className="alcalde-contenido">
      <img src="/images/alcalde.jpg" alt="Alcalde" className="alcalde-foto" />
      <div className="alcalde-texto">
        <h2 className="alcalde-titulo">Álvaro Labraña Opazo</h2>
        <h4 className="alcalde-subtitulo">Alcalde período 2024-2028</h4>
        <p>
          Álvaro Labraña Opazo es el actual alcalde de la comuna de Cholchol, ubicada en la Región de la Araucanía, Chile. Su llegada a la alcaldía a fines del año 2024 marcó un nuevo capítulo para la comuna. En la ceremonia de su asunción, que contó con una amplia participación ciudadana, Álvaro Labraña Opazo expresó su profundo compromiso con la comunidad de Cholchol, extendiendo su voluntad de trabajar a todos los vecinos, independientemente de sus preferencias políticas.
        </p>
        <p>
          En sus primeras declaraciones como líder de la comuna, enfatizó la importancia de la transparencia en su gestión y el desarrollo de las capacidades locales para impulsar el progreso de Cholchol. La administración de Álvaro Labraña Opazo se inicia en un contexto de esperanza y la necesidad de abordar los desafíos y las expectativas de la ciudadanía de Cholchol. Su liderazgo buscará, según sus primeras declaraciones, construir una gestión basada en la confianza y el trabajo conjunto con la comunidad.
        </p>
      </div>
    </div>
  </div>
);

const Concejo = () => (
  <div className="concejo">
    <h2 className="concejo-titulo">Concejo Municipal</h2>
    <img src="/images/Concejales.jpg" alt="Concejo Municipal" className="concejo-foto" />

    <div className="concejo-lista-simple">
      <h4>Bernardita Viscarra Astudillo</h4>
      <button onClick={() => window.location.href = "mailto:bviscarra@correo.cl"}>bviscarra@correo.cl</button>

      <h4>Diego Millao Collio</h4>
      <button onClick={() => window.location.href = "mailto:dmillao@correo.cl"}>dmillao@correo.cl</button>

      <h4>Ismael Cayul Coñuenao</h4>
      <button onClick={() => window.location.href = "mailto:icayul@correo.cl"}>icayul@correo.cl</button>

      <h4>Alejandra Nataly Mellico Contreras</h4>
      <button onClick={() => window.location.href = "mailto:amellico@correo.cl"}>amellico@correo.cl</button>

      <h4>Andrés Navarrete Painemal</h4>
      <button onClick={() => window.location.href = "mailto:anavarrete@correo.cl"}>anavarrete@correo.cl</button>

      <h4>Gonzalo Tropa Huircalaf</h4>
      <button onClick={() => window.location.href = "mailto:gtropa@correo.cl"}>gtropa@correo.cl</button>
    </div>
  </div>
);

const pdfIcon = "https://cdn-icons-png.flaticon.com/512/337/337946.png";

const Card = ({ title }) => (
  <div className="card">
    <h2>{title}</h2>
    <p>Descargar</p>
    <div onClick={() => {}} style={{ cursor: 'pointer' }}>
      <img src={pdfIcon} alt="PDF icono" className="pdf-icon" />
    </div>
  </div>
);

const PlanRegulador = () => (
  <div className="plan-regulador">
    <h2>Plan Regulador Comunal</h2>
    <p>Documentos disponibles:</p>

    <div className="card-container">
      <Card title="Memoria Explicativa" />
      <Card title="Normas Urbanísticas" />
      <Card title="Planos Reguladores" />
    </div>
  </div>
);

const Servicios = () => (
  <div>
    <Carousel />
    <ServiciosContent />
  </div>
);

const Contacto = () => (
  <div className="contact-form">
    <h2>Formulario de Contacto</h2>
    <form className="form-grid">
      <div className="form-group">
        <label htmlFor="rut">Rut <span className="required">*</span></label>
        <input type="text" id="rut" name="rut" placeholder="Ingrese su Rut completo sin puntos ni guion" required />
      </div>

      <div className="form-group">
        <label htmlFor="nombre">Nombres y Apellidos <span className="required">*</span></label>
        <input type="text" id="nombre" name="nombre" required />
      </div>

      <div className="form-group">
        <label htmlFor="telefono">Teléfono <span className="required">*</span></label>
        <input type="tel" id="telefono" name="telefono" placeholder="Ingrese su teléfono ejemplo: 9-99999999" required />
      </div>

      <div className="form-group">
        <label htmlFor="correo">Correo <span className="required">*</span></label>
        <input type="email" id="correo" name="correo" required />
      </div>

      <div className="form-group">
        <label htmlFor="direccion">Dirección <span className="required">*</span></label>
        <input type="text" id="direccion" name="direccion" required />
      </div>

      <div className="form-group">
        <label htmlFor="comuna">Comuna</label>
        <select id="comuna" name="comuna" required>
          <option value="" disabled selected>Seleccionar comuna</option>
          <option value="Carahue">Carahue</option>
          <option value="Cholchol">Cholchol</option>
          <option value="Cunco">Cunco</option>
          <option value="Curarrehue">Curarrehue</option>
          <option value="Freire">Freire</option>
          <option value="Galvarino">Galvarino</option>
          <option value="Gorbea">Gorbea</option>
          <option value="Lautaro">Lautaro</option>
          <option value="Loncoche">Loncoche</option>
          <option value="Melipeuco">Melipeuco</option>
          <option value="Nueva Imperial">Nueva Imperial</option>
          <option value="Padre Las Casas">Padre Las Casas</option>
          <option value="Perquenco">Perquenco</option>
          <option value="Pucón">Pucón</option>
          <option value="Temuco">Temuco</option>
          <option value="Vilcún">Vilcún</option>
          <option value="Villarrica">Villarrica</option>
        </select>
      </div>

      <div className="form-group full-width">
        <label htmlFor="asunto">Asunto <span className="required">*</span></label>
        <input type="text" id="asunto" name="asunto" required />
      </div>

      <div className="form-group full-width">
        <label htmlFor="mensaje">Mensaje <span className="required">*</span></label>
        <textarea id="mensaje" name="mensaje" rows="8" required />
      </div>

      <div className="form-group full-width">
        <button type="submit" className="submit-btn">ENVIAR</button>
      </div>
    </form>
  </div>
);


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Municipalidad />} />
            <Route path="/municipalidad" element={<Municipalidad />} />
            <Route path="/alcalde" element={<Alcalde />} />
            <Route path="/concejo" element={<Concejo />} />
            <Route path="/plan-regulador" element={<PlanRegulador />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
