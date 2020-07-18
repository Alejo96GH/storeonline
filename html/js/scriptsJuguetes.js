window.onload = function(){


	contenido_1  = document.getElementById("contenidos_1").innerHTML;
	contenido_2  = document.getElementById("contenidos_2").innerHTML;
	contenido_3  = document.getElementById("contenidos_3").innerHTML;
	contenido_4  = document.getElementById("contenidos_4").innerHTML;
	contenido_5  = document.getElementById("contenidos_5").innerHTML;
	contenido_6  = document.getElementById("contenidos_6").innerHTML;
	contenido_7  = document.getElementById("contenidos_7").innerHTML;
	contenido_8  = document.getElementById("contenidos_8").innerHTML;
	contenido_9  = document.getElementById("contenidos_9").innerHTML;
	contenido_10 = document.getElementById("contenidos_10").innerHTML;
	contenido_11 = document.getElementById("contenidos_11").innerHTML;



	document.getElementById("niños").onclick = Niños;
	document.getElementById("em1").onclick = Niños;
	document.getElementById("adultos").onclick = Adultos;
	document.getElementById("em2").onclick = Adultos;

	function Niños() {
		document.getElementById("contenidos_1").innerHTML = contenido_1;
		document.getElementById("contenidos_2").innerHTML = contenido_2;
		document.getElementById("contenidos_3").innerHTML = contenido_3;
		document.getElementById("contenidos_4").innerHTML = contenido_4;
		document.getElementById("contenidos_5").innerHTML = contenido_5;
		document.getElementById("contenidos_6").innerHTML = contenido_6;
		document.getElementById("contenidos_7").innerHTML = "";
		document.getElementById("contenidos_8").innerHTML = "";
		document.getElementById("contenidos_9").innerHTML = "";
		document.getElementById("contenidos_10").innerHTML = "";
		document.getElementById("contenidos_11").innerHTML = "";
	}

	function Adultos() {
		document.getElementById("contenidos_1").innerHTML = contenido_7;
		document.getElementById("contenidos_2").innerHTML = contenido_8;
		document.getElementById("contenidos_3").innerHTML = contenido_9;
		document.getElementById("contenidos_4").innerHTML = contenido_10;
		document.getElementById("contenidos_5").innerHTML = contenido_11;
		document.getElementById("contenidos_6").innerHTML = "";
		document.getElementById("contenidos_7").innerHTML = "";
		document.getElementById("contenidos_8").innerHTML = "";
		document.getElementById("contenidos_9").innerHTML = "";
		document.getElementById("contenidos_10").innerHTML = "";
		document.getElementById("contenidos_11").innerHTML = "";
	}

}