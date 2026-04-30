
const btnReservar = document.querySelector("button");

let mesasDisponibles = 5;

function verificarDisponibilidad(mesasSolicitadas) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (mesasSolicitadas <= mesasDisponibles) {
                resolve();
            } else {
                reject("Lamentablemente no tenemos las mesas suficientes :( ");
            }
        }, 1000);
    });
}

function enviarConfirmacionReserva(nombreCliente) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve(`Gracias por su compra, hemos enviado el ticket a ${nombreCliente}  :D!!!`);
            } else {
                reject("Hubo un error al mandar el correo electrónico u-u");
            }
        }, 1000);
    });
}

async function hacerReserva(nombreCliente, mesasSolicitadas) {
    const resultado = document.getElementById("resultado");
    
    try {
        resultado.innerText = "Verificando disponibilidad...";
        
        await verificarDisponibilidad(mesasSolicitadas);
        
        mesasDisponibles -= mesasSolicitadas;
        document.getElementById("estado").innerText =
        "Mesas disponibles: " + mesasDisponibles;
        
        resultado.innerText = "Enviando confirmación . . .";
        const confirmacion = await enviarConfirmacionReserva(nombreCliente);
        
        resultado.innerText = "Reserva exitosa!!! " + confirmacion;
        
    } catch (error) {
        resultado.innerText = error;
    }
}

function hacerReservaUI() {
    const nombre = document.getElementById("nombre").value;
    const mesas = parseInt(document.getElementById("mesas").value);
    
    if (!nombre || !mesas || mesas <= 0) {
        document.getElementById("resultado").innerText = "Datos inválidos";
        return;
    }
    
    hacerReserva(nombre, mesas);
}
btnReservar.addEventListener("click",()=>hacerReservaUI())