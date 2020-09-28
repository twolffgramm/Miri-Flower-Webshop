
var navbar = document.getElementById("navbar");
var homesection = document.getElementById("home-section");
var bandleft = document.getElementById("bandleft");
var bandright = document.getElementById("bandright");
var downarrow = document.getElementById("downarrow");

const scrolled = "nav-container-scrolled";
const homescrolled = "home-scrolled";
const home = "home";
const moveinleft = "bandleft-movedin";
const moveinright = "bandright-movedin";
const removearrow = "downarrow-scrolled";


if( document.refreshForm.visited.value == "" )
	{
		document.refreshForm.visited.value = "1";
	}
	else
	{
    window.scrollTo(0, 0);
	}

window.addEventListener("scroll", () => {

  const currentScroll = window.pageYOffset;

  if (currentScroll >= 300 && !bandleft.classList.contains(moveinleft)){
    bandleft.classList.add(moveinleft);
    bandright.classList.add(moveinright);
  }
  if (currentScroll >= 500 && !navbar.classList.contains(scrolled)){
    navbar.classList.add(scrolled);
    downarrow.classList.add(removearrow);
  }
  if (currentScroll >= 700 && !homesection.classList.contains(homescrolled)){
    homesection.classList.remove(home)
    homesection.classList.add(homescrolled); 
  }
  
  console.log(currentScroll);
});


downarrow.addEventListener("click", () => {
  window.scrollTo(0, 700);
  downarrow.remove();
})
