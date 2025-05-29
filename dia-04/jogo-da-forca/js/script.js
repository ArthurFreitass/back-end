// --- Interface Básica (HTML + CSS) ---

// Local para exibir a palavra secreta com letras substituídas por traços (_)

// Campo ou botões para o usuário inserir letras

// Espaço para exibir as letras erradas já tentadas

// Contador de erros (limite de 6 tentativas)

// Botão de "Reiniciar" ou "Novo Jogo"


// Adicionar as palavras a serem descobertas

const palavrasJogo = ['garrafa', 'bola', 'tubarao', 'leao', 'árvore', 'carro']
let palavraAtual = ''
let letrasCorretas = []
let letrasErradas = []
const tentativasRestantes = 6

// Escolher palavra

function escolherPalavra() {
    const index = Math.floor(Math.random() * palavrasJogo.length);
    palavraAtual = palavrasJogo[index]
    letrasCorretas = []
    letrasErradas = []
    tentativasRestantes = 6
    // Chamar função
    atualizarTela()
}

function atualizarTela() {
    const display = palavraAtual.split('').map(letra => letrasCorretas.includes(letra) ? letra : "_")
    document.getElementById("palavra-secreta").textContent = display;
}