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

function openModal(modal) {
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
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
  openModal(editModal);
});

profileForm.addEventListener("submit", handleProfileFormSubmit);

// -------------------OPEN/CLOSE MODULE (ADD CARD)-----------------------

const profileNewPostButton = document.querySelector(".profile__new-post-btn");
const profileAddCardForm = document.querySelector("#add-card-form");
const cardLink = document.querySelector(".card__image");
const cardCaption = document.querySelector(".card__title");
const addCardLinkInput = document.querySelector("#profile-add-card-link-input");
const addCardCaptionInput = document.querySelector(
  "#profile-add-card-caption-input"
);
const addCardModal = document.querySelector("#add-card-modal");

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  const inputValues = {
    title: addCardCaptionInput.value,
    link: addCardLinkInput.value,
  };

  const cardElement = getCardElement(inputValues);
  cardsList.prepend(cardElement);
  profileAddCardForm.reset();
  closeModal(addCardModal);
}

profileNewPostButton.addEventListener("click", () => {
  openModal(addCardModal);
});

profileAddCardForm.addEventListener("submit", handleAddCardSubmit);

// ------------------------------CARDS ARRAY----------------------------------

const initialCards = [
  {
    name: "Joseph, OR",
    link: "https://images.unsplash.com/photo-1716845134231-182b88c22a34?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Oregon Coast",
    link: "https://images.unsplash.com/photo-1601698832159-665cbefd11da?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Tumalo Falls, OR",
    link: "https://media.istockphoto.com/id/174694196/photo/tumalo-falls.jpg?s=1024x1024&w=is&k=20&c=53yA1udcBFEorYTeqpLIiQ7sl_3xjWkQYNcQO8GNZl8=",
  },
  {
    name: "Central Oregon Cascade Range",
    link: "https://images.unsplash.com/photo-1600123289984-1d7a1b2dbbb1?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Multnomah Falls, OR",
    link: "https://images.unsplash.com/photo-1566434109082-772727eba32f?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Southern Oregon",
    link: "https://images.unsplash.com/photo-1727829441341-52cece0b3c97?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// --------------------------CARD TEMPLATES-------------------------------

const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");
  const modalPreview = document.querySelector("#card-preview-modal");
  const modalImagePreview = document.querySelector(".modal__image-preview");
  const modalCaption = document.querySelector(".modal__image-caption");

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

initialCards.forEach((item) => {
  const cardElement = getCardElement(item);
  cardsList.prepend(cardElement);
});

modalCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});
