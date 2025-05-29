// Criar funções para calcular

const areaCirculo = (raio) => {
    return raio * raio * 3.14
}

const areaTriangulo = (altura, base) => {
    return altura * base / 2
}

const areaRetangulo = (base, altura) => {
    return base * altura
}

// Recuperar o botão

const buttonCalculator = document.getElementById('button-calculation')

// Criar a função com loops

function result() {
    let continuar = 's'
    while (continuar == 's') {
        const choiceUser = prompt(`Digite:
            [1 para Área do Triângulo]
            [2 para Área do Círculo]
            [3 para Área do Retângulo]`)
        let choice = Number(choiceUser)
        if (isNaN(choice)) {
        alert('ERRO')
    } else {
        switch (choice) {
            case 1: {
                let h = prompt('Digite uma altura:')
                let alturaReal = Number(h)
                if (isNaN(alturaReal)) {
                    alert('ERRO: digite um valor válido.')
                } else {
                    let b = prompt('Digite uma base:')
                    let base = Number(b)
                    if (isNaN(base)) {
                        alert('ERRO: digite um valor válido.')
                    } else {
                        let areaTotal = areaTriangulo(alturaReal, base)
                        alert(`Área = ${areaTotal} m2`)
                    }
                }
                break
            }
            case 2: {
                let r = prompt('Digite um raio para o círculo:')
                let raio = Number(r)
                if (isNaN(raio)) {
                    alert('ERRO: digite um valor válido.')
                } else {
                    let areaTotal = areaCirculo(raio)
                    alert(`Área = ${areaTotal}`)
                }
                break
            }
            case 3: {
                let h = prompt('Digite uma altura:')
                let alturaReal = Number(h)
                if (isNaN(alturaReal)) {
                    alert('ERRO: digite um valor válido.')
                } else {
                    let b = prompt('Digite uma base:')
                    let base = Number(b)
                    if (isNaN(base)) {
                        alert('ERRO: digite um valor válido.')
                    } else {
                        let areaTotal = areaRetangulo(alturaReal, base)
                        alert(`Área = ${areaTotal} m2`)
                    }
                }
                break
            }
        }
        continuar = prompt('Quer continuar? [s/sim] [n/não]')
    }
}
}


buttonCalculator.addEventListener('click', result)