// Crie uma função simples que receba um nome via input e imprima a mensagem "Bem vindo Nome digitado"
// Recuperar os elementos

const inputName = document.getElementById('input-name')
const buttonSubmit = document.getElementById('button-submit')
// Passo dois

buttonSubmit.addEventListener('click', greeting => {
    let nameUser = inputName.value
    alert('Bem-Vindo ' + nameUser)
})