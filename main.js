import * as funcoes from './funcoes';
import {Admin, Usuario, usuarios} from './exercicios';

console.log(funcoes.default(5));
console.log(funcoes.soma(funcoes.default(5),2));
console.log(funcoes.sub(1,2));
console.log(funcoes.mult(1,2));

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

// Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
let idade=[];
usuarios.map((u) => {
    idade.push(u.idade);
});

let pessoa = usuarios.filter((u) => u.nome === 'Diego');

let pessoa = usuarios.filter((u) => u.nome === 'Diego');

console.log(idade);
console.log(pessoa);
