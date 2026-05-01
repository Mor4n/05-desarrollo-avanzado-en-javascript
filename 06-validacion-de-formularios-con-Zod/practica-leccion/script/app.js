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
        
        alert(`Se envió el formulario correctamente`);
        formulario.reset();

    } else {
        console.log("Errores");
        
        validacion.error.issues.forEach((e) => {
            mostrarHTML(e.message, e.path);
            console.warn(`${e.message}`);
        });
    }
});


const mostrarHTML = (mensaje, referencia) => {
  const input = document.querySelector(`#${referencia}`).parentElement;

    if (input.querySelector(".error")) return; // Si ya existe dentro de input algo con la clase error, entonces que no se muestre la alerta

    const error = document.createElement("p");
    error.textContent = mensaje;
    error.classList.add("error");

    input.appendChild(error);

    setTimeout(() => {
        error.remove();
    }, 2000);
};