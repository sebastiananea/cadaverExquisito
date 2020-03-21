'use strict';

//S: constantes, las declaro aca arriba, explico que son
const btnJugar      = document.querySelector('#btn-comenzar'),
	  btnDetener    = document.querySelector('#btn-detener'),
	  inputBox      = document.querySelector('#box'), 
	  btnSiguiente  = document.querySelector('#btn-siguiente'),
	  mensaje       = document.querySelector('#mensaje'), //Muestra mensaje de ingrese x palabra
	  resultado     = document.querySelector('#resultado'), //Muestra el resultado final en pantalla
	  tipoDePalabra = ['sustantivo', 'adjetivo', 'verbo'];
	  btnDetener.disabled = true;
	  btnSiguiente.disabled = true;
	  
    let palabras = [],
    tipoDePalabraCnt= 0; //U: avanza en cada click, pero calculo el resto de dividir por la cantidad de tiposDePalabra

const preguntarPalabraPorTipo= ()=>{
    mensaje.textContent = 'Ingrese un ' + tipoDePalabra[tipoDePalabraCnt];
	tipoDePalabraCnt= (tipoDePalabraCnt+1) % tipoDePalabra.length; //A: incremento para la proxima, tomo el resto de dividir tipoDePalabraCnt por la cantidad de tipos de palabra;  
  };

const imprimirResultado = ()=>{
	palabras.push(inputBox.value);
	let stringFinal = ""
	palabras.map( (palabra) => {
	stringFinal = stringFinal.concat(`<p>${palabra}</p>`)
	})
	btnDetener.disabled = true;
	btnSiguiente.disabled = true;
	btnJugar.disabled = false;
	resultado.innerHTML = stringFinal; //Imprime el array en pantalla
	resultado.classList.remove('hide');
	
}

const checkInput= ()=>{
	if(inputBox.value.length == 0){
		mensaje.textContent = "Tenes que completar el campo!"
		console.log(inputBox.value.length);
	}
	else{
	palabras.push(inputBox.value);				//Mandamos el valor del input al array y limpiamos el 												input.
	preguntarPalabraPorTipo();
	inputBox.value= "";
	btnDetener.disabled = false;
	}
};

const restartGame = ()=>{
	palabras = [];
	tipoDePalabraCnt = 0;
	preguntarPalabraPorTipo();
	inputBox.value = "";
	btnSiguiente.disabled = false;
	btnJugar.disabled = true;
	resultado.classList.add('hide');
	

}

//LISTENERS


btnSiguiente.addEventListener('click', checkInput);

btnJugar.addEventListener('click', restartGame);

btnDetener.addEventListener('click', imprimirResultado);

