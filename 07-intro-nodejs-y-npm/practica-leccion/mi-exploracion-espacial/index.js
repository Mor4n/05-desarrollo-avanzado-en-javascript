const planetas = require('./planetas');

planetas.forEach(planeta => {
  console.log(`El planeta: ${planeta.nombre} ha sido descubierto!`);
  console.log(`Un reporte nos dice que...: ${planeta.descripcion}`);
  console.log(`Al parecer, fue descubierto en: ${planeta.descubiertoEn}`);
  console.log('---');
});