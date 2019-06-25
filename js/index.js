// import dogData from '..assets/data/dogs.json';
// import json from './data/dogs.json'; 

function createCards (data) {
  console.log('Creating cards...');
  const thumbnailList = document.getElementById('thumbnail-list');

  data.dogs.map((value, idx) => {
    thumbnailList.appendChild(createCard(value.image));
  });

  // document.addEventListener('click', openModal, true);
}

function createCard (link) {
  const card = document.createElement('div');
  const img = document.createElement('img');
  img.setAttribute('src', link);
  // img.setAttribute('class', 'thumbnail-card');
  img.setAttribute('width', '100px');
  img.setAttribute('height', '100px');
  
  card.setAttribute('class', 'thumbnail-card')
  card.setAttribute('data-link', link)
  card.appendChild(img);

  card.addEventListener('click', openModal, true);
  return card;
}

function parseJson (data) {
  console.log(data);
}

function getJson () {
  fetch("./assets/data/dogs.json")
    .then(response => response.json())
    .then(json => {
      console.log(json);
      createCards(json)

    });
}

function openModal (el) {
  // const img = el.target.querySelector(img);
  // const link = img.getAttribute('src');

  const modalContainer = document.getElementById('modal-container');
  modalContainer.style.visibility = 'visible';

  const modal = document.getElementById('modal');
  const img = document.createElement('img');
  const link = el.target.getAttribute('src');

  img.setAttribute('src', link);
  // img.setAttribute('class', 'thumbnail-card');
  img.setAttribute('width', '100px');
  img.setAttribute('height', '100px');
  
  modal.appendChild(img);

  // console.log(el.target.getAttribute('src'));
}