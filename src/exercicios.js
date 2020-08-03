export class Usuario{
    constructor(email,senha){
        this._email = email;
        this._senha = senha;
    }

    isAdmin(){
        return this._admin ? this._admin : false;
    }
}

export class Admin extends Usuario{
    constructor(){
        super();
        this._admin = true
    }

}

export const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];
   