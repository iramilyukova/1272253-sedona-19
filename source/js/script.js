  var navMain = document.querySelector(".main-nav");
  var navButtonClose = document.querySelector(".main-nav__toggle");
  var navButtonOpen = document.querySelector(".main-nav__menu");

  navMain.classList.remove("main-nav--nojs");

  navButtonClose.addEventListener("click", function() {
    if (navMain.classList.contains("main-nav--opened")) {
      navMain.classList.remove("main-nav--opened");
      navMain.classList.add("main-nav--closed");
    }
  });
  navButtonOpen.addEventListener("click", function() {
    if (navMain.classList.contains("main-nav--closed")) {
      navMain.classList.remove("main-nav--closed");
      navMain.classList.add("main-nav--opened");
    }
  });
