// -------------------------OPEN/CLOSE MODULE----------------------------------

const profileEditButton = document.querySelector(".profile__edit-btn");
const profileModal = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modal__button-close");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const editModalNameInput = document.querySelector("#profile-name-input");
const editModalDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileForm = document.querySelector("#profile-form");

function openModal() {
  editModalNameInput.value = profileName.textContent;
  editModalDescriptionInput.value = profileDescription.textContent;
  profileModal.classList.add("modal_opened");
}

function closeModal() {
  profileModal.classList.remove("modal_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editModalNameInput.value;
  profileDescription.textContent = editModalDescriptionInput.value;
  closeModal();
}

profileEditButton.addEventListener("click", openModal);
modalCloseButton.addEventListener("click", closeModal);
profileForm.addEventListener("submit", handleProfileFormSubmit);

// ------------------------------ARRAY----------------------------------

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

  cardNameEl.textContent = data.name;
  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;

  return cardElement;
}

for (let i = 0; i < initialCards.length; i++) {
  const cardElement = getCardElement(initialCards[i]);
  cardsList.prepend(cardElement);
}
