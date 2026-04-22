
/**
 * Para poderla utilizar pimero necesito haecr
 * npm init -y
 * npm install axios
 */

//import axios
const axios = require("axios");

// GET: solo pongo el URL
axios.get("https://pokeapi.co/api/v2/pokemon/633")
// devuelve una promesa, esta la obtenemos con then
.then( respuesta => console.log(respuesta.data)) 




const api_url = "https://sheetdb.io/api/v1/r44jujrkku6o2"

const producto = {
    "ID":"3",
    "Producto":"Laptop",
    "Precio":"15000",
    "Cantidad":"5"
}

//POST: url, dato a mandar
axios.post(api_url, producto)
// devuelve una respuesta como promesa
.then(respuesta => console.log(respuesta.data));