/*
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.


31 días : enero, marzo , mayo, julio ,agosto , octubre y diciembre. 
30 días : abril , junio , septiembre y noviembre.

Nahuel Alejandro Diaz Arguello
swith 4
entregado
*/

function mostrar()
{
	var mes;

	mes=document.getElementById("txtIdMes").value;

	switch(mes){
		case "Febrero":
			alert("Tiene 28 dias");
			break;

		case "Abril":	
		case "Junio":
		case "Septiembre":	
		case "Noviembre":
			alert("Tiene 30 dias");
			break;

		default:
			alert("Tiene 31 dias");		

	}
	
	



}//FIN DE LA FUNCIÓN