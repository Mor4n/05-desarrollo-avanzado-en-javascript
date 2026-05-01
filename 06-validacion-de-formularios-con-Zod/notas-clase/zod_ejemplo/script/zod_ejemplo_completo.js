import { z } from 'https://unpkg.com/zod@3.22.4/lib/index.mjs';

const user_form = document.querySelector("#user_form")

const error_campos = {
    nombre: document.querySelector("#nombre_error"),
    edad: document.querySelector("#edad_error"),
    email: document.querySelector("#email_error"),
    celular: document.querySelector("#celular_error")
}  

user_form.addEventListener("submit",(e)=>{
    e.preventDefault();

    // Usar zod:
    // Paso 1: definir schema
    const formularioSchema = z.object({
        nombre:z
            .string()// especificando el tipo de dato
            .min(1,"El nombre es requerido") // minimo de 1 letra, el mensaje de error será el siguiente
            .max(20,"El nombre no puede contener tantos caracteres"), 
        edad: z
            .coerce
            .number("Se esperaba un número")
            .min(1,"La edad es obligatoria"), // el .coerce es para convertirlo de string a number
        email: z
            .string()
            .email(), // Primero validamos que sea string y luego email (como subtipo de dato)
        celular: z
            .string()
            .regex( /^\+52 \(\d{3}\) \d{3} \d{4}$/,"El telefono no está en el formato correcto" )
    });

    // Paso 2. Extraer valores del formulario

    const { nombre, edad, email, celular } = event.target; // e.target lleva los datos que hicimos del submit, solo es cosa de ponerle un .value

    // Objeto que generamos
    const user = {
        nombre: nombre.value,
        // edad: Number(edad.value), // Convertimos a Number porque al obtener un valor de un input, SIEMPRE son strings
        edad: edad.value,
        email: email.value,
        celular: celular.value
    }

    // Paso 3. Parsear los valores del formulario con el Schema

    const resultado = formularioSchema.safeParse( user ) // schema.safeParse(objeto_formulario)

    // Paso 4. Verificar que pasó con resultado
    console.log(resultado);
    
    if(resultado.success){
        console.log(`Se envió el formulario correctamente`);
    }
    else{
        
        console.log("Errores");
        console.log(resultado.error);
        
        


        // Forma 1 de poner error
        // console.warn(`Hubo un error ${resultado.error}`);
        
        // Forma 2
        // resultado.error.issues.forEach((e)=>{
        //     console.log(`${e.message}`)
        // })

        resultado.error.issues.forEach(elemento =>{
            const path = elemento.path[0] // path es de zod, nos dirá el nombre de donde me equivoqué, por ejemplo: "nombre"
            
            error_campos[path].innerHTML = elemento.message; // voy a mandar el mensaje de error, lo voy a asignar al objeto con su nombre
            // Por ejemplo: error_campos["celular"] : "El formato no esta en el numero correcto" en innerHTML

            error_campos.style = "display:block;color:red"; // Lo muestro


        })
        
    }

})