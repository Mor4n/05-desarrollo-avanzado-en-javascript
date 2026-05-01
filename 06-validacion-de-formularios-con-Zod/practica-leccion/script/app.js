  document.querySelector('#formulario').addEventListener('submit', (event) => {
      event.preventDefault(); 

      // Variables
      const nombre = document.querySelector('#nombre').value;
      const correo = document.querySelector('#correo').value;
      const telefono = document.querySelector('#telefono').value;
      const intereses = document.querySelectorAll('input[name="intereses"]:checked');
      const horario = document.querySelector('input[name="horario"]:checked');
      const fecha = document.querySelector('#fecha').value;
      const hora = document.querySelector('#hora').value;

      // Validaciones básicas
      // if (!nombre || !correo || !telefono || intereses.length === 0 || !horario) {
      //   alert('Por favor, completa todos los campos obligatorios.');
      //   return;
      // }

      // 1.- Validar si el nombre es demasiado largo
      if(nombre.length>36){
        alert("El nombre es demasiado largo");
        return;
      }

      // 2.- Validar si un nombre tiene algo que no sean letras
      if (nombre.match(/[^a-zA-ZñÑáéíóúÁÉÍÓÚ\s]/)){
        alert("El nombre solo puede contener letras");
        return;
      }

      // 3.- Validar formato de telefono

      if (!telefono.match(/^\(\d{3}\) \d{3} \d{4}$/ )){
        alert("El telefono no tiene su formato valido")
        return;
      }

  
      // Si todo está bien
      // alert('Registro exitoso. ¡Gracias por registrarte!');
    });

