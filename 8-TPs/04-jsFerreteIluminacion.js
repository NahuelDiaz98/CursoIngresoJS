/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 Nahuel Alejandro Diaz Arguello
 div b
 tp4 FerreteIluminacion

 */
function CalcularPrecio () 
{
 	var precio;
    var cantidadLamparas;
    var importe;
    var descuento;
    var marcaLamparas;
    var total;
    var bruto;
    
    precio= 35;
    descuento=0;
    
    marcaLamparas=document.getElementById("Marca").value;
    cantidadLamparas=document.getElementById("txtIdCantidad").value;

        cantidadLamparas=parseInt(cantidadLamparas);
        
    importe=precio*cantidadLamparas;

    //A
    if(cantidadLamparas>=6){

        descuento=importe*0.5; //bien
    }

    //b
    if(cantidadLamparas==5 ){
        if( marcaLamparas=="ArgentinaLuz"){
            descuento=importe*0.6; //bien
        }else{
            descuento=importe*0.7; //bien
        }
    } 
   
    //c
    if(cantidadLamparas==4){
        if(marcaLamparas=="ArgentinaLuz" || marcaLamparas=="FelipeLamparas"){
            descuento=importe*0.75; //bien
        }else{
            descuento=importe*0.80;  //bien
        }
    }

    //d
    if(cantidadLamparas==3){
        if(marcaLamparas=="ArgentinaLuz"){
            descuento=importe*0.85; //bien.
        }else{
            if(marcaLamparas=="FelipeLamparas"){
                descuento=importe*0.90;//bien
            }else{
                descuento=importe*0.95; //bien
            }
        }
    }
    
    if(descuento==0){
        total=importe;
    }else{
        total=descuento;
    }

    if(total>120 && descuento!=0){
        bruto=total*1.10;
       
        alert("Usted pago " +bruto+ " de IIBB");
    }
   
    document.getElementById("txtIdprecioDescuento").value=total;
    
}
