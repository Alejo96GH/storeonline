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

	document.getElementById("filtrar").onclick = Filtro;
	document.getElementById("ic9").onclick = Select1;
	document.getElementById("ic8").onclick = Select2;

	function Select1() {
		if (document.getElementById("cocina").checked == true){
			document.getElementById("cocina").checked = false;
		}
		else {
			document.getElementById("cocina").checked = true;
		}
	}

	function Select2() {
		if (document.getElementById("otros").checked == true){
			document.getElementById("otros").checked = false;
		}
		else {
			document.getElementById("otros").checked = true;
		}
	}


	function Filtro() {
		if (document.getElementById("cocina").checked == true && 
			document.getElementById("otros").checked == true ){

			document.getElementById("contenidos_1").innerHTML = contenido_1;
			document.getElementById("contenidos_2").innerHTML = contenido_2;
			document.getElementById("contenidos_3").innerHTML = contenido_3;
			document.getElementById("contenidos_4").innerHTML = contenido_4;
			document.getElementById("contenidos_5").innerHTML = contenido_5;
			document.getElementById("contenidos_6").innerHTML = contenido_6;
			document.getElementById("contenidos_7").innerHTML = contenido_7;
			document.getElementById("contenidos_8").innerHTML = contenido_8;
			document.getElementById("contenidos_9").innerHTML = contenido_9;
			document.getElementById("contenidos_10").innerHTML = contenido_10;
			document.getElementById("contenidos_11").innerHTML = contenido_11;
		}

		if (document.getElementById("cocina").checked == false && 
			document.getElementById("otros").checked == false ){

			document.getElementById("contenidos_1").innerHTML = "";
			document.getElementById("contenidos_2").innerHTML = "";
			document.getElementById("contenidos_3").innerHTML = "";
			document.getElementById("contenidos_4").innerHTML = "";
			document.getElementById("contenidos_5").innerHTML = "";
			document.getElementById("contenidos_6").innerHTML = "";
			document.getElementById("contenidos_7").innerHTML = "";
			document.getElementById("contenidos_8").innerHTML = "";
			document.getElementById("contenidos_9").innerHTML = "";
			document.getElementById("contenidos_10").innerHTML = "";
			document.getElementById("contenidos_11").innerHTML = "";
		}

		if (document.getElementById("cocina").checked == true && 
			document.getElementById("otros").checked == false ){

			document.getElementById("contenidos_1").innerHTML = contenido_3;
			document.getElementById("contenidos_2").innerHTML = contenido_4;
			document.getElementById("contenidos_3").innerHTML = contenido_5;
			document.getElementById("contenidos_4").innerHTML = contenido_6;
			document.getElementById("contenidos_5").innerHTML = contenido_7;
			document.getElementById("contenidos_6").innerHTML = contenido_9;
			document.getElementById("contenidos_7").innerHTML = contenido_10;
			document.getElementById("contenidos_8").innerHTML = contenido_11;
			document.getElementById("contenidos_9").innerHTML = "";
			document.getElementById("contenidos_10").innerHTML = "";
			document.getElementById("contenidos_11").innerHTML = "";
		}

		if (document.getElementById("cocina").checked == false && 
			document.getElementById("otros").checked == true ){

			document.getElementById("contenidos_1").innerHTML = contenido_1;
			document.getElementById("contenidos_2").innerHTML = contenido_2;
			document.getElementById("contenidos_3").innerHTML = contenido_8;
			document.getElementById("contenidos_4").innerHTML = "";
			document.getElementById("contenidos_5").innerHTML = "";
			document.getElementById("contenidos_6").innerHTML = "";
			document.getElementById("contenidos_7").innerHTML = "";
			document.getElementById("contenidos_8").innerHTML = "";
			document.getElementById("contenidos_9").innerHTML = "";
			document.getElementById("contenidos_10").innerHTML = "";
			document.getElementById("contenidos_11").innerHTML = "";
		}

	}
}