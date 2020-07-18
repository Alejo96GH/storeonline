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
	contenido_12 = document.getElementById("contenidos_12").innerHTML;

	document.getElementById("filtrar").onclick = Filtro;
	document.getElementById("ic1").onclick = Select1;
	document.getElementById("ic2").onclick = Select2;
	document.getElementById("ic3").onclick = Select3;
	document.getElementById("ic4").onclick = Select4;

	function Select1() {
		if (document.getElementById("camisa").checked == true){
			document.getElementById("camisa").checked = false;
		}
		else {
			document.getElementById("camisa").checked = true;
		}
	}

	function Select2() {
		if (document.getElementById("chaqueta").checked == true){
			document.getElementById("chaqueta").checked = false;
		}
		else {
			document.getElementById("chaqueta").checked = true;
		}
	}

	function Select3() {
		if (document.getElementById("pantalon").checked == true){
			document.getElementById("pantalon").checked = false;
		}
		else {
			document.getElementById("pantalon").checked = true;
		}
	}

	function Select4() {
		if (document.getElementById("zapatos").checked == true){
			document.getElementById("zapatos").checked = false;
		}
		else {
			document.getElementById("zapatos").checked = true;
		}
	}

	function Filtro() {
		if (document.getElementById("camisa").checked   == true && 
			document.getElementById("chaqueta").checked == true &&
			document.getElementById("pantalon").checked == true &&  
			document.getElementById("zapatos").checked  == true ){

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
			document.getElementById("contenidos_12").innerHTML = contenido_12;
		}

		if (document.getElementById("camisa").checked   == false && 
			document.getElementById("chaqueta").checked == false &&
			document.getElementById("pantalon").checked == false &&  
			document.getElementById("zapatos").checked  == false ){

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
			document.getElementById("contenidos_12").innerHTML = "";

		}

		if (document.getElementById("camisa").checked   == true && 
			document.getElementById("chaqueta").checked == false &&
			document.getElementById("pantalon").checked == false &&  
			document.getElementById("zapatos").checked  == false ){

			document.getElementById("contenidos_1").innerHTML = contenido_1;
			document.getElementById("contenidos_2").innerHTML = contenido_5;
			document.getElementById("contenidos_3").innerHTML = contenido_8;
			document.getElementById("contenidos_4").innerHTML = contenido_10;
			document.getElementById("contenidos_5").innerHTML = "";
			document.getElementById("contenidos_6").innerHTML = "";
			document.getElementById("contenidos_7").innerHTML = "";
			document.getElementById("contenidos_8").innerHTML = "";
			document.getElementById("contenidos_9").innerHTML = "";
			document.getElementById("contenidos_10").innerHTML = "";
			document.getElementById("contenidos_11").innerHTML = "";
			document.getElementById("contenidos_12").innerHTML = "";
		}

		if (document.getElementById("camisa").checked   == true && 
			document.getElementById("chaqueta").checked == true &&
			document.getElementById("pantalon").checked == false &&  
			document.getElementById("zapatos").checked  == false ){

			document.getElementById("contenidos_1").innerHTML = contenido_1;
			document.getElementById("contenidos_2").innerHTML = contenido_2;
			document.getElementById("contenidos_3").innerHTML = contenido_3;
			document.getElementById("contenidos_4").innerHTML = contenido_5;
			document.getElementById("contenidos_5").innerHTML = contenido_8;
			document.getElementById("contenidos_6").innerHTML = contenido_9;
			document.getElementById("contenidos_7").innerHTML = contenido_10;
			document.getElementById("contenidos_8").innerHTML = contenido_12;
			document.getElementById("contenidos_9").innerHTML = "";
			document.getElementById("contenidos_10").innerHTML = "";
			document.getElementById("contenidos_11").innerHTML = "";
			document.getElementById("contenidos_12").innerHTML = "";
		}

		if (document.getElementById("camisa").checked   == true && 
			document.getElementById("chaqueta").checked == true &&
			document.getElementById("pantalon").checked == true &&  
			document.getElementById("zapatos").checked  == false ){

			document.getElementById("contenidos_1").innerHTML = contenido_1;
			document.getElementById("contenidos_2").innerHTML = contenido_2;
			document.getElementById("contenidos_3").innerHTML = contenido_3;
			document.getElementById("contenidos_4").innerHTML = contenido_5;
			document.getElementById("contenidos_5").innerHTML = contenido_6;
			document.getElementById("contenidos_6").innerHTML = contenido_7;
			document.getElementById("contenidos_7").innerHTML = contenido_8;
			document.getElementById("contenidos_8").innerHTML = contenido_9;
			document.getElementById("contenidos_9").innerHTML = contenido_10;
			document.getElementById("contenidos_10").innerHTML = contenido_12;
			document.getElementById("contenidos_11").innerHTML = "";
			document.getElementById("contenidos_12").innerHTML = "";
		}

		if (document.getElementById("camisa").checked   == true && 
			document.getElementById("chaqueta").checked == true &&
			document.getElementById("pantalon").checked == false &&  
			document.getElementById("zapatos").checked  == true ){

			document.getElementById("contenidos_1").innerHTML = contenido_1;
			document.getElementById("contenidos_2").innerHTML = contenido_2;
			document.getElementById("contenidos_3").innerHTML = contenido_3;
			document.getElementById("contenidos_4").innerHTML = contenido_4;
			document.getElementById("contenidos_5").innerHTML = contenido_5;
			document.getElementById("contenidos_6").innerHTML = contenido_8;
			document.getElementById("contenidos_7").innerHTML = contenido_9;
			document.getElementById("contenidos_8").innerHTML = contenido_10;
			document.getElementById("contenidos_9").innerHTML = contenido_11;
			document.getElementById("contenidos_10").innerHTML = contenido_12;
			document.getElementById("contenidos_11").innerHTML = "";
			document.getElementById("contenidos_12").innerHTML = "";
		}

		if (document.getElementById("camisa").checked   == true && 
			document.getElementById("chaqueta").checked == false &&
			document.getElementById("pantalon").checked == true &&  
			document.getElementById("zapatos").checked  == false ){

			document.getElementById("contenidos_1").innerHTML = contenido_1;
			document.getElementById("contenidos_2").innerHTML = contenido_5;
			document.getElementById("contenidos_3").innerHTML = contenido_6;
			document.getElementById("contenidos_4").innerHTML = contenido_7;
			document.getElementById("contenidos_5").innerHTML = contenido_8;
			document.getElementById("contenidos_6").innerHTML = contenido_10;
			document.getElementById("contenidos_7").innerHTML = "";
			document.getElementById("contenidos_8").innerHTML = "";
			document.getElementById("contenidos_9").innerHTML = "";
			document.getElementById("contenidos_10").innerHTML = "";
			document.getElementById("contenidos_11").innerHTML = "";
			document.getElementById("contenidos_12").innerHTML = "";
		}

		if (document.getElementById("camisa").checked   == true && 
			document.getElementById("chaqueta").checked == false &&
			document.getElementById("pantalon").checked == false &&  
			document.getElementById("zapatos").checked  == true ){

			document.getElementById("contenidos_1").innerHTML = contenido_1;
			document.getElementById("contenidos_2").innerHTML = contenido_4;
			document.getElementById("contenidos_3").innerHTML = contenido_5;
			document.getElementById("contenidos_4").innerHTML = contenido_8;
			document.getElementById("contenidos_5").innerHTML = contenido_10;
			document.getElementById("contenidos_6").innerHTML = contenido_11;
			document.getElementById("contenidos_7").innerHTML = "";
			document.getElementById("contenidos_8").innerHTML = "";
			document.getElementById("contenidos_9").innerHTML = "";
			document.getElementById("contenidos_10").innerHTML = "";
			document.getElementById("contenidos_11").innerHTML = "";
			document.getElementById("contenidos_12").innerHTML = "";
		}

		if (document.getElementById("camisa").checked   == true && 
			document.getElementById("chaqueta").checked == false &&
			document.getElementById("pantalon").checked == true &&  
			document.getElementById("zapatos").checked  == true ){

			document.getElementById("contenidos_1").innerHTML = contenido_1;
			document.getElementById("contenidos_2").innerHTML = contenido_4;
			document.getElementById("contenidos_3").innerHTML = contenido_5;
			document.getElementById("contenidos_4").innerHTML = contenido_6;
			document.getElementById("contenidos_5").innerHTML = contenido_7;
			document.getElementById("contenidos_6").innerHTML = contenido_8;
			document.getElementById("contenidos_7").innerHTML = contenido_10;
			document.getElementById("contenidos_8").innerHTML = contenido_11;
			document.getElementById("contenidos_9").innerHTML = "";
			document.getElementById("contenidos_10").innerHTML = "";
			document.getElementById("contenidos_11").innerHTML = "";
			document.getElementById("contenidos_12").innerHTML = "";
		}

		if (document.getElementById("camisa").checked   == false && 
			document.getElementById("chaqueta").checked == true &&
			document.getElementById("pantalon").checked == false &&  
			document.getElementById("zapatos").checked  == false ){

			document.getElementById("contenidos_1").innerHTML = contenido_2;
			document.getElementById("contenidos_2").innerHTML = contenido_3;
			document.getElementById("contenidos_3").innerHTML = contenido_9;
			document.getElementById("contenidos_4").innerHTML = contenido_12;
			document.getElementById("contenidos_5").innerHTML = "";
			document.getElementById("contenidos_6").innerHTML = "";
			document.getElementById("contenidos_7").innerHTML = "";
			document.getElementById("contenidos_8").innerHTML = "";
			document.getElementById("contenidos_9").innerHTML = "";
			document.getElementById("contenidos_10").innerHTML = "";
			document.getElementById("contenidos_11").innerHTML = "";
			document.getElementById("contenidos_12").innerHTML = "";
		}

		if (document.getElementById("camisa").checked   == false && 
			document.getElementById("chaqueta").checked == false &&
			document.getElementById("pantalon").checked == true  &&  
			document.getElementById("zapatos").checked  == false ){

			document.getElementById("contenidos_1").innerHTML = contenido_6;
			document.getElementById("contenidos_2").innerHTML = contenido_7;
			document.getElementById("contenidos_3").innerHTML = "";
			document.getElementById("contenidos_4").innerHTML = "";
			document.getElementById("contenidos_5").innerHTML = "";
			document.getElementById("contenidos_6").innerHTML = "";
			document.getElementById("contenidos_7").innerHTML = "";
			document.getElementById("contenidos_8").innerHTML = "";
			document.getElementById("contenidos_9").innerHTML = "";
			document.getElementById("contenidos_10").innerHTML = "";
			document.getElementById("contenidos_11").innerHTML = "";
			document.getElementById("contenidos_12").innerHTML = "";
		}

		if (document.getElementById("camisa").checked   == false && 
			document.getElementById("chaqueta").checked == false &&
			document.getElementById("pantalon").checked == false  &&  
			document.getElementById("zapatos").checked  == true ){

			document.getElementById("contenidos_1").innerHTML = contenido_4;
			document.getElementById("contenidos_2").innerHTML = contenido_11;
			document.getElementById("contenidos_3").innerHTML = "";
			document.getElementById("contenidos_4").innerHTML = "";
			document.getElementById("contenidos_5").innerHTML = "";
			document.getElementById("contenidos_6").innerHTML = "";
			document.getElementById("contenidos_7").innerHTML = "";
			document.getElementById("contenidos_8").innerHTML = "";
			document.getElementById("contenidos_9").innerHTML = "";
			document.getElementById("contenidos_10").innerHTML = "";
			document.getElementById("contenidos_11").innerHTML = "";
			document.getElementById("contenidos_12").innerHTML = "";
		}

		if (document.getElementById("camisa").checked   == false && 
			document.getElementById("chaqueta").checked == true &&
			document.getElementById("pantalon").checked == true &&  
			document.getElementById("zapatos").checked  == true ){

			document.getElementById("contenidos_1").innerHTML = contenido_2;
			document.getElementById("contenidos_2").innerHTML = contenido_3;
			document.getElementById("contenidos_3").innerHTML = contenido_4;
			document.getElementById("contenidos_4").innerHTML = contenido_6;
			document.getElementById("contenidos_5").innerHTML = contenido_7;
			document.getElementById("contenidos_6").innerHTML = contenido_9;
			document.getElementById("contenidos_7").innerHTML = contenido_11;
			document.getElementById("contenidos_8").innerHTML = contenido_12;
			document.getElementById("contenidos_9").innerHTML = "";
			document.getElementById("contenidos_10").innerHTML = "";
			document.getElementById("contenidos_11").innerHTML = "";
			document.getElementById("contenidos_12").innerHTML = "";
		}

		if (document.getElementById("camisa").checked   == false && 
			document.getElementById("chaqueta").checked == false &&
			document.getElementById("pantalon").checked == true &&  
			document.getElementById("zapatos").checked  == true ){

			document.getElementById("contenidos_1").innerHTML = contenido_4;
			document.getElementById("contenidos_2").innerHTML = contenido_6;
			document.getElementById("contenidos_3").innerHTML = contenido_7;
			document.getElementById("contenidos_4").innerHTML = contenido_11;
			document.getElementById("contenidos_5").innerHTML = "";
			document.getElementById("contenidos_6").innerHTML = "";
			document.getElementById("contenidos_7").innerHTML = "";
			document.getElementById("contenidos_8").innerHTML = "";
			document.getElementById("contenidos_9").innerHTML = "";
			document.getElementById("contenidos_10").innerHTML = "";
			document.getElementById("contenidos_11").innerHTML = "";
			document.getElementById("contenidos_12").innerHTML = "";
		}

		if (document.getElementById("camisa").checked   == false && 
			document.getElementById("chaqueta").checked == true &&
			document.getElementById("pantalon").checked == false &&  
			document.getElementById("zapatos").checked  == true ){

			document.getElementById("contenidos_1").innerHTML = contenido_2;
			document.getElementById("contenidos_2").innerHTML = contenido_3;
			document.getElementById("contenidos_3").innerHTML = contenido_4;
			document.getElementById("contenidos_4").innerHTML = contenido_9;
			document.getElementById("contenidos_5").innerHTML = contenido_11;
			document.getElementById("contenidos_6").innerHTML = contenido_12;
			document.getElementById("contenidos_7").innerHTML = "";
			document.getElementById("contenidos_8").innerHTML = "";
			document.getElementById("contenidos_9").innerHTML = "";
			document.getElementById("contenidos_10").innerHTML = "";
			document.getElementById("contenidos_11").innerHTML = "";
			document.getElementById("contenidos_12").innerHTML = "";
		}

		if (document.getElementById("camisa").checked   == false && 
			document.getElementById("chaqueta").checked == true &&
			document.getElementById("pantalon").checked == true &&  
			document.getElementById("zapatos").checked  == false ){

			document.getElementById("contenidos_1").innerHTML = contenido_2;
			document.getElementById("contenidos_2").innerHTML = contenido_3;
			document.getElementById("contenidos_3").innerHTML = contenido_6;
			document.getElementById("contenidos_4").innerHTML = contenido_7;
			document.getElementById("contenidos_5").innerHTML = contenido_9;
			document.getElementById("contenidos_6").innerHTML = contenido_12;
			document.getElementById("contenidos_7").innerHTML = "";
			document.getElementById("contenidos_8").innerHTML = "";
			document.getElementById("contenidos_9").innerHTML = "";
			document.getElementById("contenidos_10").innerHTML = "";
			document.getElementById("contenidos_11").innerHTML = "";
			document.getElementById("contenidos_12").innerHTML = "";
		}

	}
}