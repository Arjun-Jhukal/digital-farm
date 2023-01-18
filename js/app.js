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

// Search Popup
const searchIcon = document.querySelector(".search-icon");
const searchSpace = document.querySelector(".search-wrapper");
const closeIcon = document.querySelector(".close_search");

searchIcon.addEventListener("click", showSearch);
closeIcon.addEventListener("click", closeSearch);

function showSearch() {
  searchSpace.classList.add("active");
}
function closeSearch() {
  searchSpace.classList.remove("active");
}

// Offcanvas Cart

var cart = document.querySelector(".cart");
var offCanvasCart = document.querySelector(".cart_wrapper");
var closeCart = document.getElementById("close_cart");

// show Cart function
cart.addEventListener("click", (showOffCanvasCart) => {
  offCanvasCart.classList.add("active");
});

// Close Cart Function
closeCart.addEventListener("click", (hideOffCanvasCart) => {
  offCanvasCart.classList.remove("active");
});

// Product tab
function openTab(evt, categoryName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-detail");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(categoryName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Back to top
let button = document.getElementById("back_to_top");
button.addEventListener("click", backToTop);

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// View Product
const viewIcons = document.querySelectorAll(".view_icon");
const productView = document.querySelector(".product_view");
const productViewBOx = document.querySelector(".product_view_box");
const closeQuickView = document.querySelectorAll(".close_quick_view");

viewIcons.forEach(function (e) {
  e.addEventListener("click", openModal);
});
closeQuickView.forEach(function (e) {
  e.addEventListener("click", closeModal);
});

function openModal() {
  productView.classList.add("active");
  productViewBOx.classList.add("active");
}
function closeModal() {
  productView.classList.remove("active");
  productViewBOx.classList.remove("active");
}

const increaseCart = document.querySelector(".inc");
const decreaseCart = document.querySelector(".dec");
const cartProductValue = document.querySelector(".cart_quantity");

increaseCart.addEventListener("click", increase);
function increase() {
  cartProductValue.value++;
}
decreaseCart.addEventListener("click", decrease);

function decrease() {
  cartProductValue.value--;
  if (cartProductValue.value < 0) {
    cartProductValue.value = 0;
  }
}

// Added to cart
const addCartIcons = document.querySelectorAll(".add_cart_icon");
const CartAddedMsg = document.querySelector(".mini_cart_added");
const closeMsg = document.querySelector(".close_modal");

addCartIcons.forEach(function (e) {
  e.addEventListener("click", showCartMessage);
});

closeMsg.addEventListener("click", hideMessage);

function showCartMessage() {
  CartAddedMsg.classList.add("active");
}

function hideMessage() {
  CartAddedMsg.classList.remove("active");
}

// Added to Wishlist

const addWishIcon = document.querySelectorAll(".add_wish_icon");

const wishMsg = document.querySelector(".wish_message");
const closeWishMsg = document.querySelector(".close_wish_msg");

addWishIcon.forEach(function (e) {
  e.addEventListener("click", showWishMessage);
});

closeWishMsg.addEventListener("click", hideWishMsg);

function showWishMessage() {
  wishMsg.classList.add("active");
}
function hideWishMsg() {
  wishMsg.classList.remove("active");
}

//Accordion Box
if ($(".accordion-box").length) {
  $(".accordion-box").on("click", ".acc-btn", function () {
    var outerBox = $(this).parents(".accordion-box");
    var target = $(this).parents(".accordion");

    if ($(this).hasClass("active") !== true) {
      $(outerBox).find(".accordion .acc-btn").removeClass("active ");
    }

    if ($(this).next(".acc-content").is(":visible")) {
      return false;
    } else {
      $(this).addClass("active");
      $(outerBox).children(".accordion").removeClass("active-block");
      $(outerBox).find(".accordion").children(".acc-content").slideUp(300);
      target.addClass("active-block");
      $(this).next(".acc-content").slideDown(300);
    }
  });
}
