/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
Nahuel Alejandro Diaz Arguello
while 9
entregado*/
function mostrar()
{	// declarar variables
	
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var flag=1;
	

	do{
		numeroIngresado=prompt("Ingrese un numero: ");
		numeroIngresado=parseInt(numeroIngresado);

		if(flag){
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			flag=0;

		}else{
			if(numeroIngresado>numeroMaximo){
				numeroMaximo=numeroIngresado;
			}else{
				if(numeroIngresado<numeroMinimo){
					numeroMinimo=numeroIngresado;
				}
			}
		}

		respuesta=prompt("Deseas continuar? (si / no): ");
	}while(respuesta=="si");
	
	
	document.getElementById("txtIdMinimo").value=numeroMinimo;
	document.getElementById("txtIdMaximo").value=numeroMaximo;
}//FIN DE LA FUNCIÓN