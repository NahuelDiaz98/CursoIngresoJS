/*
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
 mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
Nahuel Alejandro Diaz Arguello
if 7
 */
function mostrar()
{
	var edad;
	var estado;

	edad=document.getElementById("txtIdEdad").value;
	estado=document.getElementById("estadoCivil").value;

	if(edad<17 && estado!="Soltero"){
		alert("Es muy pequeño para no ser soltero");
	}


	


}//FIN DE LA FUNCIÓN