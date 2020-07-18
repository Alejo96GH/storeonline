window.onload = function(){


	contenido_1  = document.getElementById("contenidos_1").innerHTML;
	contenido_2  = document.getElementById("contenidos_2").innerHTML;
	contenido_3  = document.getElementById("contenidos_3").innerHTML;
	contenido_4  = document.getElementById("contenidos_4").innerHTML;
	contenido_5  = document.getElementById("contenidos_5").innerHTML;
	contenido_6  = document.getElementById("contenidos_6").innerHTML;
	contenido_7  = document.getElementById("contenidos_7").innerHTML;
	contenido_8  = document.getElementById("contenidos_8").innerHTML;

	document.onclick = Orden;
	document.getElementById("asc").onclick = Select1;
	document.getElementById("dec").onclick = Select2;


	function Select1() {
		if (document.getElementById("ascendente").checked == false){
			document.getElementById("ascendente").checked = true;
		}

	}

	function Select2() {
		if (document.getElementById("descendente").checked == false){
			document.getElementById("descendente").checked = true;
		}
	}

	function Orden() {
		if(document.getElementById("ascendente").checked == true){
			document.getElementById("contenidos_1").innerHTML  = contenido_6;
			document.getElementById("contenidos_2").innerHTML  = contenido_5;
			document.getElementById("contenidos_3").innerHTML  = contenido_7;
			document.getElementById("contenidos_4").innerHTML  = contenido_4;
			document.getElementById("contenidos_5").innerHTML  = contenido_3;
			document.getElementById("contenidos_6").innerHTML  = contenido_8;
			document.getElementById("contenidos_7").innerHTML  = contenido_2;
			document.getElementById("contenidos_8").innerHTML  = contenido_1;
		}

		if(document.getElementById("descendente").checked == true){
			document.getElementById("contenidos_8").innerHTML  = contenido_6;
			document.getElementById("contenidos_7").innerHTML  = contenido_5;
			document.getElementById("contenidos_6").innerHTML  = contenido_7;
			document.getElementById("contenidos_5").innerHTML  = contenido_4;
			document.getElementById("contenidos_4").innerHTML  = contenido_3;
			document.getElementById("contenidos_3").innerHTML  = contenido_8;
			document.getElementById("contenidos_2").innerHTML  = contenido_2;
			document.getElementById("contenidos_1").innerHTML  = contenido_1;
		}
	}
}