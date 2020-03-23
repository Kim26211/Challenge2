

var today = new Date();

document.getElementById('digital-time').innerHTML = today.toString();


	//document.getElementById('digital-time').innerHTML = today.getHours() + ':' + today.getMinutes();


	var dagen = new Array('Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag');
	document.getElementById('day').innerHTML = dagen[today.getDay()];

	var maanden = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');
	document.getElementById('date').innerHTML = today.getDate() + ' ' + maanden[today.getMonth()];


	document.getElementById('year').innerHTML = today.getFullYear();


function clockTime() {
    var clock = new Date(); 
	    var h = clock.getHours(); 
	    var m = clock.getMinutes(); 

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;

    var time = h + ":" + m;
	    document.getElementById("digital-time").innerText = time;
	    document.getElementById("digital-time").textContent = time;

    setTimeout(clockTime, 1000);

}
clockTime();