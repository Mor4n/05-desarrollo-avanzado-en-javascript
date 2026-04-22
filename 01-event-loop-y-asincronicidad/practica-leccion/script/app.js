
const btnAgregarPedido = document.querySelector("#agregar-pedido");

const lista_pedidos = document.querySelector("#lista-pedidos")

btnAgregarPedido.addEventListener("click",()=>{

    // Generar pedido aleatorio
    const pedido = {
        id:generarID(),
        estado: "Creado",
        fecha: Date.now(),
    }
     console.log(pedido);
    
    recepcionPedido(pedido);

});




const recepcionPedido = (pedido) =>{

    const tiempo = tiempoAleatorio(1,3) * 1000;// 1000 para que sea de ms a seg

    setTimeout( () => {
        pedido.estado = "En proceso"
        
        console.log(pedido);
    }, tiempo );
    
}


const mostrarHTML = () =>{

}

const completarPedido = () =>{

}



const tiempoAleatorio = (minimo, maximo) =>{
    
    return Math.floor(Math.random() * (maximo-minimo+1)+minimo);
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