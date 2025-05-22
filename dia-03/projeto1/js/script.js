const footer = document.querySelector('footer')

const spanText = document.createElement('span')
spanText.innerHTML = 'Criado no ano de 2025'
footer.appendChild(spanText)

const body = document.querySelector('body')
const main = document.querySelector('main')
console.log(main);

const buttonTheme = document.getElementById('button-theme')
const buttonForms = document.getElementById('button')

window.onload = () => {
    const themeSave = localStorage.getItem('theme')
    if (themeSave == 'light') {
        body.style.backgroundColor = '#fff'
        main.style.color = 'black'
        buttonTheme.innerHTML = '🌙'
    } else if (themeSave == 'dark') {
        body.style.backgroundColor = "#000"
        main.style.color = '#fff'
        buttonTheme.innerHTML = '☀️'
    } else {
        localStorage.setItem('theme', 'light')
    }
}

const alterTheme = () => {
    const themeSave = localStorage.getItem('theme')
    if (themeSave == 'light') {
        body.style.backgroundColor = '#000'
        main.style.color = '#fff'
        buttonTheme.innerHTML = '☀️'
        localStorage.setItem('theme', 'dark')
    } else {
        body.style.backgroundColor = '#fff'
        main.style.color = '#000'
        buttonTheme.innerHTML = '🌙'
        localStorage.setItem('theme', 'light')
    }
}

buttonTheme.addEventListener('click', alterTheme)