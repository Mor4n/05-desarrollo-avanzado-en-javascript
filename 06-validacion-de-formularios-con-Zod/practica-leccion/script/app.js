  const formulario = document.querySelector('#formulario')
  formulario.addEventListener('submit', (event) => {

      event.preventDefault(); 



      // Variables
      const nombre = document.querySelector('#nombre');
      const correo = document.querySelector('#correo');
      const telefono = document.querySelector('#telefono');
      const intereses = document.querySelectorAll('input[name="intereses"]:checked');
      const horario = document.querySelector('input[name="horario"]:checked');
      const fecha = document.querySelector('#fecha');
      const hora = document.querySelector('#hora');

      let error = false; // bandera para manejar los errores

      // Validaciones básicas
      if (!nombre.value || !correo.value || !telefono.value || intereses.length === 0 || !horario) {
        alert('Por favor, completa todos los campos obligatorios.');
        error = true;
      }

      // 1.- Validar si el nombre es demasiado largo
      if(nombre.value.length>36){
        mostrarAlerta("El nombre es demasiado largo", nombre);
        error = true;

      }

      // 2.- Validar si un nombre tiene algo que no sean letras
      if (nombre.value.match(/[^a-zA-ZñÑáéíóúÁÉÍÓÚ\s]/)){
        mostrarAlerta("El nombre solo puede contener letras", nombre);
        error = true;

      }

      // 3.- Validar formato de telefono

      if (!telefono.value.match(/^\(\d{3}\) \d{3} \d{4}$/ )){
        mostrarAlerta("El telefono no tiene su formato valido", telefono);

        error = true;

      }

  
      // Si todo está bien

      if(!error){
        alert('Registro exitoso. ¡Gracias por registrarte!');
        formulario.reset();

      }

    });


    const mostrarAlerta = (mensaje, referencia) =>{
      const error = document.createElement("P");
      error.classList.add("error");
      error.textContent = mensaje;
      
      referencia.before(error); // se puede usar after tambien

      setTimeout(() => {
        error.remove();
      }, 3000);

    }