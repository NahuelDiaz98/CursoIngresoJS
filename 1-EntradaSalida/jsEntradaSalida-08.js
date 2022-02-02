/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."
Nahuel Alejandro Diaz ARguello
E/S ejercicio 8
Entregado*/
function SacarResto()
{
	var dividendo;
	var divisor;
	var resto;

	dividendo=document.getElementById("txtIdNumeroDividendo").value;
	divisor=document.getElementById("txtIdNumeroDivisor").value;

	dividendo=parseInt(dividendo);
	divisor=parseInt(divisor);

	resto= dividendo%divisor;

	alert("el resto es: "+resto);


}
