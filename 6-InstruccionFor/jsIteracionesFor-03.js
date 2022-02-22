/* al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"
Nahuel Diaz Arguello 
for 3*/
function mostrar()
{
	var cantidad;
	
	cantidad=prompt("Cuantas veces queres repetir lo mismo?: ");
	cantidad=parseInt(cantidad);

	for(cantidad ; cantidad>0 ;cantidad--){
		document.write("Hola UTN FRA"+"<br>");
		posicion++;
	}


}//FIN DE LA FUNCIÓN