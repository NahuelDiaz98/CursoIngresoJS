/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
Nahuel Alejandro Diaz Arguello
E/S ejercicio 9
Entregado*/
function mostrarAumento()
{

	var importe;
	var totalConAumento;

	importe=document.getElementById("txtIdSueldo").value;
	importe=parseInt(importe);

	totalConAumento=importe*1.10;

	totalConAumento=parseInt(totalConAumento);
	document.getElementById("txtIdResultado").value=totalConAumento;
}
