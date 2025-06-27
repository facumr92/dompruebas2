const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const edad = document.getElementById("edad");
const enviar = document.getElementById("enviar");
const formulario = document.getElementById("formulario"); // Asegúrate de tener este div en tu HTML

enviar.addEventListener("click", (e) => {
    e.preventDefault();

    const nombreValor = nombre.value;
    const apellidoValor = apellido.value;
    const edadValor = edad.value;

    if (nombreValor === "" || apellidoValor === "" || edadValor === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    setTimeout(() => {
        crearUI(nombreValor, apellidoValor, edadValor);
    }, 3000);
});

function crearUI(nombreValor, apellidoValor, edadValor) {
    const parrafo = document.createElement("p");
    parrafo.textContent = `Hola ${nombreValor} ${apellidoValor}, tu edad es: ${edadValor}`;
    
    formulario.innerHTML = ""; 
    formulario.appendChild(parrafo);

    nombre.value = "";
    apellido.value = "";
    edad.value = "";
}

