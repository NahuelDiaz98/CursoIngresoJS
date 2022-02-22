/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.
Nahuel Alejandro Diaz Arguello
while 5
entregado*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m :");
	
	while(sexoIngresado != "f" && sexoIngresado !="m"){
		
		sexoIngresado = prompt("ERROR. ingrese f ó m :");

	}

	document.getElementById("txtIdSexo").value=sexoIngresado;
}//FIN DE LA FUNCIÓN