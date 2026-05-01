import { z } from 'https://unpkg.com/zod@3.22.4/lib/index.mjs';

const user_form = document.querySelector("#user_form")

user_form.addEventListener("submit",(e)=>{
    e.preventDefault();

    // Usar zod:
    // Paso 1: definir schema
    const formularioSchema = z.object({
        nombre:z
            .string()// especificando el tipo de dato
            .min(1,"El nombre es requerido") // minimo de 1 letra, el mensaje de error será el siguiente
            .max(20,"El nombre no puede contener tantos caracteres"), 
        edad: z.coerce.number(), // el .coerce es para convertirlo de string a number
        email: z.string().email(), // Primero validamos que sea string y luego email (como subtipo de dato)
        celular: z.string()
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
        // console.warn(`Hubo un error ${resultado.error}`);

        console.log("Errores");
        resultado.error.issues.forEach((e)=>{
            alert(`${e.message}`)
        })
        
    }

})