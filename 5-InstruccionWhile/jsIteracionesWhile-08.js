/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
Nahuel Alejandro Diaz Arguello 
while 8*/
function mostrar()
{
	var numero;
	var sumaPositivo;
	var multiplicadorNegativo;
	var respuesta;
	var banderaNegativo;

	sumaPositivo=0;
	multiplicadorNegativo=1;
	banderaNegativo=1;

	do{
		numero=prompt("Ingrese un numero: ");
		numero=parseInt(numero);
		
		if(numero>0){
			sumaPositivo+=numero;
		}else{
			multiplicadorNegativo*=numero;
			banderaNegativo=0;
			
		}

		respuesta=prompt("Quieres continuar?(Si o No) : ");
	}while(respuesta=="si");

	if(banderaNegativo){
		multiplicadorNegativo=0;
	}

	document.getElementById("txtIdSuma").value=sumaPositivo;
	document.getElementById("txtIdProducto").value=multiplicadorNegativo;
}//FIN DE LA FUNCIÓN