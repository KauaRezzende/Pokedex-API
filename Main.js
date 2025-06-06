const url = "https://pokeapi.co/api/v2/pokemon?limit=500&offset=0"
const Pokemonlist = document.getElementById("lista-pokemon")
console.log("opa")


function ConvertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.types[0].type.name}">
            <p class="nome">${pokemon.name}</p>
            <img src="${pokemon.sprites.other.dream_world.front_default}" alt="">
        </li>
    `
}

function getPokemonDetails(pokemon){
    return fetch(pokemon.url)
        .then((response) => response.json())
}

fetch(url)
    .then((response) => response.json())
    .then((jsonresponse) => jsonresponse.results)
    .then((list) => list.map(getPokemonDetails))
    .then((details) => Promise.all(details))
    .then((newList) => Pokemonlist.innerHTML = newList.map(ConvertPokemonToLi).join(""))
    .catch((error) => console.log(error))