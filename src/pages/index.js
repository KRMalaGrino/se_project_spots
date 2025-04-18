import {
  enableValidation,
  resetValidation,
  disableButton,
  settings,
} from "../scripts/validation.js";

import "./index.css";
import Api from "../utils/Api.js";

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

// ------------------ Instantiating the API class ---------------------

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "7cf900fc-9f66-4afe-b1f0-09f480f95933",
    "Content-Type": "application/json",
  },
});

api
  .getAppInfo()
  .then(([cards, userInfo]) => {
    cards.forEach((item) => {
      const cardElement = getCardElement(item);
      cardsList.prepend(cardElement);
    });
    profileAvatar.src = userInfo.avatar; // Handle the user's information
    profileName.textContent = userInfo.name; // - set the src of the avatar image
    profileDescription.textContent = userInfo.about; // set thetextContent of both the text elements
  })
  .catch(console.error);

// -------------------OPEN/CLOSE MODULE (Edit Profile)----------------------------------

const profileEditButton = document.querySelector(".profile__edit-btn");
const modalCloseButtons = document.querySelectorAll(".modal__button-close");
const profileAvatar = document.querySelector(".profile__avatar");
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

  api
    .editUserInfo({
      name: editModalNameInput.value,
      about: editModalDescriptionInput.value,
    })
    .then((data) => {
      profileName.textContent = data.name;
      profileDescription.textContent = data.about;
      closeModal(editModal);
    })
    .catch(console.error);
}

profileEditButton.addEventListener("click", () => {
  editModalNameInput.value = profileName.textContent;
  editModalDescriptionInput.value = profileDescription.textContent;
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

  api
    .addNewCard(addCardCaptionInput.value, addCardLinkInput.value)
    .then((data) => {
      const cardElement = getCardElement({
        name: data.name,
        link: data.link,
        _id: data._id,
      });
      cardsList.prepend(cardElement);
      closeModal(addCardModal);
      profileAddCardForm.reset();
      disableButton(evt.submitter, settings);
    })
    .catch(console.error);
}

profileNewPostButton.addEventListener("click", () => {
  openModal(addCardModal);
});

profileAddCardForm.addEventListener("submit", handleAddCardSubmit);

// --------------------------CARD TEMPLATES-------------------------------

const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");
const modalPreview = document.querySelector("#card-preview-modal");
const modalImagePreview = document.querySelector(".modal__image-preview");
const modalCaption = document.querySelector(".modal__image-caption");

let selectedCard = null;
let selectedCardId = null;
const confirmDeleteModal = document.querySelector("#confirm-delete-modal");

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
    const isLiked = cardLikeBtn.classList.contains("card__like-button_liked");

    const likeAction = isLiked
      ? api.removeLike(data._id)
      : api.addLike(data._id);

    likeAction
      .then(() => {
        cardLikeBtn.classList.toggle("card__like-button_liked");
      })
      .catch((err) => {
        console.error("Failed to like photo:", err);
      });
  });

  // card modal preview open
  cardImageEl.addEventListener("click", () => {
    modalImagePreview.src = data.link;
    modalImagePreview.alt = data.name;
    modalCaption.textContent = data.name;

    openModal(modalPreview);
  });

  cardDeleteBtn.addEventListener("click", () => {
    selectedCard = cardElement;
    selectedCardId = data._id;

    const confirmDeleteBtn = confirmDeleteModal.querySelector(
      ".modal__button-delete"
    );

    confirmDeleteBtn.onclick = () => {
      if (!selectedCardId || !selectedCard) return;

      api
        .deleteCard(selectedCardId)
        .then(() => {
          selectedCard.remove();
          closeModal(confirmDeleteModal);
          selectedCard = null;
          selectedCardId = null;
        })
        .catch(console.error);
    };

    openModal(confirmDeleteModal);
  });

  return cardElement;
}

// ------ modal close button ------
modalCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

enableValidation(settings);

// --------------------------------------------------------------------
