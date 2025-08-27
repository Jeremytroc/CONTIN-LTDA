const contenedor = document.querySelector('.presentacion_contenido');

contenedor.addEventListener('mousemove', e => {
  const rect = contenedor.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  contenedor.style.setProperty('--x', `${x}px`);
  contenedor.style.setProperty('--y', `${y}px`);
  contenedor.style.setProperty('--glow-opacity', 1); // visible mientras el mouse está dentro
});

contenedor.addEventListener('mouseleave', () => {
  contenedor.style.setProperty('--glow-opacity', 0); // desaparece al salir
});
