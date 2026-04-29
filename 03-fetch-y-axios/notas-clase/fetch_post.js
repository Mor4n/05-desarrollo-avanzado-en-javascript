
const api_url = ""

const producto = {
    "ID":"3",
    "Producto":"Laptop",
    "Precio":"15000",
    "Cantidad":"5"
}

const producto_JSON = JSON.stringify(producto)

const header = new Headers();
header.append("Content-Type","application/json");


const options = {
    method: "POST",
    // lo que le quiero enviar:
    body: producto_JSON,
    // headers que requiero para hacer post
    headers: header
}   


fetch(api_url,options)
.then(respuesta => respuesta.text())
.then(resultado => 
{
    //console.log(resultado)
    const r = JSON.parse(resultado);
    console.log(r.created);
    
}

)
.catch(error => console.error(`Ocurrio un error: ${error}`))
