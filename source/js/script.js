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
  }
});

var popupSuccess = document.querySelector(".popup__success");
var popupError = document.querySelector(".popup__error");

var isFormDirty = false;
var isFormValid = false;

function getInputElements(formElement) {
  var inputElements = [];

  var nameElement = formElement.querySelector("input[name=name]");

  if (nameElement) {
    inputElements.push(nameElement);
  }

  var surnameElement = formElement.querySelector("input[name=surname]");

  if (surnameElement) {
    inputElements.push(surnameElement);
  }

  var patronymicElement = formElement.querySelector("input[name=patronymic]");

  if (patronymicElement) {
    inputElements.push(patronymicElement);
  }

  var phoneElement = formElement.querySelector("input[name=phone]");

  if (phoneElement) {
    inputElements.push(phoneElement);
  }

  var emailElement = formElement.querySelector("input[name=email]");

  if (emailElement) {
    inputElements.push(emailElement);
  }

  return inputElements;
}

function updateFormValidation(inputElements) {
  isFormValid = true;
  for (var i = 0; i < inputElements.length; i++) {
    var inputElement = inputElements[i];
    updateElemtnValidation(inputElement);
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

function initFormEvents(formElement, inputElements) {
  var inputElements = getInputElements(formElement);

  var inputElementNames = [];

  for (var i = 0; i < inputElements.length; i++) {
    var inputElement = inputElements[i];
    inputElementNames.push(inputElement.name);
  }

  formElement.addEventListener("input", function (evt) {
    if (isFormDirty && inputElementNames.entries(evt.target.name)) {
      updateFormValidation(inputElements);
    }
  });

  var formButton = formElement.querySelector(".form__button");

  formButton.addEventListener("click", function (evt) {
    evt.preventDefault();

    isFormDirty = true;
    updateFormValidation(inputElements);

    if (isFormValid) {
      popupSuccess.classList.add("popup__success--active");
    }
    else {
      popupError.classList.add("popup__error--active");
    }
  });
}

function initForm() {
  var formElement = document.querySelector(".form");

  if (!formElement) {
    return;
  }

  initFormEvents(formElement);
}

function initPopupEvents(popupSuccess, popupError) {

  var closePopupSuccessButton = popupSuccess.querySelector(".popup__btn--success");
  var closePopupErrorButton = popupError.querySelector(".popup__btn");

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

function initPopups(){
  if(popupSuccess && popupError){
    initPopupEvents(popupSuccess, popupError);
  }
}

initForm();
initPopups();
