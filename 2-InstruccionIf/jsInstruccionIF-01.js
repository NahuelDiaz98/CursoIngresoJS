/*
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
Nahuel Alejandro diaz arguello
if 1
*/

function mostrar()
{
	var edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if(edad==15){
		alert("Mi niña bonita.");
	}

}//FIN DE LA FUNCIÓN