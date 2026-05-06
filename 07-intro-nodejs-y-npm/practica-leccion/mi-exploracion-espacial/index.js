const planetas = require('./planetas');
const cowsay = require("cowsay");

planetas.forEach(planeta => {
   const {nombre, descripcion, descubiertoEn, img, coordenadas} = planeta;
  console.log( cowsay.say({
 
  
  text:`El planeta: ${nombre} ha sido descubierto!
  Un reporte nos dice que...: ${descripcion}
  Al parecer, fue descubierto en: ${descubiertoEn}
  He obtenido una imagen de como se ve!!:
  ${img}
  A lo que puedo localizar, sus coordenadas más o menos son: ${ coordenadas.length === 0 ? "desconocidas... sus ondas magnéticas me impiden obtener correctamente sus coordenadas :( " : coordenadas.join(', ') }`,
  e: "👀",
  T: "👅"
  }));
  

  
});