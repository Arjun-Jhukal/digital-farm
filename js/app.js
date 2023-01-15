// pre register
var options = document.querySelectorAll(".options_details");
var radioOptions = document.querySelectorAll(".radio_options");
const role = ["Farmer", "Consumer", "Vendor"];
const chooseProfession = document.getElementById("choose-profession");

for (i = 0; i < radioOptions.length; i++) {
  radioOptions[i].addEventListener("click", activeOption);
}
function activeOption() {
  for (i = 0; i < radioOptions.length; i++) {
    if (radioOptions[i].checked) {
      options[i].classList.add("active");
      var profession = document.getElementById("profession");
      profession.innerHTML = role[i];

      chooseProfession.disabled = false;
    } else {
      options[i].classList.remove("active");
      chooseProfession.disabled = true;
    }
  }
}

// Mobile Menu
var burgerMenu = document.querySelector(".burger_menu");
var nav = document.querySelector(".nav");
var navItems = document.querySelector(".nav_items");

var closeMenu = document.querySelector(".close_nav");

burgerMenu.addEventListener("click", showMenu);

closeMenu.addEventListener("click", closeNav);

function showMenu() {
  nav.classList.add("active");
  navItems.classList.add("active");
}
function closeNav() {
  nav.classList.remove("active");
  navItems.classList.remove("active");
}

// Offcanvas Cart

var cart = document.querySelector(".cart");
var offCanvasCart = document.querySelector(".cart_wrapper");
var closeCart = document.getElementById("close_cart");

// Add or remove Cart items

// show Cart function
cart.addEventListener("click", (showOffCanvasCart) => {
  offCanvasCart.classList.add("active");
});

// Close Cart Function
closeCart.addEventListener("click", (hideOffCanvasCart) => {
  offCanvasCart.classList.remove("active");
});
