// Reloj en tiempo real
function updateClock() {
  const now = new Date();
  const horas = now.getHours().toString().padStart(2, '0');
  const minutos = now.getMinutes().toString().padStart(2, '0');
  const dia = now.toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  document.getElementById("clock").textContent = `${horas}:${minutos}`;
  document.getElementById("date").textContent = dia;
}

setInterval(updateClock, 1000);
updateClock(); // Ejecutar al cargar

// Datos de ejemplo vacíos (para conectar a base de datos luego)
document.getElementById("nombre-producto").textContent = "";
document.getElementById("stock-producto").textContent = "";
document.getElementById("precio-producto").textContent = "";

// Historial y resumen (datos vacíos)
document.getElementById("lista-historial").innerHTML = `
  <li>Filtro 120 cc hh:mm (acción hecha)</li>
  <li>Tank 10 cc hh:mm (acción hecha)</li>
  <li>Timon der hh:mm (acción hecha)</li>
  <li>Llave nuda hh:mm (acción hecha)</li>
`;

document.getElementById("ventas").textContent = "";
document.getElementById("vendidos").textContent = "";
document.getElementById("ultima-venta").textContent = "";
