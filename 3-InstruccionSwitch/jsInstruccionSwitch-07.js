/* 
bariloche  sur
ushuaia sur
cataratas norte
mar del plata este 

Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste

Nahuel Alejandro Diaz ARguello
Switch 7
entregado

*/

function mostrar()
{
	var destino;
	
	destino=document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
		case "Ushuaia":
			alert("Sur");
			break;
			
		case "Cataratas":
			alert("Norte");
			break;
		case "Mar del plata":
			alert("Este");
			break;

	}
	
}//FIN DE LA FUNCIÓN