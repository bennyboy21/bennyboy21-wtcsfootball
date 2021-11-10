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
    document.getElementById("Coaches-Button").style.animation = "closeCoachesButton .60s forwards .80s ease-in-out";
    document.getElementById("instagram-Image").style.animation = "closeInstagramLogo .60s forwards 80s ease-in-out";
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

        if(counter > 19 && counter < 21) {
            window.location = "Players.html";
        }
    }, 100)
})

document.getElementById("Games-Button-Holder").addEventListener("click", function() {
    document.getElementById("Players-Button").style.animation = "closePlayersButton .60s forwards ease-in-out";
    document.getElementById("Games-Button").style.animation = "closeGamesButton .60s forwards ease-in-out";
    document.getElementById("Home-Button").style.animation = "closeHomeButton .60s forwards ease-in-out";
    document.getElementById("instagram-Image").style.animation = "closeInstagramLogo .60s forwards ease-in-out";
    document.getElementById("Coaches-Button").style.animation = "closeCoachesButton .60s forwards ease-in-out";
    document.getElementById("change-Pages").style.animation = "openPage 1s forwards 1s ease-in-out";

    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 19 && counter < 21) {
            window.location = "Games.html";
        }
    }, 100)
})

document.getElementById("Home-Button-Holder").addEventListener("click", function() {
    document.getElementById("menu-Page").style.animation = "closeMenuPage .75s forwards ease-in-out";
    document.getElementById("Players-Button").style.animation = "closePlayersButton .60s forwards .80s ease-in-out";
    document.getElementById("Games-Button").style.animation = "closeGamesButton .60s forwards .80s ease-in-out";
    document.getElementById("Home-Button").style.animation = "closeHomeButton .60s forwards .80s ease-in-out";
    document.getElementById("Coaches-Button").style.animation = "closeCoachesButton .60s forwards .80s ease-in-out";
    document.getElementById("instagram-Image").style.animation = "closeInstagramLogo .60s forwards 80s ease-in-out";
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

        if(counter > 19 && counter < 21) {
            window.location = "Coaches.html";
        }
    }, 100)
})

document.getElementById("instagram-Image-Holder").addEventListener("click", function() {
    window.location = "https://www.instagram.com/wtcsfootball/";
})

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
					// trigger animation by adding a css class
					.setClassToggle("#top-Bar", "fadeTopBar")
					.addTo(controller);


var scene1 = new ScrollMagic.Scene({triggerElement: "#trigger2"})
					// trigger animation by adding a css class
					.setClassToggle("#up-Coming-Games-Text", "fadeUpComingGames")
					.addTo(controller);


var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger2"})
					// trigger animation by adding a css class
					.setClassToggle("#up-Coming-Game-One-Holder", "fadeUpComingGames")
					.addTo(controller);

var scene3 = new ScrollMagic.Scene({triggerElement: "#trigger2"})
					// trigger animation by adding a css class
					.setClassToggle("#Teams-Playing-Game-One", "fadeUpComingGames")
					.addTo(controller);


var scene4 = new ScrollMagic.Scene({triggerElement: "#trigger2"})
					// trigger animation by adding a css class
					.setClassToggle("#Game-One-Time", "fadeUpComingGames")
					.addTo(controller);

var scene5 = new ScrollMagic.Scene({triggerElement: "#trigger2"})
					// trigger animation by adding a css class
					.setClassToggle("#up-Coming-Game-Two-Holder", "fadeUpComingGames")
					.addTo(controller);

var scene6 = new ScrollMagic.Scene({triggerElement: "#trigger2"})
					// trigger animation by adding a css class
					.setClassToggle("#Teams-Playing-Game-Two", "fadeUpComingGames")
					.addTo(controller);

var scene7 = new ScrollMagic.Scene({triggerElement: "#trigger2"})
					// trigger animation by adding a css class
					.setClassToggle("#Game-Two-Time", "fadeUpComingGames")
					.addTo(controller);



var scene8 = new ScrollMagic.Scene({triggerElement: "#trigger3"})
					// trigger animation by adding a css class
					.setClassToggle("#bottom-Bar", "fadeBottomBar")
					.addTo(controller);