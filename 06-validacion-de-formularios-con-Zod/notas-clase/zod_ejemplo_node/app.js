const { z } = require("zod")
const readline = require("node:readline/promises")
const { read } = require("node:fs")
 const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


async function main() {
   
    // Paso 1. definir esquema

        
    const formularioSchema = z.object({
        nombre: z
            .string()// especificando el tipo de dato
            .min(1, "El nombre es requerido") // minimo de 1 letra, el mensaje de error será el siguiente
            .max(20, "El nombre no puede contener tantos caracteres"),
        edad: z.coerce.number(), // el .coerce es para convertirlo de string a number
        email: z.string().email(), // Primero validamos que sea string y luego email (como subtipo de dato)
        telefono: z.string()
    });


    // Obtener valores
    const nombre = await rl.question("Ingrese su nombre: ");
    const edad = await rl.question("Ingrese su edad: ")
    const email = await rl.question("Ingrese su email: ")
    const telefono = await rl.question("Ingrese su telefono: ")

    // Paso 3 Extraer valores 
    // Objeto formulario
    const formulario = {
        nombre, // Es como si hago: nombre: nombre, entonces con JS puedo omitir el escribir la clave y ya solo el valor
        edad,
        email,
        telefono
    }

    // Paso 3. 
    const resultado = formularioSchema.safeParse(formulario);


    if (resultado.success) {
        console.log("Formulario correcto!");
    }
    else {
        console.log("Errores");
        resultado.error.issues.forEach(error => {
            console.log(`${error.message} en ${error.path}`);

        })

    }
}


main();