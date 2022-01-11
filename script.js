const email = document.getElementById('email');
const senha = document.getElementById('senha');
const botao = document.getElementById('botao');
const botaoSubmit = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');

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
