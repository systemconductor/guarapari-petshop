(() => {
  const choices = [...document.querySelectorAll('.practice-choice')];
  const selectedTitle = document.querySelector('#selected-title');
  const selectedCopy = document.querySelector('#selected-copy');
  const selectedLink = document.querySelector('#selected-link');
  const selectedImage = document.querySelector('#practice-image');
  const form = document.querySelector('#consultation-form');
  const formNote = document.querySelector('#form-note');
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('.nav');
  let selected = choices[0];
  if (menu) menu.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menu.setAttribute('aria-expanded', String(open));
  });
  const images = { family:'assets/family-law.jpg', corporate:'assets/corporate-law.jpg', criminal:'assets/criminal-defence.jpg', injury:'assets/personal-injury.jpg', realestate:'assets/corporate-law.jpg' };
  const setArea = (button) => {
    if (!button) return;
    selected = button;
    choices.forEach((item) => item.classList.toggle('is-active', item === button));
    selectedTitle.textContent = button.dataset.title;
    selectedCopy.textContent = button.dataset.copy;
    selectedLink.firstChild.textContent = 'View more detail ';
    selectedImage.src = images[button.dataset.area];
    selectedImage.alt = `${button.dataset.title} consultation`;
  };
  choices.forEach((button) => button.addEventListener('click', () => setArea(button)));
  selectedLink.addEventListener('click', () => {
    const message = document.querySelector('textarea[name="message"]');
    if (message && !message.value) message.value = `Gostaria de conversar sobre ${selected.dataset.title.toLowerCase()}.`;
  });
  if (form) form.addEventListener('submit', (event) => {
    event.preventDefault();
    formNote.textContent = 'Obrigado. Sua solicitação está pronta para análise. Este demo não transmite informações pessoais.';
    form.reset();
  });
})();
