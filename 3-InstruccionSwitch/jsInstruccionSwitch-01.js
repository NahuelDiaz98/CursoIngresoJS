/*
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."

Nahuel Alejandro Diaz ARguello
Switch 1
entregado
*/

function mostrar()
{
	var mes;
	mes=document.getElementById("txtIdMes").value;

	switch(mes){
		case "Enero":
			alert("que comiences bien el año!!!.");
			break;
		case "Marzo":
			alert("A clases");
			break;
		case "Julio":
			alert("Se vienen las vacaciones!!!");
			break;
		case "Diciembre":
			alert("Felices fiesta!!!");
			break;
		default:
			
	}



}//FIN DE LA FUNCIÓN