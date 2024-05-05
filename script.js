
//ascync await

let  ulr="";

async function getData(){
    try{
    const odpovet = await fetch(ulr);
    const data = await odpovet.json();
    document.querySelector('p').innerText=" Pokedex ID: "+data.id;
    document.querySelector('h1').innerText="Jmeno: "+data.name;
    }
    catch(error){
        console.log(error);
    }
}

getData();

document.getElementById('btn').addEventListener('click',()=>{
    try {
        ulr=`https://pokeapi.co/api/v2/pokemon/${document.querySelector('input').value}`;
        getData();
    } catch (error) {
        console.log("zadej cele jmeno pokemona!!!!!!§");
    }

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