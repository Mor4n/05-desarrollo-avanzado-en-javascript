const planetas = [
  {
    nombre: "Titán",
    descripcion: "La luna más grande de Saturno, con lagos de metano.",
    descubiertoEn: "1655"
  },
  {
    nombre: "Próxima Centauri b",
    descripcion: "Un exoplaneta rocoso en la zona habitable de su estrella.",
    descubiertoEn: "2016"
  },
  {
    nombre: "Viltrum",
    descripcion: "Un planeta de guerreros superpoderosos.",
    descubiertoEn: "Desconocido"
  },
  {
    nombre: "Namek",
    descripcion: "Un planeta verde habitado por los Namekianos.",
    descubiertoEn: "Desconocido"
  },
  {
    nombre: "Johto",
    descripcion: "Una de las mejores regiones del mundo Pokémon porque existe Chikorita y Cyndaquil.",
    descubiertoEn: "1996"
  },
  {
    nombre: "Greed Island",
    descripcion: "Un juego de realidad virtual que se convierte en un planeta, ocupas una tarjeta para ingresar al juego (hunter x hunter)",
    descubiertoEn: "2000"
  }
];

module.exports = planetas; // exporto los planetas con "exports"
// exports porque estamos usando type=module o "CommonJS" en el package.json, si no, usaríamos "export default planetas"