document.getElementById("formulario").addEventListener("submit", function(event) {
   

    //podria reorden el codigo y separarlo en funciones...
   // Evita que el formulario se envíe
    event.preventDefault(); 
  

    //guardo los datos en variables
    const nombre = document.getElementById("nombre").value.trim();
    const pass = document.getElementById("contrasena").value;
    const repetir = document.getElementById("repetir").value;
    const mensaje = document.getElementById("mensaje");
  


    //realizo algunas validaciones
    if (nombre.length < 3) {
      mensaje.textContent = "El nombre debe tener al menos 3 caracteres.";
      return;
    }
  
    if (pass.length < 6) {
      mensaje.textContent = "La contraseña debe tener al menos 6 caracteres.";
      return;
    }
  
    if (pass !== repetir) {
      mensaje.textContent = "Las contraseñas no coinciden.";
      return;
    }
  
    mensaje.style.color = "green";
    mensaje.textContent = "Formulario válido. Enviando...";


    // si está todo bien se envia el formulario
    // this.submit();
  });
  