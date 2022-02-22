/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos. x
2-Suma de los positivos. x
3-Cantidad de positivos. x 
4-Cantidad de negativos. x
5-Cantidad de ceros. x
6-Cantidad de números pares. x
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 
Nahuel Alejandro Diaz Arguello
entregado
while 10*/
function mostrar()
{
var numero;
var acumuladorNegativos;
var acumuladorPositivos;
var contadorNegativos;
var contadorPositivos;
var contadorCeros;
var contadorPares;
var promedioPositivos;
var promedioNegativos;
var diferencia;
var respuesta;

acumuladorNegativos=0;
acumuladorPositivos=0;
contadorNegativos=0;
contadorPositivos=0;
contadorCeros=0;
contadorPares=0;
promedioNegativos=0;
promedioPositivos=0;

do{
	numero=prompt("Digite un numero: ");
	numero=parseInt(numero);
	
	if(numero>0){
		acumuladorPositivos+=numero;
		contadorPositivos++;

		if(numero%2==0){
			contadorPares++;
		}

	}else{
		if(numero<0){
			contadorNegativos++;
			acumuladorNegativos+=numero;
			
		}else{
			contadorCeros++;
			contadorPares++;
		}
	}

	respuesta=prompt("Deseas continuar? (si / no): ");

	}while(respuesta=="si");

	
	if(contadorNegativos!=0){

		promedioNegativos= acumuladorNegativos / contadorNegativos;
	}
	if(contadorPositivos!=0){
		promedioPositivos= acumuladorPositivos / contadorPositivos;
	}	
		
	


	diferencia= acumuladorPositivos  + acumuladorNegativos;

	document.write("la suma de positivos es :"+acumuladorPositivos+"<br>");
	document.write("la cantidad de numeros positivos es :"+contadorPositivos+"<br>");
	document.write("la suma de negativos es :"+acumuladorNegativos+"<br>");
	document.write("la cantidad de numeros negativos es :"+contadorNegativos+"<br>");
	document.write("la cantidad de ceros  es :"+contadorCeros+"<br>");
	document.write("la cantidad de numeros pares es: :"+contadorPares+"<br>");
	document.write("promedio de numeros positivos :"+promedioPositivos+"<br>");
	document.write("promedio de numeros negativos :"+promedioNegativos+"<br>");
	document.write("diferencia entre numeros negativos y positivos: "+diferencia+"<br>");
	
}//FIN DE LA FUNCIÓN