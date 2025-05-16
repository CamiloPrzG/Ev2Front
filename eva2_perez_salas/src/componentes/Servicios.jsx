import "./Servicios.css";

const servicios = [
  { titulo: "Agendamiento horas Vacunatorio Municipal", icono: "🩺" },
  { titulo: "Convenio Lipigas", icono: "🤝" },
  { titulo: "Pago de multas varias", icono: "🚴" },
  { titulo: "Patentes comerciales", icono: "🛍️" },
  { titulo: "Renovación y trámites de licencia de conducir", icono: "🪪" },
  { titulo: "Derechos de aseo", icono: "🌿" },
  { titulo: "Permiso de circulación", icono: "🚗" },
  { titulo: "Tarjeta Vecino", icono: "👥" },
];

const Servicios = () => (
  <div className="servicios-container">
    {servicios.map((servicio, idx) => (
      <div className="servicio-card" key={idx}>
        <div className="icon">{servicio.icono}</div>
        <p>{servicio.titulo}</p>
      </div>
    ))}
  </div>
);

export default Servicios;
