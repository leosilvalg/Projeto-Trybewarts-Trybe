const BOTAO_LOGIN = document.getElementById('botao');
const BOTAO_FORMULARIO = document.querySelector('#submit-btn');
const AGREEMENT = document.querySelector('#agreement');
const CAIXA_TEXTO = document.querySelector('#textarea');
const CONTADOR_LETRAS = document.querySelector('#counter');
const FORMULARIO = document.querySelector('.evaluation-form');
const PRIMEIRO_NOME = document.getElementById('input-name');
const SOBRENOME = document.getElementById('input-lastname');
const EMAIL_FORMS = document.querySelector('#input-email');
const CASAS_FORMS = document.querySelector('#house');

BOTAO_FORMULARIO.disabled = true;
AGREEMENT.addEventListener('click', (e) => {
  if (e.target.checked) BOTAO_FORMULARIO.disabled = false;
  else BOTAO_FORMULARIO.disabled = true;
});

function contador() {
  const CARACTERES_MAXIMO = 500;
  const CARACTERES_DIGITADOS = CAIXA_TEXTO.value.length;
  CONTADOR_LETRAS.innerHTML = CARACTERES_MAXIMO - CARACTERES_DIGITADOS;
}
CAIXA_TEXTO.addEventListener('input', contador);

const NOVA_DIV = document.createElement('div');

function nomeCompleto() {
  const PARAGRAFO_NOME = document.createElement('p');
  PARAGRAFO_NOME.innerHTML = `Nome: ${PRIMEIRO_NOME.value} ${SOBRENOME.value}`;
  NOVA_DIV.appendChild(PARAGRAFO_NOME);
}

function email() {
  const PARAGRAFO_EMAIL = document.createElement('p');
  PARAGRAFO_EMAIL.innerHTML = `Email: ${EMAIL_FORMS.value}`;
  NOVA_DIV.appendChild(PARAGRAFO_EMAIL);
}

function casa() {
  const PARAGRAFO_CASA = document.createElement('p');
  PARAGRAFO_CASA.innerHTML = `Casa: ${CASAS_FORMS.value}`;
  NOVA_DIV.appendChild(PARAGRAFO_CASA);
}

function familia() {
  const FAMILIAS_FORMS = document.querySelector('input[name=family]:checked');
  const PARAGRAFO_FAMILIAS = document.createElement('p');
  PARAGRAFO_FAMILIAS.innerHTML = `Família: ${FAMILIAS_FORMS.value}`;
  NOVA_DIV.appendChild(PARAGRAFO_FAMILIAS);
}

function conteudo() {
  const DISCIPLINAS = document.querySelectorAll('.subject:checked');
  const TOTAL_DISCIPLINAS = [];
  for (let i = 0; i < DISCIPLINAS.length; i += 1) {
    if (DISCIPLINAS[i].checked === true) TOTAL_DISCIPLINAS.push(DISCIPLINAS[i].value);
  }
  const PARAGRAFO_DISCIPLINAS = document.createElement('p');
  PARAGRAFO_DISCIPLINAS.innerHTML = `Matérias: ${TOTAL_DISCIPLINAS.join(', ')}`;
  NOVA_DIV.appendChild(PARAGRAFO_DISCIPLINAS);
}

function avalicao() {
  const AVALIACAO_FORMS = document.querySelector('input[name=rate]:checked');
  const PARAGRAFO_AVALIACAO = document.createElement('p');
  PARAGRAFO_AVALIACAO.innerHTML = `Avaliação: ${AVALIACAO_FORMS.value}`;
  NOVA_DIV.appendChild(PARAGRAFO_AVALIACAO);
}

function text() {
  const CAIXATEXTO_PARAGRAFO = document.createElement('p');
  CAIXATEXTO_PARAGRAFO.innerHTML = `Observações: ${CAIXA_TEXTO.value}`;
  NOVA_DIV.appendChild(CAIXATEXTO_PARAGRAFO);
}

function enviar(e) {
  e.preventDefault();
  nomeCompleto();
  email();
  casa();
  familia();
  conteudo();
  avalicao();
  text();
  FORMULARIO.innerHTML = ''
  FORMULARIO.appendChild(NOVA_DIV);
}
BOTAO_FORMULARIO.addEventListener('click', enviar);
