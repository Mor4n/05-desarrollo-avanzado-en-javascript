const planetas = require('./planetas');

planetas.forEach(planeta => {
  console.log(`El planeta: ${planeta.nombre} ha sido descubierto!`);
  console.log(`Un reporte nos dice que...: ${planeta.descripcion}`);
  console.log(`Al parecer, fue descubierto en: ${planeta.descubiertoEn}`);
  console.log(`He obtenido una imagen de como se ve!!: ${planeta.img}`);
  console.log(`A lo que puedo localizar, sus coordenadas más o menos son: ${ planeta.coordenadas.length === 0 ? "desconocidas... sus ondas magnéticas me impiden obtener correctamente sus coordenadas :( " : planeta.coordenadas.join(', ') }`);
  console.log('---');
});