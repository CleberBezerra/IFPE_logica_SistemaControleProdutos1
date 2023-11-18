// import prompt from 'prompt';
const prompt = require('prompt-sync')();

// array vazio
let produto = [];

// adc produto 
for (let i=0; i<=10; i++) {
    produto.push(prompt("Digite o produto: "));
}

// listar produtos
console.log(produto);