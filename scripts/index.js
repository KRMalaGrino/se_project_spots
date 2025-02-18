// -------------------------OPEN/CLOSE MODULE----------------------------------

const profileEditButton = document.querySelector(".profile__edit-btn");
const modalOpen = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modal__button-close");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const editModalNameInput = document.querySelector("#profile-name-input");
const editModalDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const editFormElement = document.querySelector(".modal__form");

function openModel() {
  editModalNameInput.value = profileName.textContent;
  editModalDescriptionInput.value = profileDescription.textContent;
  modalOpen.classList.add("modal_opened");
}

function closeModel() {
  modalOpen.classList.remove("modal_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editModalNameInput.value;
  profileDescription.textContent = editModalDescriptionInput.value;
  closeModel();
}

profileEditButton.addEventListener("click", openModel);
modalCloseButton.addEventListener("click", closeModel);
editFormElement.addEventListener("submit", handleProfileFormSubmit);

// ------------------------------ARRAY----------------------------------

const initialCards = [
  {
    name: "Joseph, OR",
    link: "https://unsplash.com/photos/a-view-of-a-mountain-range-with-a-lake-in-the-foreground-hus3TC-C3RQ",
  },
  {
    name: "Oregon Coast",
    link: "https://unsplash.com/photos/black-rock-formation-on-body-of-water-during-daytime-IdEV3S3JkyU",
  },
  {
    name: "Tumalo Falls, OR",
    link: "https://unsplash.com/photos/green-trees-near-waterfalls-during-daytime-sbH8xclbcTY",
  },
  {
    name: "Central Oregon Cascade Range",
    link: "https://unsplash.com/photos/brown-mountains-7kh9KKPWBaQ",
  },
  {
    name: "Multnomah Falls, OR",
    link: "https://unsplash.com/photos/waterfall-in-forest-jQ5mIxOgzBE",
  },
  {
    name: "Southern Oregon",
    link: "https://unsplash.com/photos/the-sun-is-shining-through-the-trees-in-the-field-EqOOC2-0qjc",
  },
];
console.log(initialCards);

// --------------------------CARD TEMPLATES-------------------------------

const cardTemplate = document.querySelector("#card-template");
const cardList = document.querySelector(".cards__list");

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameEl = cardElement.querySelector(".card__title");
  const imageElement = cardTemplate.querySelector(".card__image");

  cardNameEl.textContent = data.name;

  return cardElement;
}

for (let i = 0; i < initialCards.length; i++) {
  const cardElement = getCardElement(initialCards(i));
  cardslist.prepend(cardElement);
}
