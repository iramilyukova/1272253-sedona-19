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

  var popup = document.querySelector(".popup");
  var openPopupButton = document.querySelector(".form__button--show");
  var closePopupButton = popup.querySelector(".popup__btn");
  var name = form.querySelector("[name=name]");
  var surname = form.querySelector("[name=surname]");
  var patronymic = form.querySelector("[patronymic]");
  var phone = form.querySelector("[phone]");
  var email = form.querySelector("[email]");
  var isStorageSupport = true;
  var nameStorage = "";
  var surnameStorage = "";
  var patronymicStorage = "";
  var phoneStorage = "";
  var emailStorage = "";

  try {
    nameStorage = localStorage.getItem("name");
  } catch (err) {
    isStorageSupport = false;
  }

  try {
    surnameStorage = localStorage.getItem("surname");
  } catch (err) {
    isStorageSupport = false;
  }

  try {
    patronymicStorage = localStorage.getItem("patronymic");
  } catch (err) {
    isStorageSupport = false;
  }

  try {
    phoneStorage = localStorage.getItem("phone");
  } catch (err) {
    isStorageSupport = false;
  }

  try {
    emailStorage = localStorage.getItem("email");
  } catch (err) {
    isStorageSupport = false;
  }

  name.addEventListener("keyup", function () {
    this.classList.remove("form__field-error");
  });

  surname.addEventListener("keyup", function () {
    this.classList.remove("form__field-errorr");
  });

  patronymic.addEventListener("keyup", function () {
    this.classList.remove("form__field-error");
  });

  phone.addEventListener("keyup", function () {
    this.classList.remove("form__field-error");
  });

  email.addEventListener("keyup", function () {
    this.classList.remove("form__field-error");
  });

  openPopupButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("popup--open");

    if (nameStorage) {
      name.value = nameStorage;
      surname.focus();
    }
    else {
      name.focus();
    }

    if (surnameStorage) {
      surname.value = surnameStorage;
      patronymic.focus();
    }
    else {
      surname.focus();
    }

    if (patronymicStorage) {
      patronymic.value = patronymicStorage;
      phone.focus();
    }
    else {
      patronymic.focus();
    }

    if (phoneStorage) {
        phone.value = phoneStorage;
        email.focus();
    }
    else{
      phone.focus();
    }
  });

  form.addEventListener("submit", function (evt) {

    if (name.value && surname.value &&  patronymic.value &&  phone.value &&  email.value &&isStorageSupport) {
      localStorage.setItem("name", name.value);
      localStorage.setItem("surname", surname.value);
      localStorage.setItem("patronymic", patronymic.value);
      localStorage.setItem("phone", phone.value);
      localStorage.setItem("email", email.value);

      name.classList.remove("form__field-error");
      surname.classList.remove("form__field-error");
      patronymic.classList.remove("form__field-error");
      phone.classList.remove("form__field-error");
      email.classList.remove("form__field-error");
    }
    else {
      evt.preventDefault();

      if(appointment.value === "") {
        appointment.classList.add("form__field-error");
      }

      if(departure.value === "") {
        departure.classList.add("form__field-error");
      }

      popup.classList.remove("form__form-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("form__form-error");
      console.log("Нужно ввести даты заезда");
    }
  });

  closePopupButton.addEventListener("click", function () {
    popup.classList.remove("popup--open");
  });

  window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27 && popup.classList.contains("popup--open")){
        popup.classList.remove("popup--open");
        popup.classList.remove("form__field-error");
      }
  });
