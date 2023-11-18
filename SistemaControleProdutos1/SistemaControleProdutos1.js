// import prompt from 'prompt';
const prompt = require('prompt-sync')();

// array vazio // escopo global
let produto = [];

// cadastrar produto
const cadastrar = ()=>{
    // adc produto 
    for (let i=1; i<=5; i++) {
        produto.push(prompt("Digite o produto: "));
    }
}

// listar produtos
const listar = ()=> console.log(produto);

cadastrar();
listar();