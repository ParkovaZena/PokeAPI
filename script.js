
//ascync await

const ulr='https://official-joke-api.appspot.com/jokes/random';

async function getData(){
    try{
    const odpovet = await fetch(ulr);
    const data = await odpovet.json();
    document.querySelector('p').innerText=data.punchline;
    document.querySelector('h1').innerText=data.setup;
    }
    catch(error){
        console.log(error);
    }
}

getData();

document.getElementById('btn').addEventListener('click',()=>{
    getData();
});

/*
const jsonFile = `[
    {"jmeno" : "patric"},
    {"jmeno" : "bateman"}
]`;

const pomoc = JSON.parse(jsonFile);

const spet = JSON.stringify(pomoc);

console.log(pomoc + jsonFile);

*/