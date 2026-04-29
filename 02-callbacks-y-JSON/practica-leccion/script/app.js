
// local
let biblioteca = {
    libros: [
        { titulo: "Solanin", autor: "Inio Asano", genero: "Drama", disponible: "true" },
        { titulo: "Vagabond", autor: "Takehiko Inoue", genero: "Seinen", disponible: "false" }
    ]
};


const api_url = ""

// Función para la lectura de datos
function leerDatos(callback) {

    if(api_url!=""){
        fetch(api_url)
        .then(res => res.json())
        .then(data => {
            callback({ libros: data }); 
        })
        .catch(err => console.error("Error al leer datos:", err));
    }
    else{

        setTimeout(() => {
            // Simulando la lectura del JSON con un retraso de 1 segundo
            callback(biblioteca);
        }, 500);

    }
}

// Función para mostrar todos los libros en consola
function mostrarLibros() {
    leerDatos((datos) => {
        console.log("-------------");
        console.log("Inventario de libros:");
        console.log("-------------");
        datos.libros.forEach((libro, index) => {
            
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible==="FALSE"||libro.disponible==="false" ? 'Prestado' : 'Disponible'})`);
        });
        console.log("-------------");
    });
}

// Función para agregar un nuevo libro
function agregarLibro(titulo, autor, genero, disponible) {
   
    if(api_url!=""){
         setTimeout(() => {
        fetch(api_url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ data: [{ titulo, autor, genero, disponible }] })
        })
        .then(res => res.json())
        .then(() => {
            console.log(`Libro "${titulo}" agregado con la API`);
        })
        .catch(err => console.error("Error al agregar:", err));
    }, 1000);
    }
    else{
        //Agregar libro local
        setTimeout(() => {
            // en realidad puedo eliminar bastante codigo ya que JS crea un objeto con propiedades del nombre de la variable
            biblioteca.libros.push({ titulo, autor, genero, disponible });
            console.log(`Libro "${titulo}" agregado (local).`);
        }, 500);
    }


}

// Función para cambiar la disponibilidad de un libro
function actualizarDisponibilidad(titulo, nuevoEstado) {
    
    if(api_url!=""){
        setTimeout(() => {
        fetch(`${api_url}/titulo/${titulo}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({data: { disponible: nuevoEstado }})
        })
        .then(res => res.json())
        .then(() => {
            console.log(`Disponibilidad de "${titulo}" actualizada.`);
        })
        .catch(err => console.error("Error al actualizar:", err));
    }, 1000);
    }
    else{
        setTimeout(() => {
            biblioteca.libros.forEach(libro => {
                if (libro.titulo === titulo) {
                    libro.disponible = nuevoEstado;
                }
            });
            console.log(`Estado actualizado (local).`);
        }, 500);
    }

}
// Ejemplo de cómo ejecutar la aplicación
mostrarLibros();
agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", "true");
actualizarDisponibilidad("Vagabond", "true");
mostrarLibros();



