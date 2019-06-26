 
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