// Crie um contador de 1 a 100 de 5 em 5 exibindo apenas os números pares

function countPair() {
    for (let index = 1; index <= 100; index += 5) {
        if (index % 2 == 0) {
            console.log(`${index}`);
        }
    }
}
console.log('Os pares são:');
countPair()