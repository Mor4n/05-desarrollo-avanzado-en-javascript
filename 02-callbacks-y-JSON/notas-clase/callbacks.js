
/**
 * Un callback es una funcion que es llamada como parametro de otra
 */



const miFuncion = ( nombre, callback  ) =>{
    console.log(`El texto original era ${nombre} y su transformacion es ${callback(nombre)}`);

}

const todoAMayusculas = (nombre) => {
    return nombre.toUpperCase();
}

const todoAMinusculas = (nombre) => {
    return nombre.toLowerCase();
}


miFuncion("Brayan",todoAMayusculas);
miFuncion("Brayan",todoAMinusculas);

// Se puede poner como funcion anonima
miFuncion("Hola mundo",(txt)=> txt.substring(1,5));