/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.
Nahuel Alejandro Diaz Arguello
while 2*/
function mostrar()
{
	var contador;
	contador=10;
	mensaje= "";
	
	while(contador>0){
		mensaje+=contador + "\n";
		contador--;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN