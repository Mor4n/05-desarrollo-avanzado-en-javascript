
// Async y await
const url = "https://pokeapi.co/api/v2/pokemon?limit=1";


// Al hacer algo con await para guardar una promesa en una variable, TENEMOS
// que tener todo guardado en una funcion async

const main = async () =>{
    const respuesta = await fetch(url) // GET (no ponemos nada más) - 
    // await: Yo sé que esto es una promesa, esto djeamelo poner en una variable

    // console.log(respuesta);

    const pokemon_json = await respuesta.text()

    const pokemon = JSON.parse(pokemon_json)

    console.log(pokemon.results[0].name);
    

    // console.log(pokemon);
}

main()