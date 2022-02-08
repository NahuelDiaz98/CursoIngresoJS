/*
Al ingresar una edad debemos informar solo si la persona es mayor de edad
Nahuel Alejandro  Diaz Arguello
if 2
*/

function mostrar()
{
	var edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if(edad>17){
		alert("Es mayor  de edad");
	}
	

}//FIN DE LA FUNCIÓN