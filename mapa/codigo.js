window.onload = function(position){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(visializarPosicion,error);
	}
}

var mapa;

function visializarPosicion(position){

	var coord = new google.maps.LatLng(6.270472, -75.557458); 

	var opMapa = {
		center: coord,
		zoom: 14,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		zoomControl: false,
		fullscreenControl: false,
		streetViewControl: false,
		scaleControl: true
	};
	
	mapa = new google.maps.Map(document.getElementById("mapa"),opMapa);

	var opMarcaUser = {
		position: coord,
		title: "Tienda",
		icon: "tienda.png",
		animation: google.maps.Animation.BOUNCE,
		map: mapa
	};
	var marca = new google.maps.Marker(opMarcaUser);

	var location0dias = [
		{lat: 6.259108, lng: -75.571979},
		{lat: 6.262004, lng: -75.572355},
		{lat: 6.263767, lng: -75.571794},
		{lat: 6.264883, lng: -75.570014},
		{lat: 6.266126, lng: -75.571131},
		{lat: 6.266741, lng: -75.571373},
		{lat: 6.267808, lng: -75.571045},
		{lat: 6.281406, lng: -75.567989},
		{lat: 6.283213, lng: -75.567880},
		{lat: 6.283632, lng: -75.567517},
		{lat: 6.283630, lng: -75.566838},
		{lat: 6.284401, lng: -75.565224},
		{lat: 6.284977, lng: -75.564670},
		{lat: 6.285541, lng: -75.564884},
		{lat: 6.285898, lng: -75.564764},
		{lat: 6.286303, lng: -75.564394},
		{lat: 6.286646, lng: -75.564314},
		{lat: 6.287587, lng: -75.564518},
		{lat: 6.289408, lng: -75.563794},
		{lat: 6.289463, lng: -75.563762},
		{lat: 6.291271, lng: -75.562319},
		{lat: 6.292540, lng: -75.561928},
		{lat: 6.294156, lng: -75.560954},
		{lat: 6.295341, lng: -75.559627},
		{lat: 6.295531, lng: -75.559238},
		{lat: 6.297002, lng: -75.557915},
		{lat: 6.297490, lng: -75.557698},
		{lat: 6.298013, lng: -75.557672},
		{lat: 6.298796, lng: -75.557698},
		{lat: 6.299649, lng: -75.557346},
		{lat: 6.296399, lng: -75.552133},
		{lat: 6.295532, lng: -75.552645},
		{lat: 6.295403, lng: -75.552651},
		{lat: 6.295414, lng: -75.552232},
		{lat: 6.295320, lng: -75.552007},
		{lat: 6.295310, lng: -75.551811},
		{lat: 6.295852, lng: -75.551348},
		{lat: 6.295916, lng: -75.551225},
		{lat: 6.296108, lng: -75.551077},
		{lat: 6.296114, lng: -75.550980},
		{lat: 6.295451, lng: -75.550464},
		{lat: 6.295268, lng: -75.550045},
		{lat: 6.295119, lng: -75.549897},
		{lat: 6.294959, lng: -75.549470},
		{lat: 6.294828, lng: -75.549004},
		{lat: 6.294672, lng: -75.549089},
		{lat: 6.294416, lng: -75.549373},
		{lat: 6.294512, lng: -75.549034},
		{lat: 6.294468, lng: -75.548759},
		{lat: 6.294331, lng: -75.548560},
		{lat: 6.294346, lng: -75.548355},
		{lat: 6.294589, lng: -75.548177},
		{lat: 6.294548, lng: -75.547964},
		{lat: 6.294229, lng: -75.548084},
		{lat: 6.294069, lng: -75.547585},
		{lat: 6.294171, lng: -75.547099},
		{lat: 6.293959, lng: -75.546646},
		{lat: 6.294263, lng: -75.546557},
		{lat: 6.294227, lng: -75.546407},
		{lat: 6.294258, lng: -75.546304},
		{lat: 6.294492, lng: -75.546303},
		{lat: 6.294633, lng: -75.546042},
		{lat: 6.294270, lng: -75.545929},
		{lat: 6.293768, lng: -75.545961},
		{lat: 6.293348, lng: -75.545906},
		{lat: 6.293301, lng: -75.545622},
		{lat: 6.293221, lng: -75.545426},
		{lat: 6.293053, lng: -75.545219},
		{lat: 6.292785, lng: -75.545024},
		{lat: 6.292706, lng: -75.545047},
		{lat: 6.292454, lng: -75.545010},
		{lat: 6.292134, lng: -75.544889},
		{lat: 6.291956, lng: -75.544628},
		{lat: 6.291953, lng: -75.544327},
		{lat: 6.291872, lng: -75.544196},
		{lat: 6.291029, lng: -75.543491},
		{lat: 6.290023, lng: -75.543003},
		{lat: 6.289826, lng: -75.543111},
		{lat: 6.289766, lng: -75.543383},
		{lat: 6.289804, lng: -75.543955},
		{lat: 6.288683, lng: -75.544524},
		{lat: 6.287631, lng: -75.544209},
		{lat: 6.286674, lng: -75.544068},
		{lat: 6.285946, lng: -75.544142},
		{lat: 6.285824, lng: -75.544209},
		{lat: 6.285716, lng: -75.544020},
		{lat: 6.285560, lng: -75.543893},
		{lat: 6.284864, lng: -75.543855},
		{lat: 6.284588, lng: -75.543962},
		{lat: 6.284472, lng: -75.544117},
		{lat: 6.284321, lng: -75.544448},
		{lat: 6.284183, lng: -75.544527},
		{lat: 6.283359, lng: -75.544539},
		{lat: 6.282639, lng: -75.544477},
		{lat: 6.282378, lng: -75.544730},
		{lat: 6.282258, lng: -75.544612},
		{lat: 6.281989, lng: -75.544758},
		{lat: 6.281794, lng: -75.544732},
		{lat: 6.281523, lng: -75.544822},
		{lat: 6.281168, lng: -75.544741},
		{lat: 6.280769, lng: -75.544833},
		{lat: 6.280215, lng: -75.544967},
		{lat: 6.280027, lng: -75.545029},
		{lat: 6.279495, lng: -75.545075},
		{lat: 6.279352, lng: -75.545057},
		{lat: 6.279287, lng: -75.545109},
		{lat: 6.278864, lng: -75.545121},
		{lat: 6.278678, lng: -75.545202},
		{lat: 6.278580, lng: -75.545224},
		{lat: 6.277684, lng: -75.545219},
		{lat: 6.277491, lng: -75.545153},
		{lat: 6.276927, lng: -75.545025},
		{lat: 6.276495, lng: -75.544971},
		{lat: 6.275852, lng: -75.544819},
		{lat: 6.275574, lng: -75.544795},
		{lat: 6.275378, lng: -75.544821},
		{lat: 6.275258, lng: -75.544869},
		{lat: 6.275168, lng: -75.544656},
		{lat: 6.275113, lng: -75.544622},
		{lat: 6.274863, lng: -75.544620},
		{lat: 6.274757, lng: -75.544331},
		{lat: 6.274682, lng: -75.544231},
		{lat: 6.274578, lng: -75.544171},
		{lat: 6.274234, lng: -75.544277},
		{lat: 6.274050, lng: -75.544323},
		{lat: 6.273581, lng: -75.544331},
		{lat: 6.273144, lng: -75.544358},
		{lat: 6.272573, lng: -75.544347},
		{lat: 6.272266, lng: -75.544309},
		{lat: 6.271739, lng: -75.544423},
		{lat: 6.271666, lng: -75.544522},
		{lat: 6.271621, lng: -75.544787},
		{lat: 6.271184, lng: -75.544796},
		{lat: 6.270637, lng: -75.544796},
		{lat: 6.269932, lng: -75.544671},
		{lat: 6.269616, lng: -75.544654},
		{lat: 6.269101, lng: -75.544560},
		{lat: 6.268975, lng: -75.544823},
		{lat: 6.268549, lng: -75.544686},
		{lat: 6.268103, lng: -75.544628},
		{lat: 6.267605, lng: -75.544183},
		{lat: 6.266995, lng: -75.544321},
		{lat: 6.266849, lng: -75.544398},
		{lat: 6.266452, lng: -75.544474},
		{lat: 6.266237, lng: -75.544477},
		{lat: 6.265853, lng: -75.544319},
		{lat: 6.265620, lng: -75.544352},
		{lat: 6.265095, lng: -75.544647},
		{lat: 6.264954, lng: -75.544667},
		{lat: 6.264324, lng: -75.544434},
		{lat: 6.264206, lng: -75.544440},
		{lat: 6.263840, lng: -75.544661},
		{lat: 6.263165, lng: -75.544688},
		{lat: 6.262880, lng: -75.544693},
		{lat: 6.262517, lng: -75.544870},
		{lat: 6.262017, lng: -75.544676},
		{lat: 6.261799, lng: -75.544629},
		{lat: 6.261541, lng: -75.544647},
		{lat: 6.261642, lng: -75.544850},
		{lat: 6.262198, lng: -75.545615},
		{lat: 6.262312, lng: -75.546003},
        {lat: 6.262254, lng: -75.546548},
		{lat: 6.262065, lng: -75.546853},
		{lat: 6.261120, lng: -75.547126},
		{lat: 6.261030, lng: -75.547581},
		{lat: 6.260411, lng: -75.547505},
		{lat: 6.259657, lng: -75.547687},
		{lat: 6.259522, lng: -75.548097},
		{lat: 6.259002, lng: -75.548439},
		{lat: 6.258227, lng: -75.548915},
		{lat: 6.258017, lng: -75.548772},
		{lat: 6.257205, lng: -75.549341},
		{lat: 6.254798, lng: -75.550956},
		{lat: 6.254958, lng: -75.551412},
		{lat: 6.254273, lng: -75.551941},
		{lat: 6.253878, lng: -75.552617},
		{lat: 6.254422, lng: -75.553379},
		{lat: 6.253878, lng: -75.553798},
		{lat: 6.253463, lng: -75.554473},
		{lat: 6.249960, lng: -75.556840},
		{lat: 6.252153, lng: -75.559138},
		{lat: 6.254719, lng: -75.562193},
		{lat: 6.256997, lng: -75.565607},
		{lat: 6.257800, lng: -75.570397},
		{lat: 6.258022, lng: -75.570646},
		{lat: 6.258339, lng: -75.570658},
		{lat: 6.258631, lng: -75.571035}
	];

	var opPoligono = {
		paths: location0dias,
		strokeColor: '#d4d4d4',
		strokeWeight: 2,
		fillColor: '#a1a1a1',
		fillOpacity: 0.2,
		map: mapa
	};
	var Area = new google.maps.Polygon(opPoligono);

	Area.addListener('click',mostrarInformacion);
}

function mostrarInformacion(event){
	var contenido = "<h3>Area disponible</h3>"+
					"Si te encuentras dentro o cerca de" + "<br>" + 
					"esta area, el envío es inmediato. Sino," + "<br>" + 
					"demora máximo un día en Medellín, y" + "<br>" +
					"dos días en ciudades cercanas.";
	var opInfo = {
		content: contenido,
		position: event.latLng
	};

	informacion = new google.maps.InfoWindow(opInfo);
	informacion.open(mapa);
}


function error(){
	alert("No se pudo obtener la posición.")
}
