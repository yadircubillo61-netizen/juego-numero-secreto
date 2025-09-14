let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value, 10);

    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (numeroUsuario > numeroSecreto) {
        //El usuario no acertó
        asignarTextoElemento('p','El númeor es menor');
    } else {
        asignarTextoElemento('p', 'El númeor es mayor');
        
    } 
    intentos++;
    limpiarCaja();
} 

function limpiarCaja() {
   document.querySelector('#valorUsuario').value = '';
  
}




function generarNumeroSecreto () {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Sí ya sorteamos todos los números posibles, limpiar la lista
if (listaNumerosSorteados.length === numeroMaximo) {
asignarTextoElemento('p','Se han sorteado todos los números posibles. Se reinicia la lista.');

} else {


        //Si el número generado ya está en la lista, generar otro
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            //Agregar el número a la lista
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

}
}

function condicionesIniciales() {
asignarTextoElemento('h1','¡ juego del número secreto!');
asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos = 1;

}



function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar nuevo número secreto
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar botón de reiniciar
    document.getElementById('reiniciar').setAttribute('disabled', 'true');

}
    




condicionesIniciales();

