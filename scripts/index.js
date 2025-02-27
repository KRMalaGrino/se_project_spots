// -------------------OPEN/CLOSE MODULE (Edit Profile)----------------------------------

// ------- profile modal ----------
const profileEditButton = document.querySelector(".profile__edit-btn");
const editModalCloseButton = document.querySelector(".modal__button-close");
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
editModalCloseButton.addEventListener("click", () => {
  closeModal(editModal);
});
profileForm.addEventListener("submit", handleProfileFormSubmit);

// ------- add-card modal ----------
const profileNewPostButton = document.querySelector(".profile__new-post-btn");
const profileAddCardForm = document.querySelector("#add-card-form");
const cardLink = document.querySelector(".card__image");
const cardCaption = document.querySelector(".card__title");
const addCardModal = document.querySelector("#add-card-modal");
const addCardLinkInput = document.querySelector("#profile-add-card-link-input");
const addCardCaptionInput = document.querySelector(
  "#profile-add-card-caption-input"
);
const addCardModalCloseButton = document.querySelector(".modal__button-close");

function handleAddCardSubmit(evt) {
  evt.preventDefault();

  // const inputValues = {title addCardCaptionInput.value, link: addCardLinkInput.value};
  // const cardElement = getCardElement(inputValues);
  // cardsList.prepend(cardElement);

  // cardLink.src = addCardLinkInput.value;
  // cardLink.alt = addCardCaptionInput.value;
  // cardCaption.textContent = addCardCaptionInput.value;
  closeModal(addCardModal);
}

profileNewPostButton.addEventListener("click", () => {
  // addCardLinkInput.value = cardLink.src;
  // addCardCaptionInput.value = cardLink.src;
  // addCardCaptionInput.value = cardCaption.textContent;
  openModal(addCardModal);
});

addCardModalCloseButton.addEventListener("click", () => {
  closeModal(addCardModal);
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
  // TODO - download the delete button from the figma and upload and style it
  // TODO - select the delete button

  cardNameEl.textContent = data.name;
  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;

  cardLikeBtn.addEventListener("click", () => {
    cardLikeBtn.classList.toggle("card__like-button_liked");
  });

  // TODO - set the listener on delete button
  // The handler should remove the card from the DOM (see basics of the dom in sprint 4 for removiong elements from the dom)

  return cardElement;
}

initialCards.forEach((item) => {
  const cardElement = getCardElement(item);
  cardsList.prepend(cardElement);
});

// for (let i = 0; i < initialCards.length; i++) {
//   const cardElement = getCardElement(initialCards[i]);
//   cardsList.prepend(cardElement);
// }

// --------------------------CARD LIKE BUTTON----------------------------

// function getCardElement(data) {
//   const cardElement = cardTemplate.content
//     .querySelector(".card")
//     .cloneNode(true);

//   // additional code

//   return cardElement;
// }
