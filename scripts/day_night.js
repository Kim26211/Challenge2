
function updateColor() {
	  var 
	    hr = (new Date()).getHours(),
	    body = document.body,
	    bstyle = body.style,    
	    document.getElementById('header-items').style.background = color;
	    /*hello = document.querySelector(".header-items");*/    
	  if (hr >= 6 || < 12) {
	    bstyle.backgroundColor = #FFD9B9;
	    bstyle.color = "white";
	    /*hello.innerText = "Goedemorgen!";*/
	  } else if (hour >= 12 || hour < 18) {
	    bstyle.backgroundColor = #C7EBE3;
	    bstyle.color = "white";
	    /*hello.innerText ="Goedemiddag!";*/
	  }
	  	else if (hour >= 18 || hour < 0) {
	    bstyle.backgroundColor = #A4AEEB;
	    bstyle.color = "white";
	    /*hello.innerText ="Goedenavond!";*/
	  }
	   else {
	    bstyle.backgroundColor = #001340;
	    bstyle.color = "white";
	    /*hello.innerText = "Goedenacht!";*/
	  } 
	}

	setInterval(updateColor, 1000 * 60);
	updateColor();



/*var now = new Date();
var h = today.getHours()

function updateTimeOfDay(){
	document.getElementById('digital-time').innerHTML = hours;
}

function updateColors(){
	if()

}*/

/*var hour = new Date().getHours();


	function updateColors(){
		if (hour >= 12 || hour < 18){
			background-image:
			radial-gradient(circle at top right, #C7EBE3, #6EBEC9 );
		}

		else if (hour >= 18 || hour < 0){
			background-image:
			radial-gradient(circle at top right, #A4AEEB, #F3ECFA );
		}

		else if(hour >= 0 || hour < 6){
			background-image:
			radial-gradient(circle at top right, #001340, #002376 );
		}

		else {
			background-image:
			radial-gradient(circle at top right, #FFD9B9, #FFFFFF );
		}
	}*/
