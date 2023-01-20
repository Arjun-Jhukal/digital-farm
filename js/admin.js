// Dash menu

var dashBurger = document.querySelector(".dashboard_burger");
var burgerMenu = document.querySelector(".dash_menu");

dashBurger.addEventListener("click", showMenu);

function showMenu() {
  burgerMenu.classList.toggle("active");
}
