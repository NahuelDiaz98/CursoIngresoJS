/*
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
Nahuel Alejandro Diaz Arguello
if 3

*/

function mostrar()
{
	var edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if(edad>17){
		alert("ústed es mayor de  edad");
	}else{
		alert("ústed es  menor de  edad");
	}


}//FIN DE LA FUNCIÓN