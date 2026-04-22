
const btnAgregarPedido = document.querySelector("#agregar-pedido");

const lista_pedidos = document.querySelector("#lista-pedidos")

btnAgregarPedido.addEventListener("click",()=>{

    // Generar pedido aleatorio
    const pedido = {
        id:generarID(),
        estado: "Creado",
        fecha: new Date().toLocaleString("es-MX"),
    }
    
    // Muestro inicialmente el html
    mostrarHTML(pedido);

    // Paso a la primera parte del procesamiento
    recepcionPedido(pedido);

});



// Primera parte del procesamiento
const recepcionPedido = async (pedido) =>{

    // Genero los tiempos
    const tiempoProceso = tiempoAleatorio(1,3) * 1000;
    const tiempoCompletado = tiempoAleatorio(2,5) * 1000;

    // Mando a llamar a la función para actualizar el estado, pasandole el objeto del pedido, el estado y su tiempo
    await actualizarEstado(pedido, "En proceso", tiempoProceso);
    
    await actualizarEstado(pedido, "Completado", tiempoCompletado);

}

// Parte 2 del procesamiento, donde hago la promise y actualizo el pedido en base al tiempo
const actualizarEstado = (pedido, nuevoEstado, tiempo) => {

    return new Promise((resolve) => {

        setTimeout(() => {

            pedido.estado = nuevoEstado;

            actualizarHTML(pedido);

            resolve();

        }, tiempo);

    });

};


// Mostrado inicial en el HTML del pedido
const mostrarHTML = (pedido) =>{
    const {id, estado, fecha} = pedido;

    const elementoPedido = document.createElement("LI");

    elementoPedido.id = id;
    elementoPedido.innerText = `ID: ${id}, estado: ${estado}, fecha: ${fecha}`

    lista_pedidos.appendChild(elementoPedido);
}

// Actualización del estado del pedido en el HTML
const actualizarHTML = (pedido) =>{
    const {id, estado, fecha} = pedido;


    const pedidoId = document.getElementById(`${pedido.id}`);

    if (pedidoId) {
        pedidoId.textContent = `ID: ${id}, estado: ${estado}, fecha: ${fecha}`;
    }

}

// GENERACIÓN

// De tiempo aleatorio
const tiempoAleatorio = (minimo, maximo) =>{
    
    return Math.floor(Math.random() * (maximo-minimo+1)+minimo);

}

// De ID aleatorio
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