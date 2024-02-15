// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
const cardContainer = document.querySelector('.places__list');



function addCard({name, link}) {
const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
cardElement.querySelector('.card__image').src = link;
cardElement.querySelector('.card__title').textContent = name;
const cardDeleteButton = cardElement.querySelector('.card__delete-button');
cardDeleteButton.addEventListener('click', delCard);
cardContainer.append(cardElement);
}

const cardInfo = initialCards.map(function(item){
    return {
        name: item.name,
        link: item.link,
        
    };
});

function add() {
    cardInfo.forEach(addCard);
}

function delCard(event) {
    const delIcon = event.target.closest('.places__item');
     delIcon.remove();
}



add()


// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
