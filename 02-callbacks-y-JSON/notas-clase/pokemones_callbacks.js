

const requestOptions = {
  method: "GET",
  redirect: "follow"
};

// Todos los pokemones
const obtenerTodosPokemones = () =>{
fetch("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0", requestOptions)
  .then((response) => response.text())
  .then((result) => {
    // Lo que obtenemos es un JSON, tenemos que convertirlo con parse
    const pokemones = JSON.parse(result);
    // console.log(pokemones.count);

    pokemones.result.foreach( elemento =>
        obtenerInfoPokemon( elemento["url"], (result)=>{
            const pokemonDato = JSON.parse(result);
            console.log(pokemonDato.name);
            console.log(pokemonDato.weight);
            console.log("-----------");
            
        })

    )
  })
  .catch((error) => console.error(error));
}

const obtenerInfoPokemon = (link, callback) =>{

// Toda la info de uno solo
    fetch(link, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

}

obtenerTodosPokemones();