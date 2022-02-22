/* 
una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año 
y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y 
Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20% (Terminado)

en Verano: bariloche tiene un descuento del 20% cataratas y 
Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20% (Terminado)

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento 


Nahuel Alejandro Diaz Arguello
Swicht 9
entregado

*/
function mostrar()
{
	var destino;
	var estadia;
	var estacion;
	var precioFinal;
	var aumento;
	var descuento;

	estadia=15000;
	aumento=0;
	descuento=0;

	estacion=document.getElementById("txtIdEstacion").value;
	destino=document.getElementById("txtIdDestino").value;

	switch(estacion){
		case "Invierno":
			if(destino=="Bariloche"){
				aumento=estadia*0.2;	//bariloche tiene un aumento del 20% 
			}else{
				if(destino=="Mar del plata"){
					descuento=estadia*0.2;		//Mar del plata tiene un descuento del 20%
					
				}else{
					descuento= estadia*0.1;	// cataratas y  Cordoba tiene un descuento del 10%
				}
			}
		 	break;
		
		case "Verano":
			if(destino=="Bariloche"){
				descuento= estadia*0.2; //bariloche tiene un descuento del 20%	
				
			}else{
				if(destino=="Mar del plata"){
					aumento=estadia*0.2;   //Mar del plata tiene un aumento del 20%
				}else{
					
					aumento=estadia*0.1; 	//cataratas y Cordoba tiene un aumento del 10% 
				}				
			}

		 break;	

		default:
			if(destino!="Cordoba"){	
				aumento=estadia*0.1;	
			}
	}

	precioFinal=estadia+aumento-descuento;
	

	alert(" total: $"+precioFinal);

}//FIN DE LA FUNCIÓN