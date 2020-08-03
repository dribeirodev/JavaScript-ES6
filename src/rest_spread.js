//REST
const usuario ={
    nome: 'Diego',
    idade: 32,
    cidade: 'Cianorte'
}

const {nome, ...resto} = usuario;
console.log(nome);
console.log(resto);

const arr = [1,2,3,4,5,6,7];
const [a, b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c);

function soma(...params) {
    return params.reduce((total, next) => total + next);
}
console.log(soma(1,2,3,4,5,6));

//SPREAD

const arrayA = [1,2,3,4];
const arrayB = [5,6,7];

const arrayC = [...arrayA, ...arrayB];
console.log(arrayC);

const usuario2 = {...usuario, nome: 'Jonas'};
console.log(usuario2);