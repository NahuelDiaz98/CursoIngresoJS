/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
Nahuel Alejandro Diaz Arguello
tp1 
entregado
*/
function Sumar () 
{
 var productoUno;
 var productoDos;
 var productoTres;
 var suma;

 productoUno=document.getElementById("txtIdPrecioUno").value;
 productoDos=document.getElementById("txtIdPrecioDos").value;
 productoTres=document.getElementById("txtIdPrecioTres").value;

 productoUno=parseInt(productoUno);
 productoDos=parseInt(productoDos);
 productoTres=parseInt(productoTres);

 suma=productoUno + productoDos + productoTres;

 alert("El resultado de la suma es: "+suma);
}
function Promedio () 
{
 var productoUno;
 var productoDos;
 var productoTres;
 var suma;
 var promedio;

 productoUno=document.getElementById("txtIdPrecioUno").value;
 productoDos=document.getElementById("txtIdPrecioDos").value;
 productoTres=document.getElementById("txtIdPrecioTres").value;

 productoUno=parseInt(productoUno);
 productoDos=parseInt(productoDos);
 productoTres=parseInt(productoTres);

 suma=productoUno + productoDos + productoTres;

 promedio=suma/3;

 alert("el promedio es: "+promedio);
}
function PrecioFinal () 
{
 var productoUno;
 var productoDos;
 var productoTres;
 var suma;
 var precioFinal;

 productoUno=document.getElementById("txtIdPrecioUno").value;
 productoDos=document.getElementById("txtIdPrecioDos").value;
 productoTres=document.getElementById("txtIdPrecioTres").value;

 productoUno=parseInt(productoUno);
 productoDos=parseInt(productoDos);
 productoTres=parseInt(productoTres);

 suma=productoUno + productoDos + productoTres;

 precioFinal= suma * 1.21;

 alert("Precio final( incluye iva  21%): "+precioFinal);

}