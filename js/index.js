// import dogData from '..assets/data/dogs.json';
// import json from './data/dogs.json'; 

function createCards (data) {
  console.log('Creating cards...');
  const thumbnailList = document.getElementById('thumbnail-list');

  data.dogs.map((value, idx) => {
    thumbnailList.appendChild(createCard(value.image));
  })
}

function createCard (link) {
  const card = document.createElement('div');
  const img = document.createElement('img');
  img.setAttribute('src', link);
  // img.setAttribute('class', 'thumbnail-card');
  img.setAttribute('width', '100px');
  img.setAttribute('height', '100px');
  
  card.setAttribute('class', 'thumbnail-card')
  card.appendChild(img);

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

// function loadJSON(path, callback) {   

//   var xobj = new XMLHttpRequest();
//   xobj.overrideMimeType("application/json");
//   xobj.open('GET', path, true); // Replace 'my_data' with the path to your file
  
//   // xobj.setRequestHeader('Access-Control-Allow-Headers', 'Origin');
//   // xobj.setRequestHeader('Content-Type', 'application/json');
//   xobj.setRequestHeader("Access-Control-Allow-Methods", "GET");
//   xobj.setRequestHeader("Access-Control-Allow-Headers", "*");
  
//   xobj.onreadystatechange = function () {
//     if (xobj.readyState == 4 && xobj.status == "200") {
//       // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//       callback(xobj.responseText);
//     }
//   };
//   xobj.send(null);  
// }