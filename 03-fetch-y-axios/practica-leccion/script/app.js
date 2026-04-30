
let input_nombre = document.querySelector("#input_nombre")
let btn_fetch = document.querySelector("#fetch-btn")
let btn_axios = document.querySelector("#axios-btn")

let formulario = document.querySelector("#formulario")

let reproductor = document.querySelector("#reproductor");


function obtenerDatos(valor) {
    //? Con encodeURIComponent hago que si escribo "Instant crush - Daft punk" se ponga algo como "Instant%20Crush%20 - %20Daft%20Punk"
    
    let api =`https://itunes.apple.com/search?term=${encodeURIComponent(valor)}&media=music&entity=song&limit=1`;
    
    fetch(api)
    .then((respuesta) => respuesta.json())
    .then((datos)=>{

        // console.log(datos.results); arreglo que en el indice 0 va a mandar un objeto
        
        mostrarHTML(datos.results);

    }
    )
    


}



function mostrarHTML(objeto) {
    console.log(objeto);
    
    const { artistName, collectionName, trackName, previewUrl, artworkUrl100, releaseDate } = objeto[0];
    console.log(`${artistName},${ collectionName}, trackName, ${previewUrl}, artworkUrl100, releaseDate`);
    
    reproductor.src = previewUrl;


}



formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    obtenerDatos(input_nombre.value);

})