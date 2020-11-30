const modalContainer = document.querySelector('.modal-container');
const showModalButton = document.querySelector('.show-modal-button');
const hideModalButton = document.querySelector('.hide-modal-button');

showModalButton.addEventListener('click', () => {
  console.log('fire');
  modalContainer.classList.toggle('dp-n');
});

hideModalButton.addEventListener('click', () => {
  modalContainer.classList.toggle('dp-n');
});
