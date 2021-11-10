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
    document.getElementById("instagram-Image").style.animation = "closeInstagramLogo .60s forwards .80s ease-in-out";
})

document.getElementById("Players-Button-Holder").addEventListener("click", function() {
    document.getElementById("menu-Page").style.animation = "closeMenuPage .75s forwards ease-in-out";
    document.getElementById("Players-Button").style.animation = "closePlayersButton .60s forwards .80s ease-in-out";
    document.getElementById("Games-Button").style.animation = "closeGamesButton .60s forwards .80s ease-in-out";
    document.getElementById("Home-Button").style.animation = "closeHomeButton .60s forwards .80s ease-in-out";
    document.getElementById("Coaches-Button").style.animation = "closeCoachesButton .60s forwards .80s ease-in-out";
    document.getElementById("instagram-Image").style.animation = "closeInstagramLogo .60s forwards 80s ease-in-out";
})

document.getElementById("Games-Button-Holder").addEventListener("click", function() {
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
            window.location = "Games.html";
        }
    }, 100)
})

document.getElementById("Home-Button-Holder").addEventListener("click", function() {
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
            window.location = "index.html";
        }
    }, 100)
})

document.getElementById("Coaches-Button-Holder").addEventListener("click", function() {
    document.getElementById("Players-Button").style.animation = "closePlayersButton .60s forwards ease-in-out";
    document.getElementById("Games-Button").style.animation = "closeGamesButton .60s forwards ease-in-out";
    document.getElementById("Home-Button").style.animation = "closeHomeButton .60s forwards ease-in-out";
	document.getElementById("Coaches-Button").style.animation = "closeCoachesButton .60s forwards ease-in-out";
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





document.getElementById("Player-One-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Issaq-Tariqi.html"
        }
    }, 1000)
})

document.getElementById("Player-Two-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Pollard-Tynes-Tyresse.html"
        }
    }, 1000)
})

document.getElementById("Player-Three-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Muhammad-Muhiadin.html"
        }
    }, 1000)
})

document.getElementById("Player-65-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Weston-Horvath.html"
        }
    }, 1000)
})

document.getElementById("Player-Four-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Max-Aus.html"
        }
    }, 1000)
})

document.getElementById("Player-Five-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Austin-Stremble.html"
        }
    }, 1000)
})

document.getElementById("Player-Six-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Khalin-Bonk.html"
        }
    }, 1000)
})

document.getElementById("Player-Seven-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Justin-Moniz.html"
        }
    }, 1000)
})

document.getElementById("Player-Eight-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Chadley-Charles.html"
        }
    }, 1000)
})

document.getElementById("Player-Nine-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Nick-Cote.html"
        }
    }, 1000)
})

document.getElementById("Player-Ten-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Tevon-Edwards.html"
        }
    }, 1000)
})

document.getElementById("Player-Eleven-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Nazeem-Richardson.html"
        }
    }, 1000)
})

document.getElementById("Player-12-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "John-Bratkowski.html"
        }
    }, 1000)
})

document.getElementById("Player-13-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Jackson-Galanyk.html"
        }
    }, 1000)
})

document.getElementById("Player-14-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Isaiah-Cordner.html"
        }
    }, 1000)
})






document.getElementById("Player-15-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Luca-Thomas.html"
        }
    }, 1000)
})

document.getElementById("Player-16-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Oliver-Willer.html"
        }
    }, 1000)
})

document.getElementById("Player-64-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Oskar-McMillan.html"
        }
    }, 1000)
})

document.getElementById("Player-17-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Max-Larouche.html"
        }
    }, 1000)
})

document.getElementById("Player-18-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Charlie-Cote.html"
        }
    }, 1000)
})

document.getElementById("Player-19-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Shane-Mullett.html"
        }
    }, 1000)
})

document.getElementById("Player-20-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Isaiah-Kinglocke.html"
        }
    }, 1000)
})

document.getElementById("Player-21-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Xavier-Linares-Aquino.html"
        }
    }, 1000)
})

document.getElementById("Player-22-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Musa-Kamara.html"
        }
    }, 1000)
})

document.getElementById("Player-23-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Geoffrey-Stevens.html"
        }
    }, 1000)
})

document.getElementById("Player-24-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Selwyn-Juguilon.html"
        }
    }, 1000)
})

document.getElementById("Player-25-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Emmett-Johns.html"
        }
    }, 1000)
})

document.getElementById("Player-26-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Alexander-Bannister.html"
        }
    }, 1000)
})

document.getElementById("Player-27-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "James-Jones.html"
        }
    }, 1000)
})

document.getElementById("Player-28-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Ami-Granic.html"
        }
    }, 1000)
})

document.getElementById("Player-29-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Jaxon-Doctorow.html"
        }
    }, 1000)
})

document.getElementById("Player-30-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Andrew-Carpenter.html"
        }
    }, 1000)
})

document.getElementById("Player-31-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Mohammed-Abukar.html"
        }
    }, 1000)
})

document.getElementById("Player-32-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Jonathan-Carrillo.html"
        }
    }, 1000)
})

document.getElementById("Player-33-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Adam-Tremblay.html"
        }
    }, 1000)
})

document.getElementById("Player-34-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Nigel-McLean.html"
        }
    }, 1000)
})

document.getElementById("Player-35-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Logan-Almeida.html"
        }
    }, 1000)
})

document.getElementById("Player-36-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Ethan-Powderley.html"
        }
    }, 1000)
})

document.getElementById("Player-37-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Quinn-Oliver.html"
        }
    }, 1000)
})

document.getElementById("Player-38-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Ben-Burnell.html"
        }
    }, 1000)
})

document.getElementById("Player-39-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Ivan-Molnar.html"
        }
    }, 1000)
})

document.getElementById("Player-40-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Richard-Evans.html"
        }
    }, 1000)
})

document.getElementById("Player-63-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "George-Kenzie.html"
        }
    }, 1000)
})

document.getElementById("Player-41-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Delfin-Guerzon.html"
        }
    }, 1000)
})

document.getElementById("Player-42-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Hugo-Javorik.html"
        }
    }, 1000)
})


document.getElementById("Player-43-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Joshua-Garcia.html"
        }
    }, 1000)
})

document.getElementById("Player-44-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Scott-Whitman.html"
        }
    }, 1000)
})

document.getElementById("Player-45-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Zane-Brosseau.html"
        }
    }, 1000)
})


document.getElementById("Player-46-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Hayden-McIsaac.html"
        }
    }, 1000)
})

document.getElementById("Player-47-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Isabella-Mastoropoulos.html"
        }
    }, 1000)
})

document.getElementById("Player-48-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Nick-Monroy.html"
        }
    }, 1000)
})

document.getElementById("Player-49-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Booker-Robinson.html"
        }
    }, 1000)
})

document.getElementById("Player-50-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Massimo-Buono.html"
        }
    }, 1000)
})

document.getElementById("Player-51-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Kai-Gagnon.html"
        }
    }, 1000)
})

document.getElementById("Player-52-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Ben-Currie.html"
        }
    }, 1000)
})

document.getElementById("Player-53-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Imisi-Akenwomi.html"
        }
    }, 1000)
})

document.getElementById("Player-54-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages-Two").style.animation = "OpenPlayerProfile 1s forwards ease-in-out";
    
    var counter = 0;
    setInterval(function() {
        counter++;

        if(counter > 0 && counter < 2) {
            window.location = "Julian-Tiqui.html"
        }
    }, 1000)
})



















var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
					// trigger animation by adding a css class
					.setClassToggle("#top-Bar", "fadeTopBar")
					.addTo(controller);




