document.getElementById("back-Image").addEventListener("click", function() {
    document.getElementById("change-Pages").style.animation= "goBackToGamesPages 1s forwards ease-in-out";

	var counter = 0;
	setInterval(function() {
		counter++;

		if(counter > 0 && counter < 2) {
			window.location = "Games.html"
		}
	}, 1000)
})

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
					// trigger animation by adding a css class
					.setClassToggle("#top-Bar", "fadeTopBar")
					.addTo(controller);