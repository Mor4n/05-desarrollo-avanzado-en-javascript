// const axios = require('axios') // require es especifico de node, no me agarrará


const formulario_producto = document.querySelector("#formulario_producto");

const validacion_formulario = document.querySelector("#validacion_formulario")
let variable = "";
// el async se pone antes de (event)=>{},
/*
! la parte de un callback de un add event listener es como si hiceramos

const funcion = () =>{

    }
(La parte de () =>{} viene siendo la parte de nuestro callback)
Por ello, si queremos usar async await, vamos a ponerlo detrás del () el async


  */
formulario_producto.addEventListener("submit", async (event)=>{
    event.preventDefault();

    console.log("Se presionó submit");
    console.log(event);
    
    console.log(event.target["Id"]);
    console.log(event.target["Id"].value);

    // Puedo sacar todos los valores de un jalon
    let {Id,Producto,Precio, Cantidad} = event.target; // De e.target, extramemos product
    // Por ejemplo: Producto = <input type="text" name="Producto">

    console.log(Producto.value);

    // ahora si quiero hacerlo un objeto

    const valores_formulario = {
        Id: Id.value,
        Producto: Producto.value,
        Precio: Precio.value,
        Cantidad: Cantidad.value,
    }

    await axios.post("https://", valores_formulario)

})


validacion_formulario.addEventListener("submit",(e)=>{

    e.preventDefault();

    let {nombre,telefono,correo} = e.target; // extraigo los inputs de lo enivado

    // Regla para nombres: unicamente palabras, sin numeros ni simbolos

    if(!nombre.value.match(/^[a-zA-Z\s]+$/)){
        alert("El nombre no es valido")
    }  
    // Regla para telefono: Tiene que estar en formato +52 (624) 200 2000
    if(!telefono.value.match( /^\+52 \(\d{3}\) \d{3} \d{4}$/ )){
        alert("El telefono no es valido")
    }
    // Regla para los email
    if (!correo.value.match(/^\S+@\S+\.\S+$/)){
        alert("El email no es valido")
    }


})