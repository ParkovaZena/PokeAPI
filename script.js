//ascync await

const p = document.querySelector('p');
const btn = document.querySelector('button');
const nadpis=document.querySelector('h1');
const hp=document.getElementById('hp');
const atk=document.getElementById('atk');
const def=document.getElementById('def');
const spd=document.getElementById('spd');


const rada="";

const ftipy = 'https://api.adviceslip.com/advice';
const pokeApi = `https://pokeapi.co/api/v2/pokemon/${rnd()}`;

function rnd(){
    return Math.floor(Math.random()*1023);
}

getData();

async function getData(){
    try{
    const odpovet = await fetch(pokeApi);
    const data = await odpovet.json();
    nadpis.innerText=data.name;
    p.innerText="ID: "+data.id;
    document.querySelector('img').src=data.sprites.front_default;
    console.log(data.stats[0].base_stat);
    for (let i = 0; i < 4; i++) {
        document.querySelector('table').rows[i].cells[1].innerText=data.stats[i].base_stat;        
    }
}
    catch(error){
        console.log(error);
    }
}


btn.addEventListener('click',()=>{
    location.reload();
});




/*
const jsonFile = `[
    {"jmeno" : "patrick"},
    {"jmeno" : "bateman"}
]`;

const pomoc = JSON.parse(jsonFile);

const spet = JSON.stringify(pomoc);

console.log(pomoc + jsonFile);

*/