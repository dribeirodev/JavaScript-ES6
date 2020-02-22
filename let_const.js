const a = 'Diego'; //não modifica por se tratar de uma constante

const b = {nome: 'Diego'}
console.log(b);

b.nome = 'Diego Novo' // modifica o atributo nome, mutação
console.log(b);

function verifica(x) {
    let y = 2 //pode definir novamente o nome da variável dentro do escopo do if

    if(x>y){
        let y = 4; //nova variavel demtro do escopo do if
        console.log(x,y);
    }
}

verifica(10);