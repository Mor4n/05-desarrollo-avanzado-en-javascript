
let biblioteca = {
    "libros": [
        { "titulo": "Solanin", "autor": "Inio Asano", "genero": "Drama", "disponible": true },
        { "titulo": "Vagabond", "autor": "Takehiko Inoue", "genero": "Seinen", "disponible": true }
    ]
};


// Función para simular la lectura de datos (similar a la lectura de un archivo JSON)
function leerDatos(callback) {
    setTimeout(() => {
        // Aquí se simula la lectura del JSON con un retraso de 1 segundo
        callback(biblioteca);
    }, 1000);
}

// Función para mostrar todos los libros en consola
function mostrarLibros() {
    leerDatos((datos) => {
        console.log("Inventario de libros:");
        datos.libros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
        });
    });

}

// Función para agregar un nuevo libro
function agregarLibro(titulo, autor, genero, disponible) {
    const nuevoLibro = { titulo, autor, genero, disponible };
    // Simulación de escribir el libro en el "archivo" 
    setTimeout(() => {
        libroNuevo = {
            "titulo": titulo,
            "autor":autor,
            "genero":genero,
            "disponible":disponible
        }
        biblioteca["libros"].push(libroNuevo) 
    }, 1000);
}

// Función para cambiar la disponibilidad de un libro
function actualizarDisponibilidad(titulo, nuevoEstado) {
    // Simula un retraso antes de actualizar la disponibilidad
    setTimeout(() => {
        // Pista: busca el libro por título y cambia la propiedad 'disponible' a nuevoEstado
    }, 1000);
}

// Ejemplo de cómo ejecutar la aplicación
mostrarLibros();
agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true);
actualizarDisponibilidad("Vagabond", false);

mostrarLibros();