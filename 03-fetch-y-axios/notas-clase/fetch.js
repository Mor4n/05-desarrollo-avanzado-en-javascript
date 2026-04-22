
// GET usando fetch

const url_api = "https://pokeapi.co/api/v2/pokemon/633"

// Parte 1: request options, siendo un objeto
const requestOptions = {
    method: "GET",
    // redirect:"follow"
}
// Parte 2: fetch, como resultado da una promesa
// una promesa va a la parte de pending de resolver
// despues de unos segundos se habrá completado o resuelto la promesa
// una vez resuelta, para hacer algo con una respuesta se coloca then


// mas simple fetch(url_api , {method: "GET"})
// mas simple (hará get) -> fetch(url_api)
fetch(url_api, requestOptions) // promesa (promesa 1)
.then( respuesta => respuesta.text()) // esto nos da OTRA promesa (promesa 2), por eso
.then(  resultado =>  console.log(resultado))// necesitamos este otro .then para resolver la anterior promesa
// este de arriba es el resultado de la segunda promesa
// para atrapar los errores ponemos esto
.catch( error => console.log(`Ocurrió un error: ${error}`)
)