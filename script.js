const email = document.querySelector('#email');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('#loginBtn');

function loginValidation() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Email ou senha inválidos.');
}

loginBtn.addEventListener('click', loginValidation);

/* Referência: https://stackoverflow.com/questions/18110865/how-to-disable-enable-a-button-with-a-checkbox-if-checked */

const agreementCheckBox = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

agreementCheckBox.addEventListener('change', () => {
  if (agreementCheckBox.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

textArea.addEventListener('keyup', () => {
  counter.innerHTML = (500 - textArea.value.length);
});
