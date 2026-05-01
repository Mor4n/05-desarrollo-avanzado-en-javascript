import { z } from "https://unpkg.com/zod@3.22.4/lib/index.mjs";

const formulario = document.querySelector("#formulario");


// 1.- Crear esquema
const schema = z.object({
    nombre: z.string().min(1, "Se requiere ingresar su nombre"),
    email: z.string().email("Su correo electrónico es inválido"),
    password: z
        .string()
        .min(
            8,
            "La contraseña tiene que tener una longitud mínima de 8 caracteres",
        ),
});

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    // 2.- Extraer valores del formulario
    const { nombre, email, password } = e.target;

    // Generamos un objeto con los valores extraídos
    const usuario = {
        nombre: nombre.value,
        email: email.value,
        password: password.value,
    };

    // 3.- Validamos los valores en base al esquema que creamos

    const validacion = schema.safeParse(usuario);

    if (validacion.success) {
        console.log(`Se envió el formulario correctamente`);
    } else {
        console.log("Errores");
        validacion.error.issues.forEach((e) => {
            console.warn(`${e.message}`);
        });
    }
});


