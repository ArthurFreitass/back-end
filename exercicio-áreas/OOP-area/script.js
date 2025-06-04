// Criando a classe

class areaCalculator {
    constructor() {
        this.continuar = 's'
    }

    // Métodos

    triangleArea(base, altura) {
        return base * altura / 2
    }

    circleArea(raio) {
        return raio * raio * 3.14
    }

    retangleArea(base, altura) {
        return base * altura
    }

    // Solicitar número
    requestNumber(mensagem) {
        let number = Number(prompt(mensagem))
        if (isNaN(number)) {alert('ERRO')}
        return number
    }

    // Método de execução

    executor() {
        while (this.continuar == 's') {
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
                        let h = this.requestNumber('Digite uma altura:')
                        if (isNaN(h)) {
                            alert('ERRO: digite um valor válido.')
                        } else {
                            let b = this.requestNumber('Digite uma base:')
                            if (isNaN(b)) {
                                alert('ERRO: digite um valor válido.')
                            } else {
                                let areaTotal = this.triangleArea(h,b)
                                alert(`Área = ${areaTotal} m2`)
                            }
                        }
                        break
                    }
                    case 2: {
                        let r = this.requestNumber('Digite um raio para o círculo:')
                        if (isNaN(r)) {
                            alert('ERRO: digite um valor válido.')
                        } else {
                            let areaTotal = this.circleArea(r)
                            alert(`Área = ${areaTotal}`)
                        }
                        break
                    }
                    case 3: {
                        let h = this.requestNumber('Digite uma altura:')
                        if (isNaN(h)) {
                            alert('ERRO: digite um valor válido.')
                        } else {
                            let b = this.requestNumber('Digite uma base:')
                            if (isNaN(b)) {
                                alert('ERRO: digite um valor válido.')
                            } else {
                                let areaTotal = this.retangleArea(h, b)
                                alert(`Área = ${areaTotal} m2`)
                            }
                        }
                        break
                    }
                }
                this.continuar = prompt('Quer continuar? [s/sim] [n/não]')
            }

        }
    }
}

// Objeto

const buttonCalculator = document.getElementById('button-calculation')
const calculadora = new areaCalculator()

buttonCalculator.addEventListener('click', () => calculadora.executor())