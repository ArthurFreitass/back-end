// INSTRUÇÕES

// Solicite ao usuário seu nome e ano de nascimento.
// Verifique se o usuário é maior de idade:

// Se o usuário for maior de idade:
// Exiba uma mensagem de boas-vindas.
// Solicite um nome de usuário e uma senha.
// Salve esses dados em um objeto para uso posterior.

// Se o usuário for menor de idade:
// Exiba uma mensagem informando a proibição de login.
// Teste com 3 usuários diferentes
// Converta este objeto para JSON

// Recuperar os valores

const input_Name = document.getElementById('input-text')
const input_Year = document.getElementById('input-date')
const formSend = document.getElementById('form')
// Evento

const actionUser = (event) => {
    event.preventDefault()
    const nameUser = input_Name.value
    const dateUser = Number(input_Year.value)
    if (dateUser < 1930 || dateUser >= 2025) {
        alert('ERRO: Data inválida.')
    } else if (2025 - dateUser >= 18) {      
        alert('Boas-Vindas')
        let userPassword = prompt('Digite sua senha:')
        const obj = {
            Nome: nameUser,
            Senha: userPassword
            }
            // Convertendo
            const json = JSON.stringify(obj)
    } else {
        alert('Login Proíbido - site para maiores')
    }
}

formSend.addEventListener('submit', actionUser)