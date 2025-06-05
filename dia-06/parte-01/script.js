
class Forma {
  calcularArea() {
    throw new Error("Método calcularArea() precisa ser implementado na subclasse.");
  }
}

// Classe Retângulo
class Retangulo extends Forma {
  constructor(largura, altura) {
    super();
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea() {
    return this.largura * this.altura;
  }
}

// Classe Círculo
class Circulo extends Forma {
  constructor(raio) {
    super();
    this.raio = raio;
  }

  calcularArea() {
    return Math.PI * Math.pow(this.raio, 2);
  }
}

// Classe Triângulo
class Triangulo extends Forma {
  constructor(base, altura) {
    super();
    this.base = base;
    this.altura = altura;
  }

  calcularArea() {
    return (this.base * this.altura) / 2;
  }
}

// Testando as formas
const formas = [
  new Retangulo(7, 5),
  new Circulo(3),
  new Triangulo(3, 4)
];

formas.forEach((forma, index) => {
  console.log(`Área da forma ${index + 1}: ${forma.calcularArea().toFixed(2)}`);
});
