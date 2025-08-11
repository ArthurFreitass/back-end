const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

const boxText = document.getElementById('boxText');
const boxImage = document.getElementById('boxImage');

btn1.addEventListener('click', () => {
  boxText.textContent = 'Conteúdo da Opção 1: descrição e detalhes sobre o primeiro tema.';
  boxImage.src = 'img/foto1.jpg';
  boxImage.alt = 'Imagem da Opção 1';
});

btn2.addEventListener('click', () => {
  boxText.textContent = 'Conteúdo da Opção 2: aqui temos outro texto e uma imagem diferente.';
  boxImage.src = 'img/foto2.jpg';
  boxImage.alt = 'Imagem da Opção 2';
});

btn3.addEventListener('click', () => {
  boxText.textContent = 'Conteúdo da Opção 3: texto e imagem atualizados para a terceira opção.';
  boxImage.src = 'img/foto3.jpg';
  boxImage.alt = 'Imagem da Opção 3';
});
