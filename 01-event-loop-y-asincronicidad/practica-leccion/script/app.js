
const btnAgregarPedido = document.querySelector("#agregar-pedido");

const lista_pedidos = document.querySelector("#lista-pedidos")

btnAgregarPedido.addEventListener("click",()=>{

    // Generar pedido aleatorio
    const pedido = {
        id:generarID(),
        estado: "Creado",
        fecha: new Date().toLocaleString("es-MX"),
    }
    //  console.log(pedido);
    
    mostrarHTML(pedido);

    recepcionPedido(pedido);

});




const recepcionPedido = (pedido) =>{

    const tiempoProceso = tiempoAleatorio(1,3) * 1000;// 1000 para que sea de ms a seg, va a durar entre 1 a 3 seg

    const tiempoCompletado = tiempoAleatorio(2,3) * 1000;


    actualizarEstado(pedido, "En proceso", tiempoProceso);
    
    actualizarEstado(pedido, "Completado", tiempoProceso+tiempoCompletado);

}


const actualizarEstado = (pedido, estado, tiempo) =>{
    setTimeout( () => {
        pedido.estado = estado;
        
        actualizarHTML(pedido, estado);
        // console.log(pedido);
    }, tiempo );
}



const mostrarHTML = (pedido) =>{
    const {id, estado, fecha} = pedido;

    const elementoPedido = document.createElement("LI");

    elementoPedido.id = id;
    elementoPedido.innerText = `ID: ${id}, estado: ${estado}, fecha: ${fecha}`

    lista_pedidos.appendChild(elementoPedido);
}

const actualizarHTML = (pedido,estado) =>{

    const pedidoId = document.getElementById(`${pedido.id}`);

    if (pedidoId) {
        pedidoId.textContent = `ID: ${pedido.id}, estado: ${estado}, fecha: ${pedido.fecha}`;
    }

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