const footer = document.querySelector('footer')

const spanText = document.createElement('span')
spanText.innerHTML = 'Criado no ano de 2025'
footer.appendChild(spanText)

const body = document.querySelector('body')
const main = document.querySelector('main')

const buttonTheme = document.getElementById('button-theme')
const buttonForms = document.getElementById('button-forms')

window.onload = () => {
    const themeSave = localStorage.getItem('theme')
    if (themeSave == 'light') {
        body.style.backgroundColor = '#fff'
        main.style.color = 'black'
        buttonTheme.innerHTML = '🌙'
        buttonForms.style.backgroundColor = '#e63946'
        buttonForms.style.color = 'white'
        buttonForms.style.cursor = 'pointer'
        buttonForms.style.padding = '8px'
    } else if (themeSave == 'dark') {
        body.style.backgroundColor = "#000"
        main.style.color = '#fff'
        buttonTheme.innerHTML = '☀️'
        buttonForms.style.backgroundColor = '#e63946'
        buttonForms.style.color = 'white'
        buttonForms.style.cursor = 'pointer'
        buttonForms.style.padding = '8px'

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
        buttonForms.style.backgroundColor = '#e63946'
        buttonForms.style.color = '#fff'
        buttonForms.style.padding = '8px'
        
        localStorage.setItem('theme', 'dark')
    } else {
        body.style.backgroundColor = '#fff'
        main.style.color = '#000'
        buttonTheme.innerHTML = '🌙'
        buttonForms.style.backgroundColor = '#e63946'
        buttonForms.style.color = 'white'
        buttonForms.style.padding = '8px'
        localStorage.setItem('theme', 'light')
    }
}

buttonTheme.addEventListener('click', alterTheme)