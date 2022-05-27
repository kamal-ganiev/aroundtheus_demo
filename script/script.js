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

//////////// Edit Popup Form \\\\\\\\\\\\

const editModal = document.querySelector(".modal__edit");

const editUnroll = document.querySelector(".profile__edit-button");

const profileName = document.querySelector(".profile__name");
const profileTag = document.querySelector(".profile__tag");

const editFormRoll = document.querySelector(".modal__edit-close");

const editFormName = document.querySelector("input[name='name']");
const editFormTag = document.querySelector("input[name='tag']");

const editForm = document.querySelector(".modal__form[name='NameTag']");

const cardsContainer = document.querySelector(".elements__list");

function submitEditForm(evt) {
  evt.preventDefault();
  profileName.textContent = editFormName.value;
  profileTag.textContent = editFormTag.value;
  editModal.classList.add("modal_not-active");
}

editUnroll.addEventListener("click", function () {
  editModal.classList.remove("modal_not-active");
  editFormName.value = profileName.textContent;
  editFormTag.value = profileTag.textContent;
  editForm.addEventListener("submit", submitEditForm);
});

editFormRoll.addEventListener("click", function () {
  editModal.classList.add("modal_not-active");
});

//////////// Add Card Popup Form \\\\\\\\\\\\

const addModal = document.querySelector(".modal__add");

const addFormRoll = document.querySelector(".modal__add-close");

const addFormTitle = document.querySelector("input[name='title']");
const addFormLink = document.querySelector("input[name='link']");

const addUnroll = document.querySelector(".profile__add-button");
const addForm = document.querySelector(".modal__form[name='AddPlace']");

function submitAddForm(evt) {
  evt.preventDefault();
  createCard();
  addFormTitle.value = "";
  addFormLink.value = "";
  addModal.classList.add("modal_not-active");
}

addUnroll.addEventListener("click", function () {
  addModal.classList.remove("modal_not-active");
});

const addRoll = document.querySelector(".modal__add-close");

addRoll.addEventListener("click", function () {
  addModal.classList.add("modal_not-active");
});

addForm.addEventListener("submit", submitAddForm);

//////////// Initial Cards Creating \\\\\\\\\\\\

initialCards.forEach((arr) => {
  const elementsItem = document.createElement("li");
  const card = document.createElement("div");
  const cardTitle = document.createElement("h2");
  const cardImage = document.createElement("img");
  const cardLikeButton = document.createElement("button");
  const cardRemoveButton = document.createElement("button");

  elementsItem.classList.add("elements__item");
  card.classList.add("element");
  cardTitle.classList.add("element__title");
  cardImage.classList.add("element__image");
  cardLikeButton.classList.add(
    "element__like-button",
    "element__like-button_not-active"
  );
  cardRemoveButton.classList.add("element__remove-button");

  cardTitle.textContent = arr.name;

  cardImage.alt = arr.name;
  cardImage.src = arr.link;

  cardImage.addEventListener("click", function () {
    const cardImageOverlay = document.querySelector(".elements__image-preview");
    cardImageOverlay.classList.add("elements__image-preview_visible");
    const cardImagePreview = document.querySelector(".elements__image-zoom");
    cardImagePreview.src = cardImage.src;
    cardImagePreview.alt = cardImage.alt;
    const cardImagePreviewClose = document.querySelector(
      ".elements__image-close-button"
    );
    cardImagePreviewClose.addEventListener("click", function () {
      cardImageOverlay.classList.remove("elements__image-preview_visible");
    });
    const cardImagePreviewTitle = document.querySelector(
      ".elements__image-description"
    );
    cardImagePreviewTitle.textContent = cardImage.alt;
  });

  cardLikeButton.setAttribute("type", "button");
  cardLikeButton.addEventListener("click", function (evt) {
    const eventTarget = evt.target;
    eventTarget.classList.toggle("element__like-button_not-active");
  });

  cardRemoveButton.setAttribute("type", "button");
  cardRemoveButton.addEventListener("click", function (evt) {
    const eventTarget = evt.target;
    eventTarget.closest("li").remove();
  });

  card.appendChild(cardImage);
  card.appendChild(cardTitle);
  card.appendChild(cardLikeButton);
  card.appendChild(cardRemoveButton);
  elementsItem.appendChild(card);

  cardsContainer.prepend(elementsItem);
});

//////////// Adding Cards Function \\\\\\\\\\\\

function createCard() {
  const elementsItem = document.createElement("li");
  const card = document.createElement("div");
  const cardTitle = document.createElement("h2");
  const cardImage = document.createElement("img");
  const cardLikeButton = document.createElement("button");
  const cardRemoveButton = document.createElement("button");

  elementsItem.classList.add("elements__item");
  card.classList.add("element");
  cardTitle.classList.add("element__title");
  cardImage.classList.add("element__image");
  cardLikeButton.classList.add(
    "element__like-button",
    "element__like-button_not-active"
  );
  cardRemoveButton.classList.add("element__remove-button");

  cardTitle.textContent = addFormTitle.value;

  cardImage.alt = addFormTitle.value;
  cardImage.src = addFormLink.value;

  cardImage.addEventListener("click", function () {
    const cardImageOverlay = document.querySelector(".elements__image-preview");
    cardImageOverlay.classList.add("elements__image-preview_visible");
    const cardImagePreview = document.querySelector(".elements__image-zoom");
    cardImagePreview.src = cardImage.src;
    cardImagePreview.alt = cardImage.alt;
    const cardImagePreviewClose = document.querySelector(
      ".elements__image-close-button"
    );
    cardImagePreviewClose.addEventListener("click", function () {
      cardImageOverlay.classList.remove("elements__image-preview_visible");
    });
    const cardImagePreviewTitle = document.querySelector(
      ".elements__image-description"
    );
    cardImagePreviewTitle.textContent = cardImage.alt;
  });

  cardLikeButton.setAttribute("type", "button");
  cardLikeButton.addEventListener("click", function (evt) {
    const eventTarget = evt.target;
    eventTarget.classList.toggle("element__like-button_not-active");
  });

  cardRemoveButton.setAttribute("type", "button");
  cardRemoveButton.addEventListener("click", function (evt) {
    const eventTarget = evt.target;
    eventTarget.closest("li").remove();
  });

  card.appendChild(cardImage);
  card.appendChild(cardTitle);
  card.appendChild(cardLikeButton);
  card.appendChild(cardRemoveButton);
  elementsItem.appendChild(card);

  cardsContainer.prepend(elementsItem);
}
