const body = document.body;
const openButton = document.querySelector('#openButton');



openButton.addEventListener('click' , e => {
  const modalMenu = document.createElement('div');
  body.appendChild(modalMenu);
  const template = document.querySelector('#modal-menu');
  modalMenu.innerHTML = template.innerHTML;
  const closeButton = modalMenu.querySelector('.close');

  closeButton.addEventListener('click' , e => {
    e.preventDefault();
    body.removeChild(modalMenu);
  });

});






