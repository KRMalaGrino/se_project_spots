// ------------------------------ imports -----------------------------

import {
  enableValidation,
  resetValidation,
  disableButton,
  settings,
} from "../scripts/validation.js";

import "./index.css";
import Api from "../utils/Api.js";

// ------------------------ Global variables --------------------------
// avatar variables -----------------
const editAvatarModal = document.querySelector("#edit-avatar-modal");
const editAvatarForm = document.querySelector("#edit-avatar-form");
const editAvatarInput = document.querySelector("#edit-avatar-link-input");
// edit profile variables -----------------
const profileAvatar = document.querySelector(".profile__avatar");
const profileEditButton = document.querySelector(".profile__edit-btn");
const profileForm = document.querySelector("#profile-form");
const profileName = document.querySelector(".profile__name");
const editModal = document.querySelector("#edit-modal");
const editModalNameInput = document.querySelector("#profile-name-input");
const profileDescription = document.querySelector(".profile__description");
const editModalDescriptionInput = document.querySelector(
  "#profile-description-input"
);
let currentUserId;
// add card variables -----------------
const profileNewPostButton = document.querySelector(".profile__new-post-btn");
const addCardModal = document.querySelector("#add-card-modal");
const profileAddCardForm = document.querySelector("#add-card-form");
const addCardLinkInput = document.querySelector("#profile-add-card-link-input");
const addCardCaptionInput = document.querySelector(
  "#profile-add-card-caption-input"
);
// card variables -----------------
const modalPreview = document.querySelector("#card-preview-modal");
const modalImagePreview = document.querySelector(".modal__image-preview");
const modalCaption = document.querySelector(".modal__image-caption");
const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");
let selectedCard = null;
let selectedCardId = null;
// modal other variables -----------------
const modal = document.querySelectorAll(".modal");
const modalCloseButtons = document.querySelectorAll(".modal__button-close");
const confirmDeleteModal = document.querySelector("#confirm-delete-modal");
const confirmDeleteBtn = confirmDeleteModal.querySelector(
  ".modal__button-delete"
);
const cancelDeleteBtn = confirmDeleteModal.querySelector(
  ".modal__button-cancel"
);

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
    currentUserId = userInfo._id;

    cards.forEach((item) => {
      const cardElement = getCardElement(item);
      cardsList.prepend(cardElement);
    });
    profileAvatar.src = userInfo.avatar; // Handle the user's information
    profileName.textContent = userInfo.name; // - set the src of the avatar image
    profileDescription.textContent = userInfo.about; // set thetextContent of both the text elements
  })
  .catch(console.error);

// ----------------------- Open/Close Functions -----------------------

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

modalCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

// -------------------------- Edit Avatar ----------------------------

function handleEditAvatar(evt) {
  evt.preventDefault();

  const avatarUrl = editAvatarInput.value;

  const btn = evt.submitter;
  btn.textContent = "Saving...";

  api
    .editAvatar(avatarUrl)
    .then((data) => {
      profileAvatar.src = data.avatar;
      closeModal(editAvatarModal);
    })
    .catch(console.error)
    .finally(() => {
      btn.textContent = "Save";
    });
}

profileAvatar.addEventListener("click", () => {
  editAvatarInput.value = profileAvatar.src;
  openModal(editAvatarModal);
});

editAvatarForm.addEventListener("submit", handleEditAvatar);

// ---------------------- Edit Profile Module ------------------------

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const btn = evt.submitter;
  btn.textContent = "Saving...";

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
    .catch(console.error)
    .finally(() => {
      btn.textContent = "Save";
    });
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

// ------------------------- Add card module --------------------------

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  const btn = evt.submitter;
  btn.textContent = "Saving...";

  api
    .addNewCard(addCardCaptionInput.value, addCardLinkInput.value)
    .then((data) => {
      const cardElement = getCardElement({
        name: data.name,
        link: data.link,
        _id: data._id,
        likes: data.likes || [],
      });
      cardsList.prepend(cardElement);
      closeModal(addCardModal);
      profileAddCardForm.reset();
      disableButton(evt.submitter, settings);
    })
    .catch(console.error)
    .finally(() => {
      btn.textContent = "Save";
    });
}

profileNewPostButton.addEventListener("click", () => {
  openModal(addCardModal);
});

profileAddCardForm.addEventListener("submit", handleAddCardSubmit);

// ------------------------- Card Functions ---------------------------

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  const cardIsLiked = "card__like-button_liked";
  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");

  cardNameEl.textContent = data.name;
  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;

  // card like button -------------------------

  const isLikedByUser = Array.isArray(data.likes)
    ? data.likes.some((user) => user._id === currentUserId)
    : false;
  if (isLikedByUser) {
    cardLikeBtn.classList.add(cardIsLiked);
  }

  cardLikeBtn.addEventListener("click", () => {
    const isLiked = cardLikeBtn.classList.contains(cardIsLiked);

    const likeAction = isLiked
      ? api.removeLike(data._id)
      : api.addLike(data._id);

    likeAction
      .then((updatedCard) => {
        const likesArray = Array.isArray(updatedCard.likes)
          ? updatedCard.likes
          : [];

        const likedByUser = likesArray.some(
          (user) => user._id === currentUserId
        );
        cardLikeBtn.classList.toggle(cardIsLiked, likedByUser);
      })
      .catch((err) => {
        console.error("Failed to like photo:", err);
      });
  });

  // card modal preview open --------------------
  cardImageEl.addEventListener("click", () => {
    modalImagePreview.src = data.link;
    modalImagePreview.alt = data.name;
    modalCaption.textContent = data.name;

    openModal(modalPreview);
  });

  // card delete button --------------------------
  cardDeleteBtn.addEventListener("click", () => {
    selectedCard = cardElement;
    selectedCardId = data._id;

    // confirm delete button -----
    confirmDeleteBtn.onclick = () => {
      if (!selectedCardId || !selectedCard) return;

      confirmDeleteBtn.textContent = "Deleting...";

      api
        .deleteCard(selectedCardId)
        .then(() => {
          selectedCard.remove();
          closeModal(confirmDeleteModal);
          selectedCard = null;
          selectedCardId = null;
        })
        .catch(console.error)
        .finally(() => {
          confirmDeleteBtn.textContent = "Delete";
        });
    };

    // cancel button -----
    cancelDeleteBtn.onclick = () => {
      closeModal(confirmDeleteModal);
    };

    openModal(confirmDeleteModal);
  });

  return cardElement;
}

// ------------------------- Enable validation ------------------------

enableValidation(settings);
