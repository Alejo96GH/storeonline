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

	document.getElementById("filtrar").onclick = Filtro;
	document.getElementById("ic5").onclick = Select1;
	document.getElementById("ic6").onclick = Select2;
	document.getElementById("ic7").onclick = Select3;

	function Select1() {
		if (document.getElementById("sonido").checked == true){
			document.getElementById("sonido").checked = false;
		}
		else {
			document.getElementById("sonido").checked = true;
		}
	}

	function Select2() {
		if (document.getElementById("video").checked == true){
			document.getElementById("video").checked = false;
		}
		else {
			document.getElementById("video").checked = true;
		}
	}

	function Select3() {
		if (document.getElementById("camara").checked == true){
			document.getElementById("camara").checked = false;
		}
		else {
			document.getElementById("camara").checked = true;
		}
	}

	function Filtro() {
		if (document.getElementById("sonido").checked  == true && 
			document.getElementById("video").checked == true &&
			document.getElementById("camara").checked == true){

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
		}

		if (document.getElementById("sonido").checked  == false && 
			document.getElementById("video").checked == false &&
			document.getElementById("camara").checked == false){

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
		}

		if (document.getElementById("sonido").checked  == true && 
			document.getElementById("video").checked == false &&
			document.getElementById("camara").checked == false){

			document.getElementById("contenidos_1").innerHTML = contenido_1;
			document.getElementById("contenidos_2").innerHTML = contenido_2;
			document.getElementById("contenidos_3").innerHTML = contenido_3;
			document.getElementById("contenidos_4").innerHTML = contenido_4;
			document.getElementById("contenidos_5").innerHTML = "";
			document.getElementById("contenidos_6").innerHTML = "";
			document.getElementById("contenidos_7").innerHTML = "";
			document.getElementById("contenidos_8").innerHTML = "";
			document.getElementById("contenidos_9").innerHTML = "";
			document.getElementById("contenidos_10").innerHTML = "";
		}

		if (document.getElementById("sonido").checked  == true && 
			document.getElementById("video").checked == true &&
			document.getElementById("camara").checked == false){

			document.getElementById("contenidos_1").innerHTML = contenido_1;
			document.getElementById("contenidos_2").innerHTML = contenido_2;
			document.getElementById("contenidos_3").innerHTML = contenido_3;
			document.getElementById("contenidos_4").innerHTML = contenido_4;
			document.getElementById("contenidos_5").innerHTML = contenido_5;
			document.getElementById("contenidos_6").innerHTML = contenido_6;
			document.getElementById("contenidos_7").innerHTML = contenido_8;
			document.getElementById("contenidos_8").innerHTML = "";
			document.getElementById("contenidos_9").innerHTML = "";
			document.getElementById("contenidos_10").innerHTML = "";
		}

		if (document.getElementById("sonido").checked  == true && 
			document.getElementById("video").checked == false &&
			document.getElementById("camara").checked == true){

			document.getElementById("contenidos_1").innerHTML = contenido_1;
			document.getElementById("contenidos_2").innerHTML = contenido_2;
			document.getElementById("contenidos_3").innerHTML = contenido_3;
			document.getElementById("contenidos_4").innerHTML = contenido_4;
			document.getElementById("contenidos_5").innerHTML = contenido_7;
			document.getElementById("contenidos_6").innerHTML = contenido_9;
			document.getElementById("contenidos_7").innerHTML = contenido_10;
			document.getElementById("contenidos_8").innerHTML = "";
			document.getElementById("contenidos_9").innerHTML = "";
			document.getElementById("contenidos_10").innerHTML = "";
		}

		if (document.getElementById("sonido").checked  == false && 
			document.getElementById("video").checked == true &&
			document.getElementById("camara").checked == false){

			document.getElementById("contenidos_1").innerHTML = contenido_5;
			document.getElementById("contenidos_2").innerHTML = contenido_6;
			document.getElementById("contenidos_3").innerHTML = contenido_8;
			document.getElementById("contenidos_4").innerHTML = "";
			document.getElementById("contenidos_5").innerHTML = "";
			document.getElementById("contenidos_6").innerHTML = "";
			document.getElementById("contenidos_7").innerHTML = "";
			document.getElementById("contenidos_8").innerHTML = "";
			document.getElementById("contenidos_9").innerHTML = "";
			document.getElementById("contenidos_10").innerHTML = "";
		}

		if (document.getElementById("sonido").checked  == false && 
			document.getElementById("video").checked == false &&
			document.getElementById("camara").checked == true){

			document.getElementById("contenidos_1").innerHTML = contenido_7;
			document.getElementById("contenidos_2").innerHTML = contenido_9;
			document.getElementById("contenidos_3").innerHTML = contenido_10;
			document.getElementById("contenidos_4").innerHTML = "";
			document.getElementById("contenidos_5").innerHTML = "";
			document.getElementById("contenidos_6").innerHTML = "";
			document.getElementById("contenidos_7").innerHTML = "";
			document.getElementById("contenidos_8").innerHTML = "";
			document.getElementById("contenidos_9").innerHTML = "";
			document.getElementById("contenidos_10").innerHTML = "";
		}

		if (document.getElementById("sonido").checked  == false && 
			document.getElementById("video").checked == true &&
			document.getElementById("camara").checked == true){

			document.getElementById("contenidos_1").innerHTML = contenido_5;
			document.getElementById("contenidos_2").innerHTML = contenido_6;
			document.getElementById("contenidos_3").innerHTML = contenido_7;
			document.getElementById("contenidos_4").innerHTML = contenido_8;
			document.getElementById("contenidos_5").innerHTML = contenido_9;
			document.getElementById("contenidos_6").innerHTML = contenido_10;
			document.getElementById("contenidos_7").innerHTML = "";
			document.getElementById("contenidos_8").innerHTML = "";
			document.getElementById("contenidos_9").innerHTML = "";
			document.getElementById("contenidos_10").innerHTML = "";
		}
	}
}