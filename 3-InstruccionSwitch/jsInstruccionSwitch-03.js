/*
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"

Nahuel Alejandro Diaz Arguello
swith 3
entregado
*/
function mostrar()
{
	var mes;

	mes=document.getElementById("txtIdMes").value;

	switch(mes){
		case "Febrero":
			alert("Este mes no tiene mas de 29 días.");
			break;
		default:
			alert("Este mes tiene 30 o mas dias");	
	}
/*
	if(mes=="Febrero"){
		alert("Este mes no tiene mas de 29 días.");

	}else{
		alert("Este mes tiene 30 o mas dias");
	}
	*/
}//FIN DE LA FUNCIÓN