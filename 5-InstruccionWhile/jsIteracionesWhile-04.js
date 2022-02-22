/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.
Nahuel Alejandro Diaz Arguello
while 4
entregado*/
function mostrar()
{
	var numero;
		
		numero=prompt("Digite un numero entre 0 y 9 :");
		numero=parseInt(numero);
		
		while(numero<0 || numero>9){
		
			numero=prompt("Error.Digite un numero entre 0 y 9 :");
			
			//numero=parseInt(numero);
		}
		
	document.getElementById("txtIdNumero").value=numero;	
	
}//FIN DE LA FUNCIÓN