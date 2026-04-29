
let input_nombre = document.querySelector("#input_nombre")
let btn_fetch = document.querySelector("#fetch-btn")
let btn_axios = document.querySelector("#axios-btn")

let formulario = document.querySelector("#formulario")

function obtenerDatos(valor) {
    let api = "https://itunes.apple.com/search?term="
    console.log(api+`${valor}`);
    
    fetch(api+`${valor}`)
    .then((response) => response.text())
    .then((resultado)=>console.log(resultado))
    


}

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    obtenerDatos(input_nombre.value);

})