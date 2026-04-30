
let input_nombre = document.querySelector("#input_nombre")
let btn_fetch = document.querySelector("#fetch-btn")
let btn_axios = document.querySelector("#axios-btn")

let formulario = document.querySelector("#formulario")

let reproductor = document.querySelector("#reproductor");
let imagen_reproductor = document.querySelector("#imagen-reproductor");

let data_container = document.querySelector(".data-container")


 function  axiosObtenerDatos (valor) {
    let api =`https://itunes.apple.com/search?term=${encodeURIComponent(valor)}&media=music&entity=song&limit=3`;
    

     axios.get(api)
    .then( respuesta => recorrerRespuesta(respuesta.data.results))


}


function fetchObtenerDatos(valor) {
    //? Con encodeURIComponent hago que si escribo "Instant crush - Daft punk" se ponga algo como "Instant%20Crush%20 - %20Daft%20Punk"
    
    let api =`https://itunes.apple.com/search?term=${encodeURIComponent(valor)}&media=music&entity=song&limit=3`;
    
    fetch(api)
    .then((respuesta) => respuesta.json())
    .then((datos)=>{

        // console.log(datos.results); arreglo que en el indice 0 va a mandar un objeto
        
        recorrerRespuesta(datos.results);

    }
    )

}



function recorrerRespuesta(respuesta){
    console.log(respuesta);
    
    data_container.innerHTML = ``; // reset de lo que esté dentro del contenedor

    respuesta.forEach(elemento => {
        mostrarHTML(elemento);
    });

}


function mostrarHTML(objeto) {
    console.log(objeto);

    const { artistName, collectionName, trackName, previewUrl, artworkUrl100, releaseDate } = objeto;

    

    const reproductor_HTML = `
        
        <div class="info-obtenida" id="contenedor-reproductor">
            <video-player>
            <video-minimal-skin>

            <media-poster>
                <img src="${artworkUrl100}" id="imagen-reproductor"/>
            </media-poster>

                <video src="${previewUrl}" playsinline id="reproductor"></video>
            </video-minimal-skin>
            </video-player>
        </div>

        <div class="" id="contenedor-info">
            <h2>Canción: <span>${trackName}</span></h2>
            <h2>Artista: <span>${artistName}</span></h2>
            <h2>Álbum: <span>${collectionName}</span></h2>
            <h2>Fecha de lanzamiento: <span>${releaseDate}</span></h2>

        </div>

        
    `;



    data_container.innerHTML +=reproductor_HTML; // añado los datos




}



btn_fetch.addEventListener("click",(e)=>{
    e.preventDefault();
    fetchObtenerDatos(input_nombre.value);
})



btn_axios.addEventListener("click",(e)=>{
    e.preventDefault();
    axiosObtenerDatos(input_nombre.value);
})

