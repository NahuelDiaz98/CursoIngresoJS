/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	
Nahuel Alejandro Arguello Diaz

Entregado
*/

function mostrar()
{	
	var nombre;
	var edad;

	nombre=document.getElementById("txtIdNombre").value;
	edad=document.getElementById("txtIdEdad").value;
	
	alert("ústed se  llama "+nombre+" y tiene "+edad+" años.");
	
	/*
	metodo rápido

	nombre = txtIdNombre.value;
	edad = txtIdEdad.value;
	*/
}

