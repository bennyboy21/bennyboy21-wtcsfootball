document.getElementById("menu-Image").addEventListener("click", function() {
    document.getElementById("menu-Page").style.animation = "showMenuPage .75s forwards ease-in-out";
    document.getElementById("Players-Button").style.animation = "showPlayersButton .60s forwards .80s ease-in-out";
    document.getElementById("Games-Button").style.animation = "showGamesButton .60s forwards 1s ease-in-out";
    document.getElementById("Home-Button").style.animation = "showHomeButton .60s forwards 1.2s ease-in-out";
	document.getElementById("Coaches-Button").style.animation = "showCoachesButton .60s forwards 1.4s ease-in-out";
    document.getElementById("instagram-Image").style.animation = "ShowInstagramLogo .60s forwards 1.6s ease-in-out";
})

document.getElementById("close-Menu-Page").addEventListener("click", function() {
    document.getElementById("menu-Page").style.animation = "closeMenuPage .75s forwards ease-in-out";
    document.getElementById("Players-Button").style.animation = "closePlayersButton .60s forwards .80s ease-in-out";
    document.getElementById("Games-Button").style.animation = "closeGamesButton .60s forwards .80s ease-in-out";
    document.getElementById("Home-Button").style.animation = "closeHomeButton .60s forwards .80s ease-in-out";
	document.getElementById("Coaches-Button").style.animation = "closeCoachesButton .60s forwards 1.4s ease-in-out";
	document.getElementById("instagram-Image").style.animation = "closeInstagramLogo .60s forwards .80s ease-in-out";
})

document.getElementById("Players-Button-Holder").addEventListener("click", function() {
    document.getElementById("Players-Button").style.animation = "closePlayersButton .60s forwards ease-in-out";
    document.getElementById("Games-Button").style.animation = "closeGamesButton .60s forwards ease-in-out";
    document.getElementById("Home-Button").style.animation = "closeHomeButton .60s forwards ease-in-out";
    document.getElementById("instagram-Image").style.animation = "closeInstagramLogo .60s forwards ease-in-out";
	document.getElementById("Coaches-Button").style.animation = "closeCoachesButton .60s forwards ease-in-out";
    document.getElementById("change-Pages").style.animation = "openPage 1s forwards 1s ease-in-out";

    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 19) {
            window.location = "Players.html";
        }
    }, 100)
})

document.getElementById("Games-Button-Holder").addEventListener("click", function() {
    document.getElementById("menu-Page").style.animation = "closeMenuPage .75s forwards ease-in-out";
    document.getElementById("Players-Button").style.animation = "closePlayersButton .60s forwards .80s ease-in-out";
    document.getElementById("Games-Button").style.animation = "closeGamesButton .60s forwards .80s ease-in-out";
    document.getElementById("Home-Button").style.animation = "closeHomeButton .60s forwards .80s ease-in-out";
    document.getElementById("Coaches-Button").style.animation = "closeCoachesButton .60s forwards .80s ease-in-out";
	document.getElementById("instagram-Image").style.animation = "closeInstagramLogo .60s forwards 80s ease-in-out";
})

document.getElementById("Home-Button-Holder").addEventListener("click", function() {
    document.getElementById("Players-Button").style.animation = "closePlayersButton .60s forwards ease-in-out";
    document.getElementById("Games-Button").style.animation = "closeGamesButton .60s forwards ease-in-out";
    document.getElementById("Home-Button").style.animation = "closeHomeButton .60s forwards ease-in-out";
    document.getElementById("instagram-Image").style.animation = "closeInstagramLogo .60s forwards ease-in-out";
	document.getElementById("Coaches-Button").style.animation = "closeCoachesButton .60s forwards ease-in-out";
    document.getElementById("change-Pages").style.animation = "openPage 1s forwards 1s ease-in-out";

    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 19) {
            window.location = "index.html";
        }
    }, 100)
})

document.getElementById("Coaches-Button-Holder").addEventListener("click", function() {
    document.getElementById("Players-Button").style.animation = "closePlayersButton .60s forwards ease-in-out";
    document.getElementById("Games-Button").style.animation = "closeGamesButton .60s forwards ease-in-out";
    document.getElementById("Home-Button").style.animation = "closeHomeButton .60s forwards ease-in-out";
	document.getElementById("Coaches-Button").style.animation = "closeCoachesButton .60s forwards ease-in-out";
	document.getElementById("instagram-Image").style.animation = "closeInstagramLogo .60s forwards ease-in-out";
    document.getElementById("change-Pages").style.animation = "openPage 1s forwards 1s ease-in-out";

    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 19) {
            window.location = "Coaches.html";
        }
    }, 100)
})

document.getElementById("instagram-Image-Holder").addEventListener("click", function() {
    window.location = "https://www.instagram.com/wtcsfootball/";
})

document.getElementById("Game-One-Played-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenWTCSABBYPARK 1s forwards ease-in-out";

    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0) {
            window.location = "WesternTech-Vs-AbbyPark.html"
        }
    }, 1000)
})

document.getElementById("Game-Two-Played-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenWTCSABBYPARK 1s forwards ease-in-out";

    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "WesternTech-Vs-Northern.html"
        }
    }, 1000)
})

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
					// trigger animation by adding a css class
					.setClassToggle("#top-Bar", "fadeTopBar")
					.addTo(controller);

