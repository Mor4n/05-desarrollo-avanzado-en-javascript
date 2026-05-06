const planetas = [
  {
    nombre: "Titán",
    descripcion: "La luna más grande de Saturno, con lagos de metano.",
    descubiertoEn: "1655",
    img:"https://upload.wikimedia.org/wikipedia/commons/4/45/Titan_in_true_color.jpg",
    coordenadas:["45707.3:226384.5:5796384.5","36384.5:216950.5:5796384.5","36384.5:235677.6:5796384.5"]
  },
  {
    nombre: "Próxima Centauri b",
    descripcion: "Un exoplaneta rocoso en la zona habitable de su estrella.",
    descubiertoEn: "2016",
    img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Artist%27s_impression_of_the_planet_orbiting_Proxima_Centauri.jpg/1920px-Artist%27s_impression_of_the_planet_orbiting_Proxima_Centauri.jpg",
    coordenadas:["45707.3:226384.5:5796384.5","36384.5:216950.5:5796384.5","36384.5:235677.6:5796384.5"]
  },
  {
    nombre: "Viltrum",
    descripcion: "Un planeta de guerreros superpoderosos.",
    descubiertoEn: "Desconocido",
    img:"https://static.wikia.nocookie.net/amazon-invincible/images/3/34/Viltrum_Ring_Planet.png/revision/latest/scale-to-width-down/1000?cb=20260423113252",
    coordenadas:["15234.1:83452.9:472819.3", "16234.1:84452.9:482819.3"]
  },
  {
    nombre: "Namekusei",
    descripcion: "Un planeta verde habitado por los Namekianos.",
    descubiertoEn: "Desconocido",
    img:"https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/02/namek-dragon-ball.jpg?resize=1280%2C630&ssl=1",
    coordenadas:["45321.8:77432.1:223849.5", "46321.8:78432.1:233849.5"]
  },
  {
    nombre: "Johto",
    descripcion: "Una de las mejores regiones del mundo Pokémon porque existe Chikorita y Cyndaquil.",
    descubiertoEn: "1996",
    img:"https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/fe/latest/20180203062443/Johto_HGSS.png/800px-Johto_HGSS.png?20180203062443",
    coordenadas:[]
  },
  {
    nombre: "Greed Island",
    descripcion: "Un juego de realidad virtual que se convierte en un planeta, ocupas una tarjeta para ingresar al juego (hunter x hunter)",
    descubiertoEn: "2000",
    img:"https://cdn.shopify.com/s/files/1/0252/1736/8154/files/EHgDjblXkAItqnY_480x480.jpg?v=1630404597",
    coordenadas:[]
  }
];

module.exports = planetas; // exporto los planetas con "exports"
// exports porque estamos usando type=module o "CommonJS" en el package.json, si no, usaríamos "export default planetas"