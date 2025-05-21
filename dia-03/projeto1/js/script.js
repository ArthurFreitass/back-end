// Recuperar o elemento pai

const footer = document.querySelector('footer')

// Adicionando última linha

const spanText = document.createElement('span')
spanText.innerHTML = '2025'
footer.appendChild(spanText)