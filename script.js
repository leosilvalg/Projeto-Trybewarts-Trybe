const email = document.getElementById('email');
const senha = document.getElementById('senha');
const botao = document.getElementById('botao');
const botaoSubmit = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');
const texto = document.querySelector('#textarea');
const numeroChar = document.querySelector('#counter');

// Login do Header
botao.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
});

// Habilitando o botão de agreement
// No carregamento da página, defino o botão como estando desabilitado
botaoSubmit.disabled = true;
agreement.addEventListener('click', (e) => {
  // Se o checkbox for marcado, eu habilito, do contrario, continua desabilitado.
  if (e.target.checked) botaoSubmit.disabled = false;
  else botaoSubmit.disabled = true;
});

// Bonus 20. Contador.
function contador() {
  // Eu retirei a ideia de subtrair o valor máximo pela entrada de caracteres desta fonte : https://stackoverflow.com/questions/14086546/textarea-character-count-using-javascript
  const maximo = 500;
  const digitados = texto.value.length;
  numeroChar.innerHTML = maximo - digitados;
}
texto.addEventListener('input', contador);
