const BOTAO_LOGIN = document.querySelector('.btn-login');


BOTAO_LOGIN.addEventListener('click', () => {
  const EMAIL_HEADER = document.getElementById('email');
  const SENHA_HEADER = document.getElementById('senha');
  if (EMAIL_HEADER.value === 'tryber@teste.com' && SENHA_HEADER.value === '123456') {
    alert('Olá, Tryber!');
    window.open('./index.html', '_self');
  } else {
    alert('Email ou senha inválidos.');
  }
  EMAIL_HEADER.value = '';
  SENHA_HEADER.value = '';
});
  