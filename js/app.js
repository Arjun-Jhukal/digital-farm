// pre register
var options = document.querySelectorAll(".options_details");
var radioOptions = document.querySelectorAll(".radio_options");
const role = ["Farmer", "Consumer", "Vendor"];
for (i = 0; i < radioOptions.length; i++) {
  radioOptions[i].addEventListener("click", activeOption);
}
function activeOption() {
  for (i = 0; i < radioOptions.length; i++) {
    if (radioOptions[i].checked) {
      options[i].classList.add("active");
      var profession = document.getElementById("profession");
      profession.innerHTML = role[i];
    } else {
      options[i].classList.remove("active");
    }
  }
}

// Mobile Menu
var burgerMenu = document.querySelector(".burger_menu");
var nav = document.querySelector(".nav");
var navItems = document.querySelector(".nav_items");
// var navItem = document.querySelectorAll(".nav_item");
var closeMenu = document.querySelector(".close_nav");

burgerMenu.addEventListener("click", showMenu);
closeMenu.addEventListener("click", closeNav);
function showMenu() {
  nav.classList.add("active");
  navItems.classList.add("active");
  // navItem.forEach((item) => item.classList.add("active"));
}
function closeNav() {
  nav.classList.remove("active");
  navItems.classList.remove("active");
  // navItem.forEach((item) => item.classList.remove("active"));
}
