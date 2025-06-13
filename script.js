document.addEventListener("DOMContentLoaded", function(){
window.addEventListener("load", function () {

var fishy = document.getElementById("swimmingfish");
fishy.style.backgroundImage = "url(images/Fishy.png)";


var x = 0
var dx = 1 //horizontal speed
var amplitude = 20 //wave height
var frequency = 0.05 //wave frequency

function swim(){
  
  var maxWidth = window.innerWidth - fishy.offsetWidth;
  
  x += dx;
  if (x <= 0 || x >= maxWidth) dx = -dx;

  if (dx > 0) {
    fishy.style.transform = "scaleX(1)";
  } else {
    fishy.style.transform = "scaleX(-1)";
  }

  var centerY = window.innerHeight / 3 - fishy.offsetHeight/2; // Center of the screen vertically
  var y = centerY + amplitude * Math.sin(frequency * x);

  fishy.style.left = x + 'px';
  fishy.style.top = y + 'px';
  
  
  requestAnimationFrame(swim);
    }

swim()

});

//Linking buttons to next and previous pages//

const navMap = {
  "index.html": { next: "tackle.html", prev: null },
  "tackle.html":   { next: "locations.html", prev: "index.html" },
  "locations.html":{ next: "species.html", prev: "tackle.html" },
  "species.html":  { next: null, prev: "locations.html" }
};

// Get current page filename

const currentPage = window.location.pathname.split("/").pop();

var nextbut = document.getElementById("nextbut");
var prevbut = document.getElementById("prevbut");

if (nextbut && navMap[currentPage] && navMap[currentPage].next) {
  nextbut.addEventListener("click", function(){
    window.location.href = navMap[currentPage].next;
  });
}

if (prevbut && navMap[currentPage] && navMap[currentPage].prev) {
  prevbut.addEventListener("click", function(){
    window.location.href = navMap[currentPage].prev;
  });
}





//Drop Down Menu

var navbut = document.getElementById("navbut");
var menu = document.getElementById("navmenu");

var aligndropdown = navbut.getBoundingClientRect();
  menu.style.position = "absolute";
  menu.style.top = aligndropdown.bottom + "px"; 
  menu.style.left = aligndropdown.left + "px";

navbut.addEventListener("mouseenter", function() {
    menu.classList.remove("hidden");
});

menu.addEventListener("mouseleave", function() {
    menu.classList.add("hidden");
});

navbut.addEventListener("mouseleave", function () {
    setTimeout(function () {
        if (!menu.matches(':hover') && !navbut.matches(':hover')) {
            menu.classList.add("hidden");
        }
    }, 300);
});

menu.addEventListener("mouseleave", function () {
    setTimeout(function () {
        if (!menu.matches(':hover') && !navbut.matches(':hover')) {
            menu.classList.add("hidden");
        }
    }, 300);
});


 // Dark mode toggle for any page



  var darkModeButton = document.getElementById("dark-mode-but");
  if (darkModeButton) {
    darkModeButton.addEventListener("click", darkmode);
  }

  function darkmode() {

    document.body.classList.toggle("dark-mode-body");

    document.getElementById("navbar").classList.toggle("dark-mode-navbar");

    document.getElementById("navtitle").classList.toggle("dark-mode-navtitle");

    var fishy = document.getElementById("swimmingfish")
    if (document.body.classList.contains("dark-mode-body")) {
        fishy.style.backgroundImage = "url('images/InvFishy.png')";
        fishy.style.height = 50 + "px"; 
        fishy.style.width = 50 + "px";
    }
    else{
        fishy.style.backgroundImage = "url(images/Fishy.png)";
        fishy.style.height = 30 + "px";
        fishy.style.width = 30 + "px";

    } 

    var homepageHeader = document.getElementById("homepage_header");
    if (homepageHeader) {
      homepageHeader.classList.toggle("dark-mode-homepage-header");
    }

    document.querySelectorAll(".left_side").forEach(function(element){
      element.classList.toggle("dark-mode-left-side");
    });

    document.querySelectorAll(".right_side").forEach(function(element){
      element.classList.toggle("dark-mode-right-side");
    });

    var funFact = document.getElementById("funfact");
    if (funFact) {
      funFact.classList.toggle("dark-mode-funfact");
    }

    var equipment_element = document.getElementById("equipment");
    if (equipment_element){
      equipment_element.classList.toggle("dark-mode-equipment");
    }

    document.querySelectorAll(".container").forEach(function(element){
      element.classList.toggle("dark-mode-container");
    });

    document.querySelectorAll(".equipmenth").forEach(function(element){
      element.classList.toggle("dark-mode-equipmenth");
    });

    document.querySelectorAll(".tackle_description").forEach(function(element){
      element.classList.toggle("dark-mode-description");
    });

    var bodies_element = document.getElementById("bodies");
    if (bodies_element) {
      bodies_element.classList.toggle("dark-mode-bodies");
    }

    document.querySelectorAll(".watername").forEach(function(element){
      element.classList.toggle("dark-mode-watername");
    });

    document.querySelectorAll(".bodydescription").forEach(function(element){
      element.classList.toggle("dark-mode-bodydescription");
    });


    var speciesheader = document.getElementById("speciesheader");
    if (speciesheader) {
      speciesheader.classList.toggle("dark-mode-speciesheader");
    }


    document.querySelectorAll(".specieslocation").forEach(function(element){
      element.classList.toggle("dark-mode-specieslocation");
    });

  }


// Homepage JS


// Fun Facts Button JS
var funFacts = [
  "Fish have been on Earth for more than 500 million years.",
  "Some fish can fly (glide) others can skip along the surface and others can even climb rock.",
  "The largest fish is the whale shark, which can be over 40 feet long.",
  "Goldfish can see both infrared and ultraviolet light.",
  "Some species of fish can change their gender during their lifetime.",
  "There is a lure called the 'million dollar fishing lure', made of gold, platinum, rubies and diamonds.",
];

var funFactButton = document.getElementById("fun_fact_but");
var funFact = document.getElementById("funfact");

if (funFactButton && funFact) {
  funFactButton.addEventListener("click", function() {
    var randomIndex = Math.floor(Math.random() * funFacts.length);
    funFact.textContent = funFacts[randomIndex];
  });
}


// Tackle Page JS

 
function linebutclick() {
document.getElementById("line").innerText ="Your line is what you tie lure on to, and is what you cast and reel fish in with. ";
}
document.getElementById("linebut").addEventListener("click", linebutclick);

function sinkerbutclick() {
document.getElementById("sinker").innerText ="Sinkers help your bait sink deeper in the water.";
}
document.getElementById("sinkerbut").addEventListener("click", sinkerbutclick);

function bobberbutclick() {
document.getElementById("bobber").innerText ="Bobbers tell you when you have a bite by moving up and down when your line gets pulled.";
}
document.getElementById("bobberbut").addEventListener("click", bobberbutclick);



// Species Page JS

var bass = document.getElementById("bass");
var bassd = document.getElementById("bass-description");
bassd.style.position = "absolute";
if (bass&& bassd) {
bass.addEventListener("mouseenter", function() {
    bassd.classList.remove("hidden-bass");
});
bass.addEventListener("mouseleave", function() {
    bassd.classList.add("hidden-bass");
});
}


var pike = document.getElementById("pike");
var piked = document.getElementById("pike-description");
piked.style.position = "absolute";
if (pike && piked) {
pike.addEventListener("mouseenter", function() {
    piked.classList.remove("hidden-pike");
});
pike.addEventListener("mouseleave", function() {
    piked.classList.add("hidden-pike");
});
}


var carp = document.getElementById("carp");
var carpd = document.getElementById("carp-description");
carpd.style.position = "absolute";
if (carp && carpd) {
carp.addEventListener("mouseenter", function() {
    carpd.classList.remove("hidden-carp");
});
carp.addEventListener("mouseleave", function() {
    carpd.classList.add("hidden-carp");
});
}


var sunfish = document.getElementById("sunfish");
var sunfishd = document.getElementById("sunfish-description");
sunfishd.style.position = "absolute";
if (sunfish && sunfishd) {
sunfish.addEventListener("mouseenter", function() {
    sunfishd.classList.remove("hidden-sunfish");
});
sunfish.addEventListener("mouseleave", function() {
    sunfishd.classList.add("hidden-sunfish");
});
}


var crappie = document.getElementById("crappie");
var crappied = document.getElementById("crappie-description");
crappied.style.position = "absolute";
if (crappie && crappied) {
crappie.addEventListener("mouseenter", function() {
    crappied.classList.remove("hidden-crappie");
});
crappie.addEventListener("mouseleave", function() {
    crappied.classList.add("hidden-crappie");
});
}


var catfish = document.getElementById("catfish");
var catfishd = document.getElementById("catfish-description");
catfishd.style.position = "absolute";
if (catfish && catfishd) {
catfish.addEventListener("mouseenter", function() {
    catfishd.classList.remove("hidden-catfish");
});
catfish.addEventListener("mouseleave", function() {
    catfishd.classList.add("hidden-catfish");
});
}


var shark = document.getElementById("shark");
var sharkd = document.getElementById("shark-description");
sharkd.style.position = "absolute";
if (shark && sharkd) {
shark.addEventListener("mouseenter", function() {
    sharkd.classList.remove("hidden-shark");
});
shark.addEventListener("mouseleave", function() {
    sharkd.classList.add("hidden-shark");
});
}


var tuna = document.getElementById("tuna");
var tunad = document.getElementById("tuna-description");
if (tuna && tunad) {
tunad.style.position = "absolute";
tuna.addEventListener("mouseenter", function() {
    tunad.classList.remove("hidden-tuna");
});
tuna.addEventListener("mouseleave", function() {
    tunad.classList.add("hidden-tuna");
});
}


var striper = document.getElementById("striper");
var striperd = document.getElementById("striper-description");
striperd.style.position = "absolute";
if (striper && striperd) {
striper.addEventListener("mouseenter", function() {
    striperd.classList.remove("hidden-striper");
});
striper.addEventListener("mouseleave", function() {
    striperd.classList.add("hidden-striper");
});
}


var flounder = document.getElementById("flounder");
var flounderd = document.getElementById("flounder-description");
flounderd.style.position = "absolute";
if (flounder && flounderd) {
flounder.addEventListener("mouseenter", function() {
    flounderd.classList.remove("hidden-flounder");
});
flounder.addEventListener("mouseleave", function() {
    flounderd.classList.add("hidden-flounder");
});
}


var swordfish = document.getElementById("swordfish");
var swordfishd = document.getElementById("swordfish-description");
swordfishd.style.position = "absolute";
if (swordfish && swordfishd) {
swordfish.addEventListener("mouseenter", function() {
    swordfishd.classList.remove("hidden-swordfish");
});
swordfish.addEventListener("mouseleave", function() {
    swordfishd.classList.add("hidden-swordfish");
});
}


var mahi = document.getElementById("mahi");
var mahid = document.getElementById("mahi-description");
mahid.style.position = "absolute";
if (mahi && mahid) {
mahi.addEventListener("mouseenter", function() {
    mahid.classList.remove("hidden-mahi");
});
mahi.addEventListener("mouseleave", function() {
    mahid.classList.add("hidden-mahi");
});
}

});
