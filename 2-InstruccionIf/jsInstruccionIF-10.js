
/*
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
Nahuel Alejandro Diaz Arguello
if 10
*/
function mostrar()
{
	var numeroRandom;

	numeroRandom=Math.floor(Math.random()*10+1);

	if(numeroRandom>=9){
		alert("Excelente "+numeroRandom);
	}else{
			
		if(numeroRandom>3){
			alert("Aprobo "+numeroRandom);
		}else{
			alert("Vamos,la proxima se puede. "+numeroRandom);
			

		}
		


	}
	 
	

}//FIN DE LA FUNCIÓN