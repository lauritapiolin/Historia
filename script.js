// Cambia esto por la fecha real de inicio de su relación: AÑO, MES (0-indexado: 0 = enero, 1 = feb), DÍA
// Ejemplo: 14 de Febrero de 2024 -> new Date(2024, 1, 14, 0, 0, 0)
const fechaInicio = new Date(2024, 1, 14, 0, 0, 0);

function actualizarContador() {
  const ahora = new Date();
  const diferenciaMs = ahora - fechaInicio;

  if (diferenciaMs < 0) {
    document.getElementById("contador").innerText = "¡Pronto comenzará!";
    return;
  }

  const totalSegundos = Math.floor(diferenciaMs / 1000);
  const dias = Math.floor(totalSegundos / (3600 * 24));
  const horas = Math.floor((totalSegundos % (3600 * 24)) / 3600);
  const minutos = Math.floor((totalSegundos % 3600) / 60);
  const segundos = totalSegundos % 60;

  document.getElementById("contador").innerText = 
    `${dias} días, ${horas}h ${minutos}m ${segundos}s`;
}

// Ejecutar cada segundo
setInterval(actualizarContador, 1000);
actualizarContador();