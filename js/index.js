 
function initialLoad () {
  getJson('thumbnail-list')
  getJson('thumbnail-list-next');

  const nextButton = document.getElementById('next-button');

  nextButton.addEventListener('click', (el) => {
    const thumbnailList = document.getElementById('thumbnail-list');
    thumbnailList.style.marginLeft = '-150%';
    thumbnailList.style.position = 'absolute';

    const thumbnailListNext = document.getElementById('thumbnail-list-next');

    thumbnailListNext.style.marginLeft = '0%';
    thumbnailListNext.style.position = 'relative';

    setTimeout(replaceIds, 1000);
  }, true)
}

function getJson (elementId) {
  return fetch("./assets/data/dogs.json")
    .then(response => response.json())
    .then(json => {
      console.log(json);
      createCards(json, elementId)
    });
}

/** Thumbnail Functions */

function replaceIds () {
  const thumbnailListContainer = document.getElementById('thumbnail-list-container');
  const thumbnailListPrev = document.getElementById('thumbnail-list-prev');
  thumbnailListContainer.removeChild(thumbnailListPrev);

  const thumbnailList = document.getElementById('thumbnail-list');
  const thumbnailListNext = document.getElementById('thumbnail-list-next');

  thumbnailList.setAttribute('id', 'thumbnail-list-prev');
  thumbnailList.setAttribute('class', 'thumbnail-list-prev');
  
  thumbnailListNext.setAttribute('id', 'thumbnail-list');
  thumbnailListNext.setAttribute('class', 'thumbnail-list');

  const newThumbnailListNext = document.createElement('div');

  newThumbnailListNext.setAttribute('class', 'thumbnail-list-next');
  newThumbnailListNext.setAttribute('id', 'thumbnail-list-next');

  thumbnailListContainer.appendChild(newThumbnailListNext);
  getJson('thumbnail-list-next');
}

/** Card Functions */

function createCards (data, elementId) {
  console.log('Creating cards...');
  const thumbnailList = document.getElementById(elementId);
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