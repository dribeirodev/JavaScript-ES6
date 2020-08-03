import axios from 'axios';

class Api {
    static async getUserInfo(username){

        try {
            const res = await axios.get(`https://api.github.com/users/${username}`);
            console.log(res);
        } catch (error) {
            console.log('Erro na Api');
        }
    }
}

export const dadosUserGit = () => {
   Api.getUserInfo('dribeirodev');
}