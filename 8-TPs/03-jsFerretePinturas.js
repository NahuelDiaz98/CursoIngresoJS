/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").

Nahuel Alejandro Diaz Arguello
tp3
entregado*/
function FahrenheitCentigrados () 
{
	var fahrenheit;
    var centigrados;

    fahrenheit=document.getElementById("txtIdTemperatura").value;
    fahrenheit=parseFloat(fahrenheit);

    centigrados=(fahrenheit-32)*5/9;

    alert(+ fahrenheit + " fahrengeit ,son " +centigrados+ " centigrados");
}

function CentigradosFahrenheit () 
{
	var fahrenheit;
    var centigrados;

    centigrados=document.getElementById("txtIdTemperatura").value;
    centigrados=parseFloat(centigrados);

    fahrenheit=(9/5*centigrados)+32;

    alert(+ centigrados + " centigrados ,son " +fahrenheit+ " fahrenheit");
}

/*
function FahrenheitCentigrados () 
{
	var centigrados;
    var fahrenheit;
    var mensaje;

    fahrenheit=txtIdTemperatura.value;
    fahrenheit=parseFloat(fahrenheit);
    centigrados=(fahrenheit - 32) * 5/9;
    //console.log(centigrados);
    mensaje= fahrenheit + " grados fahrenheit son "+ centigrados.toFixed(2) + " grados centigrados ";
    alert (mensaje);
}

function CentigradosFahrenheit () 
{
var centigrados;
    var fahrenheit;
    var mensaje;
	centigrados = txtIdTemperatura.value;
	centigrados = parseFloat(centigrados);
	fahrenheit = (centigrados * 9 / 5 ) + 32;
	mensaje = centigrados + " centigrados son " + fahrenheit.toFixed(1) + " grados fahrenheits";
	alert(mensaje);

}

*/