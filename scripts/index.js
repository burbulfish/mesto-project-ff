const cardTemplate = document.querySelector("#card-template").content;
const cardContainer = document.querySelector(".places__list");

function createCard(item) {
  const card = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = card.querySelector(".card__image");
  const cardTitle = card.querySelector(".card__title");
  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardTitle.textContent = item.name;
  const cardDeleteButton = card.querySelector(".card__delete-button");
  cardDeleteButton.addEventListener("click", delCard);
  return card;
}

function addCard(item) {
  const cardElement = createCard(item);
  cardContainer.append(cardElement);
}

function addCards() {
  initialCards.forEach(addCard);
}

function delCard(event) {
  const delCardElement = event.target.closest(".card");
  delCardElement.remove();
}

addCards();
