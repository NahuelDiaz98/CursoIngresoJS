/* Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio. 
Nahuel Alejandro Diaz Arguello
while 6
entregado*/

function mostrar()
{
	var numeroIngresado;
	var contador;
	var acumulador;
	var promedio;

	contador=0;
	acumulador=0;
	
	while(contador<5){
		contador++;

		numeroIngresado=prompt(" ingrese un numero:");
		numeroIngresado=parseInt(numeroIngresado);

		acumulador+=numeroIngresado;
	}

	promedio=acumulador/contador;
	
	document.getElementById("txtIdSuma").value=promedio;
	document.getElementById("txtIdPromedio").value=acumulador;

}//FIN DE LA FUNCIÓN