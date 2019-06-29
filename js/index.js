 
function initialLoad () {
  getJson('thumbnail-list')
  getJson('thumbnail-list-next');
  getJson('thumbnail-list-prev');

  document.getElementById('thumbnail-list-container').addEventListener('click', openModal, true);


  /**  Add Click action to next button */
  const nextButton = document.getElementById('next-button');

  nextButton.addEventListener('click', (el) => {
    const thumbnailList = document.getElementById('thumbnail-list');
    thumbnailList.style.marginLeft = '-150%';
    thumbnailList.style.position = 'absolute';

    const thumbnailListNext = document.getElementById('thumbnail-list-next');

    thumbnailListNext.style.marginLeft = '0%';
    thumbnailListNext.style.position = 'relative';

    setTimeout(() => replaceIds('next'), 1000);
  }, true)
  /** */


  /**  Add Click action to prev button */
  const prevButton = document.getElementById('prev-button');
  prevButton.addEventListener('click', (el) => {
    const thumbnailList = document.getElementById('thumbnail-list');
    thumbnailList.style.position = 'absolute';
    thumbnailList.style.marginLeft = '150%'; 

    const thumbnailListPrev = document.getElementById('thumbnail-list-prev');

    thumbnailListPrev.style.position = 'relative';
    thumbnailListPrev.style.marginLeft = '0%';

    setTimeout(() => replaceIds('prev'), 1000);
  }, true);
  /** */

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

function replaceIds (direction) {
  const thumbnailListContainer = document.getElementById('thumbnail-list-container');
  const thumbnailList = document.getElementById('thumbnail-list');
  const thumbnailListPrev = document.getElementById('thumbnail-list-prev');
  const thumbnailListNext = document.getElementById('thumbnail-list-next');

  if (direction === 'next') {
    thumbnailListContainer.removeChild(thumbnailListPrev);

    thumbnailList.setAttribute('id', 'thumbnail-list-prev');
    thumbnailList.setAttribute('class', 'thumbnail-list thumbnail-list-prev');
    
    thumbnailListNext.setAttribute('id', 'thumbnail-list');
    thumbnailListNext.setAttribute('class', 'thumbnail-list');

    const newThumbnailListNext = document.createElement('div');

    newThumbnailListNext.setAttribute('id', 'thumbnail-list-next');
    newThumbnailListNext.setAttribute('class', 'thumbnail-list  thumbnail-list-next');

    thumbnailListContainer.appendChild(newThumbnailListNext);
    getJson('thumbnail-list-next');
  } else {

    thumbnailListContainer.removeChild(thumbnailListNext);

    thumbnailList.setAttribute('id', 'thumbnail-list-next');
    thumbnailList.setAttribute('class', 'thumbnail-list thumbnail-list-next');
    
    thumbnailListPrev.setAttribute('id', 'thumbnail-list');
    thumbnailListPrev.setAttribute('class', 'thumbnail-list');

    const newThumbnailListPrev = document.createElement('div');

    newThumbnailListPrev.setAttribute('id', 'thumbnail-list-prev');
    newThumbnailListPrev.setAttribute('class', 'thumbnail-list thumbnail-list-prev');

    thumbnailListContainer.insertBefore(newThumbnailListPrev, document.getElementById('thumbnail-list'));
    
    getJson('thumbnail-list-prev');
  }
}

/** Card Functions */

function createCards (data, elementId) {
  console.log('Creating cards...');
  const thumbnailList = document.getElementById(elementId);
  data.dogs.map((value, idx) => {
    thumbnailList.appendChild(createCard(value));
  });
}

function createCard (value) {
  const { image, source } = value;

  const card = document.createElement('div');
  const img = document.createElement('img');
  // const sourceLink = document.createElement('a');
  img.setAttribute('src', image);
  img.setAttribute('width', '100px');
  img.setAttribute('height', '100px');
  img.setAttribute('data-source', source);
  
  card.setAttribute('class', 'thumbnail-card')
  card.appendChild(img);

  // sourceLink.setAttribute('src', source);
  // card.appendChild(sourceLink);
  return card;
}