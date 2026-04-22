
const btnAgregarPedido = document.querySelector("#agregar-pedido");

const lista_pedidos = document.querySelector("#lista-pedidos")

btnAgregarPedido.addEventListener("click",()=>{

    // Generar pedido aleatorio
    const pedido = {
        id:generarID(),
        estado: "espera",
        fecha: Date.now(),
    }
    console.log(pedido);
    

});




const recepcionPedido = () =>{

}

const mostrarHTML = () =>{

}

const prepararPedido = () =>{

}

const generarID = () =>{
    const generarRandom = () =>{
        const numeroRandom = Math.ceil(
            new Date().valueOf() * 
            (Math.random() +0.01) *
            (Math.random() +0.01) * 1234
        );
        return numeroRandom.toString(16)
    }
    let id = 
        generarRandom().slice(-8)+
        "-" +
        generarRandom().slice(-4)+
        "-" +
        generarRandom().slice(-12);
    return id;
}