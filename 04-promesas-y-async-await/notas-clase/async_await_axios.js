
const axios = require("axios")


const url = "https://pokeapi.co/api/v2/pokemon?limit=1";

const main = async () =>{
    
    const pokemon = await axios.get(url) // ESTO YA ES EL POKEMON, 

    console.log(pokemon.data.results[0].name);
    
}

main()