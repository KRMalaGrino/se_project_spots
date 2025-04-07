import {
  enableValidation,
  resetValidation,
  disableButton,
  settings,
} from "../scripts/validation.js";

import "./index.css";

const img1 = new URL(
  "../images/1-photo-by-moritz-feldmann-from-pexels.jpg",
  import.meta.url
);
const img2 = new URL(
  "../images/2-photo-by-ceiline-from-pexels.jpg",
  import.meta.url
);
const img3 = new URL(
  "../images/3-photo-by-tubanur-dogan-from-pexels.jpg",
  import.meta.url
);
const img4 = new URL(
  "../images/4-photo-by-maurice-laschet-from-pexels.jpg",
  import.meta.url
);
const img5 = new URL(
  "../images/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  import.meta.url
);
const img6 = new URL(
  "../images/6-photo-by-moritz-feldmann-from-pexels.jpg",
  import.meta.url
);

// import logoSrc from "../src/images/Logo.svg";

// const headerLogo = document.getElementById("header-logo");
// headerLogo.src = logoSrc;

// -------------------OPEN/CLOSE MODULE (Edit Profile)----------------------------------

const profileEditButton = document.querySelector(".profile__edit-btn");
const modalCloseButtons = document.querySelectorAll(".modal__button-close");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const editModal = document.querySelector("#edit-modal");
const editModalNameInput = document.querySelector("#profile-name-input");
const editModalDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileForm = document.querySelector("#profile-form");
const modal = document.querySelectorAll(".modal");

modal.forEach((modal) => {
  modal.addEventListener("mousedown", (evt) => {
    if (
      evt.target.classList.contains("modal") ||
      evt.target.classList.contains("modal__button-close")
    ) {
      closeModal(modal);
    }
  });
});

function handleEscape(evt) {
  if (evt.key === "Escape") {
    const activeModal = document.querySelector(".modal_opened");
    closeModal(activeModal);
  }
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscape);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscape);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editModalNameInput.value;
  profileDescription.textContent = editModalDescriptionInput.value;
  closeModal(editModal);
}

profileEditButton.addEventListener("click", () => {
  editModalNameInput.value = profileName.textContent;
  editModalDescriptionInput.value = profileDescription.textContent;
  // fix error
  resetValidation(
    profileForm,
    [editModalNameInput, editModalDescriptionInput],
    settings
  );
  openModal(editModal);
});

profileForm.addEventListener("submit", handleProfileFormSubmit);

// -------------------OPEN/CLOSE MODULE (ADD CARD)-----------------------

const profileNewPostButton = document.querySelector(".profile__new-post-btn");
const profileAddCardForm = document.querySelector("#add-card-form");
const addCardLinkInput = document.querySelector("#profile-add-card-link-input");
const addCardCaptionInput = document.querySelector(
  "#profile-add-card-caption-input"
);
const addCardModal = document.querySelector("#add-card-modal");

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  const inputValues = {
    name: addCardCaptionInput.value,
    link: addCardLinkInput.value,
  };

  const cardElement = getCardElement(inputValues);
  cardsList.prepend(cardElement);
  closeModal(addCardModal);
  profileAddCardForm.reset();
  disableButton(evt.submitter, settings);
}

profileNewPostButton.addEventListener("click", () => {
  openModal(addCardModal);
});

profileAddCardForm.addEventListener("submit", handleAddCardSubmit);

// ------------------------------CARDS ARRAY----------------------------------

const initialCards = [
  {
    name: "Joseph, OR",
    link: img1,
  },
  {
    name: "Oregon Coast",
    link: img2,
  },
  {
    name: "Tumalo Falls, OR",
    link: img3,
  },
  {
    name: "Central Oregon Cascade Range",
    link: img4,
  },
  {
    name: "Multnomah Falls, OR",
    link: img5,
  },
  {
    name: "Southern Oregon",
    link: img6,
  },
];

// --------------------------CARD TEMPLATES-------------------------------

const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");
const modalPreview = document.querySelector("#card-preview-modal");
const modalImagePreview = document.querySelector(".modal__image-preview");
const modalCaption = document.querySelector(".modal__image-caption");

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");

  cardNameEl.textContent = data.name;
  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;

  cardLikeBtn.addEventListener("click", () => {
    cardLikeBtn.classList.toggle("card__like-button_liked");
  });

  cardDeleteBtn.addEventListener("click", () => {
    cardElement.remove();
  });

  // card modal preview open
  cardImageEl.addEventListener("click", () => {
    modalImagePreview.src = data.link;
    modalImagePreview.alt = data.name;
    modalCaption.textContent = data.name;

    openModal(modalPreview);
  });

  return cardElement;
}

// ----- card loop ------
initialCards.forEach((item) => {
  const cardElement = getCardElement(item);
  cardsList.prepend(cardElement);
});

// ------ modal close button ------
modalCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

enableValidation(settings);
