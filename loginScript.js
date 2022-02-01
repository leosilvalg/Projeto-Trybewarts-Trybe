const BOTAO_LOGIN = document.querySelector('.btn-login');

const LOGIN = () => {
  const EMAIL_HEADER = document.getElementById('email');
  const SENHA_HEADER = document.getElementById('senha');
  if (EMAIL_HEADER.value === 'tryber@teste.com' && SENHA_HEADER.value === '123456') {
    window.open('./Formulario/index.html', '_self');
  } else {
    alert('Email ou senha inválidos.');
  }
  EMAIL_HEADER.value = '';
  SENHA_HEADER.value = '';
}

BOTAO_LOGIN.addEventListener('click', LOGIN);

document.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) LOGIN();
});
