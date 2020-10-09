// get Elements
var navcontainer = document.getElementById("nav-container");
var homesection = document.getElementById("home-section");
var bandleft = document.getElementById("bandleft");
var bandright = document.getElementById("bandright");
var bandupper = document.getElementById("bandupper");
var downarrow = document.getElementById("downarrow");
var responsivenav = document.getElementById("responsive-nav");
var hamburger = document.getElementById("hamburger");

// Animations on specific scroll position
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll >= 300 && !bandleft.classList.contains("bandleft-movedin")){
    bandleft.classList.add("bandleft-movedin");
    bandright.classList.add("bandright-movedin");
    bandupper.classList.add("bandupper-movedin");
  }
  if (currentScroll >= 500 && !navcontainer.classList.contains("nav-container-scrolled")){
    navcontainer.classList.add("nav-container-scrolled");
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
  responsivenav.classList.toggle("responsive-nav-active");
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
    responsivenav.classList.remove("responsive-nav-active");
    hamburger.classList.remove("hamburger-toggle");
  }
});

// Typewriter effect
var TxtType = function(el, toRotate, period, font) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.font = font;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];
  var font = this.font[i];
 
  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="typewrite-wrap" style="font-family:'+font+'">'+this.txt+'</span>';

  var that = this;
  var delta = 250 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      var font = elements[i].getAttribute('font-type');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period, JSON.parse(font));
      }
  }
};

// Display textinput-value in textbox
var textinput = document.getElementById("textinput");

textinput.addEventListener("input", function() {
  var textinputvalue = textinput.value;
  document.getElementById("textinputvalue").textContent = textinputvalue;
});