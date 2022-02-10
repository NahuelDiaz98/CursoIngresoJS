/*
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
nahuel Alejandro  Diaz ARguello
if  8
Entregado
*/

function mostrar()
{
	var edad;
	var estadoCivil;

	edad=document.getElementById("txtIdEdad").value;
	estadoCivil=document.getElementById("EstadoCivil").value;

	edad=parseInt(edad);

	if(edad>17 && estadoCivil=="Soltero"){
		alert("Es soltero y no es menor.");
	}
	


}//FIN DE LA FUNCIÓN 