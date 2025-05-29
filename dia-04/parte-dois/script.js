// Crie um código que solicite ao usuário uma palavra
// E converta o texto digitado para upper case alternado ( uma letra por linha)
// De trás pra frente:

alert('Inversor de palavras')
const wordUser = prompt('Digite uma palavra:')

function invertWord(palavra) {
    let message = ""
    let arrayWord = palavra.split('').reverse()
    for (let index = 0; index < arrayWord.length; index += 1) {
       // Fazer Alternar
       if (index % 2 == 0) {
            message += arrayWord[index].toUpperCase()
       } else {
            message += arrayWord[index]
       }
    }
    alert(message)
}

invertWord(wordUser)

