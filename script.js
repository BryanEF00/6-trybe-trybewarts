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
  counter.innerHTML = 500 - textArea.value.length;
});

const nome = document.querySelector('#input-name');
const sobrenome = document.querySelector('#input-lastname');
const inputEmail = document.querySelector('#input-email');
const casa = document.querySelector('#house');
const materias = () => {
  const subject = document.querySelectorAll('input[class="subject"]:checked');
  const subjectList = [];

  for (let index = 0; index < subject.length; index += 1) {
    subjectList.push(subject[index].value);
  }
  return subjectList.join(', ');
};
/* const avaliação = document.querySelector('#input-name');
const observações = document.querySelector('#input-name');
 */
const form = document.querySelector('#evaluation-form');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();

  form.innerHTML = `<p>Nome: ${nome.value} ${sobrenome.value}</p>
  <p>Email: ${inputEmail.value}</p>
  <p>Casa: ${casa.value}</p>
  <p>Família: ${
  document.querySelector('input[name="family"]:checked').value
}</p>
  <p>Matérias: ${materias()}</p>
  <p>Avaliação: ${
  document.querySelector('input[name="rate"]:checked').value
}</p>
  <p>Observações: ${textArea.value}</p>`;
});
