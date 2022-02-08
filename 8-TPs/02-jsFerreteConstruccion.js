/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.

C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, 
debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
Nahuel Alejandro Diaz Arguello
tp2 FerreteConstrucciones
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var perimetro;
    var cantidadAlambre;
    var alambre;

        alambre= 3;

        largo=document.getElementById("txtIdLargo").value;
        ancho=document.getElementById("txtIdAncho").value;
        largo=parseFloat(largo);
        ancho=parseFloat(ancho);
        
        perimetro= (largo + ancho) * 2;
        cantidadAlambre= terreno * alambre;

        alert("La cantidad de alambre a comprar es de: "+cantidadAlambre);

}
function Circulo () 
{
    var radioCirculo;
    var perimetroCirculo;	
    var vueltaAlambre;
    var cantidadAlambre;
    var mensaje;

    vueltaAlambre = 3
    radioCirculo = document.getElementById("txtIdRadio").value;

    radioCirculo = parseFloat(radioCirculo);

    perimetroCirculo = 2 * Math.PI * radioCirculo;

    //console.log(Math.PI);

    cantidadAlambre = perimetroCirculo * vueltaAlambre;

    mensaje = "La cantidad total es " + cantidadAlambre.toFixed();

    alert(mensaje);

}
function Materiales () 
{
	var largo;
    var ancho;
    var contrapisoMedidas;
    var cal;
    var cemento;

        largo=document.getElementById("txtIdLargo").value;
        ancho=document.getElementById("txtIdAncho").value;
        largo=parseInt(largo);
        ancho=parseInt(ancho);

        contrapisoMedidas=largo * ancho;
        
        cemento=contrapisoMedidas * 2;
        cal=contrapisoMedidas * 3;

        alert("para hacer el contrapiso de "+largo+"x"+ancho+ " necesitas: "+cemento+ " bolsas de cemento y "+cal+" bolsas de cal." );
}










/*
Hecho en clases

/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.

// txtIdLargo txtIdAncho txtIdRadio
function Rectangulo () 
{
    var largoRectangulo;
    var anchoRectangulo;
    var alambreRectangulo;
    var perimetroDelTerreno;

    largoRectangulo = document.getElementById("txtIdLargo").value;
    anchoRectangulo = document.getElementById("txtIdAncho").value;

    largoRectangulo = parseFloat(largoRectangulo);// cambiamos a parsefloat porque las medidas pueden ser numeros con coma
    anchoRectangulo = parseFloat(anchoRectangulo);

    perimetroDelTerreno = (anchoRectangulo + largoRectangulo) * 2;
    alambreRectangulo = perimetroDelTerreno * 3;

    alert("La cantidad de alambre a comprar es " + alambreRectangulo);
}

function Circulo () 
{
    var radioCirculo;
    var perimetroCirculo;	
    var vueltaAlambre;
    var cantidadAlambre;
    var mensaje;

    vueltaAlambre = 3
    radioCirculo = document.getElementById("txtIdRadio").value;

    radioCirculo = parseFloat(radioCirculo);

    perimetroCirculo = 2 * Math.PI * radioCirculo;

    //console.log(Math.PI);

    cantidadAlambre = perimetroCirculo * vueltaAlambre;

    mensaje = "La cantidad total es " + cantidadAlambre.toFixed();

    alert(mensaje);

}

function Materiales () 
{
	var largoDelTerreno;
    var anchoDelTerreno;
    var areaDelTerreno;
    var bolsaDeCemento;
    var bolsaDeCal;
    var mensaje;

    largoDelTerreno= document.getElementById("txtIdLargo").value;
    anchoDelTerreno= document.getElementById("txtIdAncho").value;

    largoDelTerreno= parseFloat(largoDelTerreno);
    anchoDelTerreno= parseFloat(anchoDelTerreno);

    areaDelTerreno= largoDelTerreno * anchoDelTerreno;
    bolsaDeCemento= areaDelTerreno * 2;
    bolsaDeCal= areaDelTerreno * 3;
     //console.log(bolsaDeCal, bolsaDeCemento);

     mensaje = "la cantidad de bolsas de cemento a comprar son " + bolsaDeCemento; 
     mensaje += " y la cantidad de bolsas de cal a comprar son " + bolsaDeCal;

    alert(mensaje);





}
*/
