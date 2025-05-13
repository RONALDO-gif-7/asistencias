const botonAsistencia = document.querySelector('.boton-asistencia');
const tablaAsistencia = document.querySelector('.tabla-asistencia');
const botonConfirmar = document.querySelector('.boton-confirmar');

// Alternar visibilidad de la tabla al presionar el botón del menú
botonAsistencia.addEventListener('click', () => {
  tablaAsistencia.classList.toggle('oculto'); // Oculta si está visible y viceversa
});

// Confirmar asistencia
botonConfirmar.addEventListener('click', () => {
  alert('¡Confirmaste tu asistencia!');
  tablaAsistencia.classList.add('oculto'); // Oculta la tabla después de confirmar
});