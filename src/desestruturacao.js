const user = {
    nome:'Diego',
    idade:32,
    endereco: {
        cidade: 'Cianorte',
        uf: 'PR',
    }
}
console.log(user);

//depois 
const {nome, idade, endereco:{cidade}} = user;
console.log(nome, idade, cidade);


function mostrarNome({nome}) {
    console.log(nome);
}
mostrarNome(user)