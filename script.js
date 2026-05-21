const genButtons = document.querySelectorAll('.gen-toggle');
let selectedGen = 'I';

genButtons.forEach(button => {
  button.addEventListener('click', () => {
    selectedGen = button.dataset.gen;
    genButtons.forEach(btn => btn.classList.toggle('active', btn === button));
    showMessage(`Gen ${selectedGen} seleccionada.`);
  });
});

function showMessage(text) {
  const notice = document.createElement('div');
  notice.className = 'toast-notice';
  notice.textContent = text;
  document.body.appendChild(notice);

  setTimeout(() => {
    notice.classList.add('visible');
  }, 10);

  setTimeout(() => {
    notice.classList.remove('visible');
    setTimeout(() => document.body.removeChild(notice), 200);
  }, 2400);
}

const actions = {
  continueBtn: 'Continuar partida',
  normalBtn: 'Modo normal',
  nuzlockeBtn: 'Modo Nuzlocke',
  battleBtn: 'Torre de batalla'
};

Object.entries(actions).forEach(([id, label]) => {
  const button = document.getElementById(id);
  if (!button) return;

  button.addEventListener('click', () => {
    showMessage(`${label} seleccionado. Gen ${selectedGen}.`);
  });
});
