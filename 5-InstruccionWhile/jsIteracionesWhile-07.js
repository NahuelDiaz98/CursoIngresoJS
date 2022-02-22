/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
Nahuel Alejandro Diaz Arguello
while 7
entregado
*/
function mostrar()
{
	var numero;
	var acumulador;
	var promedio;
	var respuesta;
	var contador;

	acumulador=0;
	contador=0;

	do{
		numero=prompt("Digite un numero: ");
		numero=parseInt(numero);
		while(isNaN(numero)){
			numero=prompt("Error.Digite un numero: ");

		}
		acumulador+=numero;
		contador++;

		respuesta=prompt("queres colocar otro numeros? (si | no): ");

	}while(respuesta=="si");

	promedio=acumulador/contador;
	
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=promedio;

	//txtIdSuma
	//txtIdPromedio

}//FIN DE LA FUNCIÓN