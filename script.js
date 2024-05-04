
//ascync await

const ulr="";

async function getData(){
    try{
    const odpovet = await fetch(ulr);
    const data = await odpovet.json();
    document.querySelector('p').innerText=data.name;
    document.querySelector('h1').innerText=data.type;
    }
    catch(error){
        console.log(error);
    }
}

getData();

document.getElementById('btn').addEventListener('click',()=>{
    ulr=`https://pokeapi.co/api/v2/pokemon/${document.querySelector('input').value}`;
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