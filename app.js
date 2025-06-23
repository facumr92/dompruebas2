const boton= document.getElementById("boton");
const titulo= document.querySelector("h1");
let parrafo= document.getElementById("resultado");


boton.addEventListener("click", hacer_algo);

function hacer_algo(){

    // console.log("hiciste click..");

    const edad= Number(prompt("Que edad tienes?"));

    //operador ternario
    const resultado= edad>18? "Podes votar": "No podes votar";
    parrafo.textContent= resultado;

    // console.log(resultado);

}

const estilizar =(elemento)=>{
    const estilo= elemento.style;
    
    estilo.backgroundColor= "crimson";
    estilo.color="antiquewhite";
    estilo.fontSize= "20px";
    estilo.fontFamily= "Arial";
    estilo.padding= ".5rem";
    estilo.marginBottom="1rem";
    }

estilizar(titulo);

// function generar_random(){

// const numR= Math.floor( Math.random() * 5);

// return numR;
// }

