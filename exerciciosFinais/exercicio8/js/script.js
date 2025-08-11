const btnAdicionar = document.getElementById('btnAdicionar');
const inputComentario = document.getElementById('inputComentario');
const listaComentarios = document.getElementById('listaComentarios');

btnAdicionar.addEventListener('click', () => {
  const texto = inputComentario.value.trim();
  if (texto === '') {
    alert('Por favor, digite um comentário antes de adicionar.');
    return;
  }

  adicionarComentario(texto);
  inputComentario.value = '';
  inputComentario.focus();
});

function adicionarComentario(texto) {
  // Cria o container do comentário
  const divComentario = document.createElement('div');
  divComentario.classList.add('comentario');

  // Cria o texto do comentário
  const pTexto = document.createElement('p');
  pTexto.classList.add('textoComentario');
  pTexto.textContent = texto;

  // Botão editar
  const btnEditar = document.createElement('button');
  btnEditar.classList.add('btnAcao');
  btnEditar.textContent = 'Editar';
  btnEditar.onclick = () => {
    const novoTexto = prompt('Edite seu comentário:', pTexto.textContent);
    if (novoTexto !== null && novoTexto.trim() !== '') {
      pTexto.textContent = novoTexto.trim();
    }
  };

  // Botão remover
  const btnRemover = document.createElement('button');
  btnRemover.classList.add('btnAcao');
  btnRemover.textContent = 'Remover';
  btnRemover.onclick = () => {
    if (confirm('Tem certeza que quer remover este comentário?')) {
      listaComentarios.removeChild(divComentario);
    }
  };

  // Adiciona elementos
  divComentario.appendChild(pTexto);
  divComentario.appendChild(btnEditar);
  divComentario.appendChild(btnRemover);

  listaComentarios.appendChild(divComentario);
}

