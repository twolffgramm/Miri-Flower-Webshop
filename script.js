// get Elements
var navbar = document.getElementById("navbar");
var homesection = document.getElementById("home-section");
var bandleft = document.getElementById("bandleft");
var bandright = document.getElementById("bandright");
var bandupper = document.getElementById("bandupper");
var downarrow = document.getElementById("downarrow");
var mobilenav = document.getElementById("mobile-nav");
var hamburger = document.getElementById("hamburger");

// Animations on specific scroll position
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll >= 300 && !bandleft.classList.contains("bandleft-movedin")){
    bandleft.classList.add("bandleft-movedin");
    bandright.classList.add("bandright-movedin");
    bandupper.classList.add("bandupper-movedin");
  }
  if (currentScroll >= 500 && !navbar.classList.contains("nav-container-scrolled")){
    navbar.classList.add("nav-container-scrolled");
    downarrow.classList.add("downarrow-scrolled");
  }
  if (currentScroll >= 700 && !homesection.classList.contains("home-scrolled")){
    homesection.classList.remove("home")
    homesection.classList.add("home-scrolled"); 
  }
});

// Arrowclick
downarrow.addEventListener("click", () => {
  window.scrollTo(0, 700);
  downarrow.remove();
})

// mobile menu
hamburger.addEventListener("click", () => {
  mobilenav.classList.toggle("mobile-nav-active");
  hamburger.classList.toggle("hamburger-toggle");
})

// collapse mobile menu on click outside navbar
document.body.addEventListener("click",function(e) {
  if (!e.target.classList.contains("navbar") && 
  e.target.id != "logo" && 
  !e.target.classList.contains("line1") && 
  !e.target.classList.contains("line2") && 
  !e.target.classList.contains("line3") && 
  !e.target.classList.contains("hamburger") && 
  hamburger.classList.contains("hamburger-toggle")){
    mobilenav.classList.remove("mobile-nav-active");
    hamburger.classList.remove("hamburger-toggle");
  }
});

