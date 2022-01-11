const email = document.getElementById('email');
const senha = document.getElementById('senha');
const botao = document.getElementById('botao');

botao.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
});
