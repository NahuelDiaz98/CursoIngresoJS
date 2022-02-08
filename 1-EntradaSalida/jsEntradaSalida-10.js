/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
Nahuel Alejandro Diaz Arguello
E/S ejercicio 10
terminado*/
function mostrarAumento()
{
	var importe;
	var totalConDescuento;

	importe=document.getElementById("txtIdImporte").value;
	importe=parseInt(importe);

	totalConDescuento=importe*0.75;
	
	document.getElementById("txtIdResultado").value=totalConDescuento;
}
