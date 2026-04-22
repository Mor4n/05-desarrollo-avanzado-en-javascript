const url_api = "https://pokeapi.co/api/v2/pokemon/6h33"

const requestOptions = {
    method: "GET",
}

fetch(url_api, requestOptions) 
.then( respuesta => respuesta.text())
.then(  resultado =>
{
    pokemon = JSON.parse(resultado)
    console.log(pokemon.name);
    
}

)
// este de arriba es el resultado de la segunda promesa
// para atrapar los errores ponemos esto
.catch( error => console.log(`Ocurrió un error: ${error}`)
)