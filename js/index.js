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
  const modalContainer = document.getElementById('modal-container');
  modalContainer.style.visibility = 'visible';

  const modal = document.getElementById('modal');
  const img = document.createElement('img');
  const link = el.target.getAttribute('src');

  img.setAttribute('src', link);
  
  modal.appendChild(img);

  modal.style.marginTop = "0%";

  document.body.style.overflow = 'hidden';
  
  const closeModalButton = document.getElementById('close-modal-button');
  closeModalButton.addEventListener('click', closeModal, true);
  
  /** Close Modal if outside click */
  modalContainer.addEventListener('click', handleOutsideClick, true);
}

function handleOutsideClick (el) {
  if (document.getElementById('modal').contains(event.target)) {
    console.log('clicked inside');
  } else {
    console.log('clicked outside');
    closeModal();
  }
}

function closeModal (el) {
  // el.preventDefault();
  document.body.style.overflow = 'auto';
  
  const modal = document.getElementById('modal');
  const img = modal.getElementsByTagName('img')[0];

  modal.removeChild(img);

  const modalContainer = document.getElementById('modal-container');
  modalContainer.style.visibility = 'hidden';
  modal.style.marginTop = "100%";
}