let palavra = "palavra";
let palavraInvertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
}

console.log("String original: " + palavra);
console.log("String invertida: " + palavraInvertida);
