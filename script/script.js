let formShow = document.querySelector(".modal");
let formButton = document.querySelector(".profile__edit-button");
let formClose = document.querySelector(".modal__close-button");
let formTitle = document.querySelector(".modal__title");

let formName = document.querySelector("input[name='name']");
let formTag = document.querySelector("input[name='tag']");

let profileName = document.querySelector(".profile__name");
let profileTag = document.querySelector(".profile__tag");

let modalButton = document.querySelector(".modal__button");
let modalForm = document.querySelector(".modal__form");

////////// Profile Edit Form //////////

function editForm(evt) {
  evt.preventDefault();
  profileName.textContent = formName.value;
  profileTag.textContent = formTag.value;
  formRoll();
  modalForm.removeEventListener("submit", editForm);
}

formButton.addEventListener("click", function () {
  formShow.classList.remove("modal_not-active");
  formName.value = profileName.textContent;
  formTag.value = profileTag.textContent;
  formTitle.textContent = "Edit profile";
  modalButton.textContent = "Save";
  formName.placeholder = "Enter your name";
  formTag.placeholder = "Enter who you are";
  modalForm.addEventListener("submit", editForm);
});

////////// Form close button //////////

function formRoll() {
  formShow.classList.add("modal_not-active");
}

formClose.addEventListener("click", formRoll);

////////// Card Creating Function //////////

function createCard(card) {
  const elementsItem = document.createElement("li");
  elementsItem.classList.add("elements__item");

  const element = document.createElement("div");
  element.classList.add("element");

  const elementTitle = document.createElement("h2");
  elementTitle.classList.add("element__title");

  const elementImage = document.createElement("img");
  elementImage.classList.add("element__image");

  const elementLikeButton = document.createElement("button");
  elementLikeButton.classList.add(
    "element__like-button",
    "element__like-button_not-active"
  );
  elementLikeButton.setAttribute("type", "button");

  const elementRemoveButton = document.createElement("button");
  elementRemoveButton.classList.add("element__remove-button");
  elementRemoveButton.setAttribute("type", "button");

  elementImage.src = card.link;
  elementImage.alt = card.name;
  elementTitle.textContent = card.name;

  element.appendChild(elementImage);
  element.appendChild(elementTitle);
  element.appendChild(elementLikeButton);
  element.appendChild(elementRemoveButton);
  elementsItem.appendChild(element);

  elementList.append(elementsItem);
}

////////// Intial Cards Array //////////

const initialCards = [
  {
    name: "Chicago, Illinois",
    link: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370",
  },
  {
    name: "Indianapolis, Indiana",
    link: "https://images.unsplash.com/photo-1578777108770-fcd123148f66?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987",
  },
  {
    name: "Philadelphia, Pennsylvania",
    link: "https://images.unsplash.com/photo-1601332069884-15a8149df78a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBoaWxhZGVscGhpYSUyMHNreWxpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800",
  },
  {
    name: "Pittsburgh, Pennsylvania",
    link: "https://images.unsplash.com/photo-1649078487531-86fb36857c4a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHBpdHRzYnVyZ2glMjBicmlkZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800",
  },
  {
    name: "Portland, Oregon",
    link: "https://images.unsplash.com/photo-1645934430496-6cae81215bf9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988",
  },
  {
    name: "Seattle, Washington",
    link: "https://images.unsplash.com/photo-1495726569656-8b8886143e6a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjY1fHxzZWF0dGxlJTIwc2t5bGluZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800",
  },
];

////////// Initial Cards //////////

const elementList = document.querySelector(".elements__list");

initialCards.forEach((card) => {
  createCard(card);
});

////////// Adding Cards Form //////////

function addCard(evt) {
  evt.preventDefault();
  const elementsItem = document.createElement("li");
  elementsItem.classList.add("elements__item");

  const element = document.createElement("div");
  element.classList.add("element");

  const elementTitle = document.createElement("h2");
  elementTitle.classList.add("element__title");

  const elementImage = document.createElement("img");
  elementImage.classList.add("element__image");

  elementImage.addEventListener("click", function () {
    imageOverlay.classList.add("element__image-overlay_visible");
    imageZoom.src = elementImage.src;
    imageZoom.alt = element.alt;
    imageClose.addEventListener("click", function () {
      imageOverlay.classList.remove("element__image-overlay_visible");
    });
  });

  const elementLikeButton = document.createElement("button");
  elementLikeButton.classList.add(
    "element__like-button",
    "element__like-button_not-active"
  );
  elementLikeButton.setAttribute("type", "button");
  elementLikeButton.addEventListener("click", likeClick);

  const elementRemoveButton = document.createElement("button");
  elementRemoveButton.classList.add("element__remove-button");
  elementRemoveButton.setAttribute("type", "button");
  elementRemoveButton.addEventListener("click", removeCard);

  elementImage.src = formTag.value;
  elementImage.alt = formName.value;
  elementTitle.textContent = formName.value;

  element.appendChild(elementImage);
  element.appendChild(elementTitle);
  element.appendChild(elementLikeButton);
  element.appendChild(elementRemoveButton);
  elementsItem.appendChild(element);

  elementList.append(elementsItem);

  formRoll();

  modalForm.removeEventListener("submit", addCard);
}

document
  .querySelector(".profile__add-button")
  .addEventListener("click", function () {
    formShow.classList.remove("modal_not-active");
    formName.value = "";
    formTag.value = "";
    formTag.placeholder = "Image URL";
    formName.placeholder = "Title";
    formTitle.textContent = "New place";
    modalButton.textContent = "Create";
    modalForm.addEventListener("submit", addCard);
  });

////////// Remove "Trash Can" Button Function //////////

function removeCard(evt) {
  const eventTarget = evt.target;
  eventTarget.closest("li").remove();
}

const removeButton = document.querySelectorAll(".element__remove-button");
removeButton.forEach((button) => {
  button.addEventListener("click", removeCard);
});

////////// Like Button //////////

function likeClick(evt) {
  const eventTarget = evt.target;
  eventTarget.classList.toggle("element__like-button_active");
}

const likeButton = document.querySelectorAll(".element__like-button");
likeButton.forEach((like) => {
  like.addEventListener("click", likeClick);
});

////////// Image Zoom //////////

const imageOverlay = document.querySelector(".element__image-overlay");
const imageZoom = document.querySelector(".element__image-zoom");
const imageClose = document.querySelector(".element__close-button");
const imageCard = document.querySelectorAll(".element__image");
imageCard.forEach((image) => {
  image.addEventListener("click", function () {
    imageOverlay.classList.add("element__image-overlay_visible");
    imageZoom.src = image.src;
    imageZoom.alt = image.alt;
    imageClose.addEventListener("click", function () {
      imageOverlay.classList.remove("element__image-overlay_visible");
    });
  });
});
