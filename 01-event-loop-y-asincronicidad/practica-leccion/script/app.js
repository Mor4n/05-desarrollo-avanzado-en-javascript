
const btnAgregarPedido = document.querySelector("#agregar-pedido");

const lista_pedidos = document.querySelector("#lista-pedidos")

btnAgregarPedido.addEventListener("click",()=>{

    // Generar pedido aleatorio
    const pedido = {
        id:generarID(),
        estado: "Creado",
        fecha: new Date().toLocaleString("es-MX"),
    }
    
    mostrarHTML(pedido);

    recepcionPedido(pedido);

});




const recepcionPedido = async (pedido) =>{


    const tiempoProceso = tiempoAleatorio(1,3) * 1000;
    const tiempoCompletado = tiempoAleatorio(2,5) * 1000;

    await actualizarEstado(pedido, "En proceso", tiempoProceso);
    await actualizarEstado(pedido, "Completado", tiempoCompletado);

}

const actualizarEstado = (pedido, nuevoEstado, tiempo) => {

    return new Promise((resolve) => {

        setTimeout(() => {

            pedido.estado = nuevoEstado;

            actualizarHTML(pedido);

            resolve();
            
        }, tiempo);

    });

};



const mostrarHTML = (pedido) =>{
    const {id, estado, fecha} = pedido;

    const elementoPedido = document.createElement("LI");

    elementoPedido.id = id;
    elementoPedido.innerText = `ID: ${id}, estado: ${estado}, fecha: ${fecha}`

    lista_pedidos.appendChild(elementoPedido);
}

const actualizarHTML = (pedido) =>{
    const {id, estado, fecha} = pedido;


    const pedidoId = document.getElementById(`${pedido.id}`);

    if (pedidoId) {
        pedidoId.textContent = `ID: ${id}, estado: ${estado}, fecha: ${fecha}`;
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