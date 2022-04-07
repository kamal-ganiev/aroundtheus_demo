let formShow = document.querySelector(".form");
let formButton = document.querySelector(".profile__edit-button");
let formClose = document.querySelector(".form__close-icon");

let formName = document.querySelector("input[name='name']");
let formTag = document.querySelector("input[name='tag']");

let profileName = document.querySelector(".profile__name");
let profileTag = document.querySelector(".profile__tag");

formName.value = profileName.textContent;
formTag.value = profileTag.textContent;

function formUnroll() {
  formShow.classList.remove("form_visibility_none");
}

function formRoll() {
  formShow.classList.add("form_visibility_none");
}

formButton.addEventListener("click", formUnroll);
formClose.addEventListener("click", formRoll);

let formSaveButton = document.querySelector(".form__button");

function formSave() {
  profileName.textContent = formName.value;
  profileTag.textContent = formTag.value;
}

formSaveButton.addEventListener("click", formSave);
formSaveButton.addEventListener("click", formRoll);
