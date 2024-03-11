function fibonacci(n) {
    let sequencia = [0, 1];

    for (let i = 2; i < n; i++) {
        sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
    }

    return sequencia;
}

const numero = 15;
const sequenciaFibonacci = fibonacci(numero);
if (sequenciaFibonacci.includes(numero)) {
    console.log(`${numero} está na sequência de Fibonacci.`);
} else {
    console.log(`${numero} não está na sequência de Fibonacci.`);
}