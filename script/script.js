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

//////////// Opening/Closing Modals Functions \\\\\\\\\\\\

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

const modalCloseButtons = document.querySelectorAll(".modal__close-button");
modalCloseButtons.forEach((item) => {
  item.addEventListener("click", () => closeModal(item.closest(".modal")));
});

const modalList = Array.from(document.querySelectorAll(".modal"));

const escPressClose = (evt) => {
  if (
    evt.key === "Escape" &&
    modalList.some((modal) => {
      return modal.classList.contains("modal_opened");
    })
  ) {
    modalList.forEach((modal) => {
      closeModal(modal);
    });
  }
};

document.addEventListener("keydown", escPressClose);

//////////// Edit Popup Form \\\\\\\\\\\\

const editModal = document.querySelector(".modal-edit");

const editUnrollButton = document.querySelector(".profile__edit-button");

const profileName = document.querySelector(".profile__name");
const profileTag = document.querySelector(".profile__tag");

const editFormName = document.querySelector("input[name='name']");
const editFormTag = document.querySelector("input[name='tag']");

const editForm = document.querySelector(".modal__form[name='NameTag']");

const cardsContainer = document.querySelector(".elements__list");

function submitEditForm(evt) {
  evt.preventDefault();
  profileName.textContent = editFormName.value;
  profileTag.textContent = editFormTag.value;
  closeModal(editModal);
}

editForm.addEventListener("submit", submitEditForm);

editUnrollButton.addEventListener("click", function () {
  openModal(editModal);
  editFormName.value = profileName.textContent;
  editFormTag.value = profileTag.textContent;
});

//////////// Add Card Popup Form \\\\\\\\\\\\

const addModal = document.querySelector(".modal-add");

const addFormTitle = document.querySelector("input[name='title']");
const addFormLink = document.querySelector("input[name='link']");

const addUnrollButton = document.querySelector(".profile__add-button");
const addForm = document.querySelector(".modal__form[name='AddPlace']");

function submitAddForm(evt) {
  evt.preventDefault();

  const newCard = createCard({
    name: addFormTitle.value,
    link: addFormLink.value,
  });
  cardsContainer.prepend(newCard);
  addFormTitle.value = "";
  addFormLink.value = "";
  closeModal(addModal);
}

addUnrollButton.addEventListener("click", function () {
  openModal(addModal);
});

addForm.addEventListener("submit", submitAddForm);

//////////// Creating Cards Function \\\\\\\\\\\\

const cardImageOverlay = document.querySelector(".modal-preview");
const cardImagePreview = document.querySelector(".modal-preview__image");
const cardImagePreviewTitle = document.querySelector(".modal-preview__title");

function createCard(item) {
  const card = document.importNode(elementsItem, true);
  const modalPreviewImage = card.querySelector(".element__image");

  card.querySelector(".element__title").textContent = item.name;
  modalPreviewImage.alt = item.name;
  modalPreviewImage.src = item.link;

  modalPreviewImage.addEventListener("click", function () {
    openModal(cardImageOverlay);
    cardImagePreview.src = modalPreviewImage.src;
    cardImagePreview.alt = modalPreviewImage.alt;
    cardImagePreviewTitle.textContent = modalPreviewImage.alt;
  });

  card
    .querySelector(".element__like-button")
    .addEventListener("click", function (evt) {
      const eventTarget = evt.target;
      eventTarget.classList.toggle("element__like-button_not-active");
    });

  card
    .querySelector(".element__remove-button")
    .addEventListener("click", function (evt) {
      const eventTarget = evt.target;
      eventTarget.closest("li").remove();
    });

  return card;
}

//////////// Initial Cards Creating \\\\\\\\\\\\

const cardTemplate = document.querySelector(".card__template");
const cloneCardTemplate = cardTemplate.content.cloneNode(true);

const elementsItem = cloneCardTemplate.querySelector(".elements__item");

initialCards.forEach((item) => {
  const elementsItem = createCard(item);
  cardsContainer.prepend(elementsItem);
});
