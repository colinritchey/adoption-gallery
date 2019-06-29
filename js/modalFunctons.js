 
function openModal (el) {
  const clickedTarget = el.target;
  if (!clickedTarget) return null;

  const link = clickedTarget.getAttribute('src');
  const source = clickedTarget.dataset.source;

  if (!link) return null;

  const modalContainer = document.getElementById('modal-container');
  modalContainer.style.visibility = 'visible';

  const modal = document.getElementById('modal');
  const img = document.createElement('img');
  const sourceLink = document.createElement('a');

  img.setAttribute('src', link);
  sourceLink.setAttribute('src', source);
  sourceLink.innerHTML = "Source";
  
  modal.appendChild(img);
  modal.appendChild(sourceLink);
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
  const sourceLink = modal.getElementsByTagName('a')[0];

  modal.removeChild(img);
  modal.removeChild(sourceLink);

  const modalContainer = document.getElementById('modal-container');
  modalContainer.style.visibility = 'hidden';
  modal.style.marginTop = "100%";
}