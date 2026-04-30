
let input_nombre = document.querySelector("#input_nombre")
let btn_fetch = document.querySelector("#fetch-btn")
let btn_axios = document.querySelector("#axios-btn")

let formulario = document.querySelector("#formulario")



function obtenerDatos(valor) {
    //? Con encodeURIComponent hago que si escribo "Instant crush - Daft punk" se ponga algo como "Instant%20Crush%20-%20Daft%20Punk"
    
    let api =`https://itunes.apple.com/search?term=${encodeURIComponent(valor)}&media=music&entity=song&limit=1`;
    
    fetch(api)
    .then((respuesta) => respuesta.json())
    .then((datos)=>{

        console.log(datos.results);
        

    }
    )
    


}


formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    obtenerDatos(input_nombre.value);

})