var navMain = document.querySelector(".main-nav");
var navButtonClose = document.querySelector(".main-nav__toggle");
var navButtonOpen = document.querySelector(".main-nav__menu");

navMain.classList.remove("main-nav--nojs");

navButtonClose.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--opened")) {
    navMain.classList.remove("main-nav--opened");
    navMain.classList.add("main-nav--closed");
  }
});

navButtonOpen.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
navMain.classList.add("main-nav--opened");
});

var popup = document.querySelector(".popup");
var openPopupButton = document.querySelector(".form__button");
var popupSuccess = popup.querySelector(".popup__success");
var popupError = popup.querySelector(".popup__error");
var closePopupSuccessButton = popup.querySelector(".popup__btn--success");
var closePopupErrorButton = popup.querySelector(".popup__btn");
var inputElementNames = [];
var inputElements = [];

var isFormDirty = false;
var isFormValid = false;

function initInputElementNames(formElement) {

var nameElement = formElement.querySelector("input[name="name"]");

  if (nameElement) {
    inputElementNames.push(nameElement.name);
    inputElements.push(nameElement);
  }

  var surnameElement = formElement.querySelector("input[name=surname]");

  if (surnameElement) {
    inputElementNames.push(surnameElement.name);
    inputElements.push(surnameElement);
  }

  var patronymicElement = formElement.querySelector("input[name=patronymic]");

  if (patronymicElement) {
    inputElementNames.push(patronymicElement.name);
    inputElements.push(patronymicElement);
  }

  var phoneElement = formElement.querySelector("input[name=phone]");

  if (phoneElement) {
    inputElementNames.push(phoneElement.name);
    inputElements.push(phoneElement);
  }

  var emailElement = formElement.querySelector("input[name=email]");

  if (emailElement) {
    inputElementNames.push(emailElement.name);
    inputElements.push(emailElement);
  }
}

function updateElemtnValidation(element) {
  if (element.value === "") {
    isFormValid = false;
    element.classList.add("form__field-error");
  }
  else {
    element.classList.remove("form__field-error");
  }
}

function initEvents(formElement) {
  formElement.addEventListener("input", function (evt) {
    if (isFormDirty && inputElementNames.entries(evt.target.name)) {
      updateFormValidation();
    }
  });

  formElement.addEventListener("submit", function (evt) {
    evt.preventDefault();

    isFormDirty = true;
    updateFormValidation();

    if (isFormValid) {
      popupSuccess.classList.add("popup__success--active");
    }
    else {
      popupError.classList.add("popup__error--active");
    }
  });

closePopupSuccessButton.addEventListener("click", function () {
  popupSuccess.classList.remove("popup__success--active");
});

closePopupErrorButton.addEventListener("click", function () {
  popupError.classList.remove("popup__error--active");
});

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popupSuccess.classList.contains("popup__success--active")) {
        popupSuccess.classList.remove("popup__success--active")
      }
      if (popupError.classList.contains("popup__error--active")) {
        popupError.classList.remove("popup__error--active")
      }
    }
  });
}

function updateFormValidation() {
  isFormValid = true;
  for (var i = 0; i < inputElements.length; i++) {
    const inputElement = inputElements[i];
    updateElemtnValidation(inputElement);
  }
}

function init() {
  var formElement = document.querySelector(".form");

  if (!formElement) {
    return;
  }

  initInputElementNames(formElement);
  initEvents(formElement);
}

init();
