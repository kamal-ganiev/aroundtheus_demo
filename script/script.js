let formShow = document.querySelector(".form");
let formButton = document.querySelector(".profile__edit-button");
let formClose = document.querySelector(".form__close-icon");

let formName = document.querySelector("input[name='name']");
let formTag = document.querySelector("input[name='tag']");

let profileName = document.querySelector(".profile__name");
let profileTag = document.querySelector(".profile__tag");

function formUnroll() {
  formShow.classList.remove("form_not-active");
  formName.value = profileName.textContent;
  formTag.value = profileTag.textContent;
}

function formRoll() {
  formShow.classList.add("form_not-active");
}

formButton.addEventListener("click", formUnroll);
formClose.addEventListener("click", formRoll);

function formSave(event) {
  profileName.textContent = formName.value;
  profileTag.textContent = formTag.value;
  event.preventDefault();
  formRoll();
}

document.querySelector(".form__button").addEventListener("click", formSave);
