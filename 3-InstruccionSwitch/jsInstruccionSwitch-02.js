/*
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio." x
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.


 invierno son de junio a agosto,
  los de verano de diciembre enero febrero, 
   los de primavera de septiembre octubre noviembre 
   los de otoño de marzo, abril y mayo

Nahuel Alejandro Diaz Arguello 
swith 2
entregado
*/
function mostrar()
{
	var mes;

	mes=document.getElementById("txtIdMes").value;

	switch(mes){
		
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio."); 
			break;

		case "Diciembre":
		case "Febrero":
		case "Enero":
			alert("Ya pasamos el frio, ahora calor!!!");
			break;

		default:
			alert("Falta para el invierno.");
		
	}




}//FIN DE LA FUNCIÓN