/*
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
Nahuel Alejandro Diaz  Arguello
if 4
*/

function mostrar()
{
	var edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if(edad>12 && edad<18){
		alert("Es adolescente");

	}
		

	


}//FIN DE LA FUNCIÓN