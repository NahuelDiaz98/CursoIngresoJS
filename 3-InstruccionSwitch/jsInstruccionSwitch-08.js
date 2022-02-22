/*
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino

Nahuel Alejandro Diaz ARguello
Switch 8
entregado

*/
function mostrar()
{
	var destino;
	
	destino=document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
		case "Ushuaia":
			alert("Hace frio");
			break;
			
		case "Cataratas":
		case "Mar del plata":
			alert("Hace calor");
			

	}

}//FIN DE LA FUNCIÓN