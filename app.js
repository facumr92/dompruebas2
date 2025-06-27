const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const edad = document.getElementById("edad");
const enviar = document.getElementById("enviar");


enviar.addEventListener("click", (e) => {
    const resultado = document.getElementById("resultado");
    //evito que el formulario se envie por defecto para evaluarlo.
    e.preventDefault();

    const nombreValor = nombre.value;
    const apellidoValor = apellido.value;
    const edadValor = edad.value;

    if (nombreValor === "" || apellidoValor === "" || edadValor === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    setTimeout(() => {
        const parrafo = document.createElement  ("p");
        parrafo.textContent = `Hola ${nombreValor} ${apellidoValor} tuedad es: ${edadValor}`;
        formulario.innerHTML = "";
        formulario.appendChild(parrafo);

        nombre.value = "";
        apellido.value = "";
        edad.value = "";
    }, 3000);
});



/*
boton.addEventListener("click", hacer_algo);

function hacer_algo() {
    const edad = Number(prompt("¿Qué edad tienes?"));

    // Validar si se ingresó un número
    if (isNaN(edad) || edad === 0) {
        alert("Edad no válida.");
        return;
    }

    const resultado = edad > 18 ? "Podés votar" : "No podés votar";

    // Limpiar contenido anterior del div ingreso
    ingreso.innerHTML = "";

    const parrafo = document.createElement("p");
    parrafo.textContent = resultado;
    ingreso.appendChild(parrafo);
}

const estilizar = (elemento) => {
    const estilo = elemento.style;

    estilo.backgroundColor = "crimson";
    estilo.color = "antiquewhite";
    estilo.fontSize = "20px";
    estilo.fontFamily = "Arial";
    estilo.padding = ".5rem";
    estilo.marginBottom = "1rem";
};

estilizar(titulo);

// function generar_random() {
//     const numR = Math.floor(Math.random() * 5);
//     return numR;
// }

*/