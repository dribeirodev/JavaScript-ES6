const minhaPromisse = () => new Promise((resolve, reject) => { 
    setTimeout(() => { 
        resolve('ok'); 
    }, 2000)
})

//then
minhaPromisse().then(res => {
    console.log(res);
})

//async await
export async function executaPromisse(){
    const resp = await minhaPromisse();
    console.log(resp);
}

export const executaPromisseArrowF = async() => {
    const resp = await minhaPromisse();
    console.log(resp);
}