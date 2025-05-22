// Recuperar o elemento pai

const footer = document.querySelector('footer')

// Adicionando última linha

const spanText = document.createElement('span')
spanText.innerHTML = 'Criado no ano de 2025'
footer.appendChild(spanText)