window.addEventListener('load', start);

const listaPokemons = document.querySelector('#pokemons');

let pokemons = [];

function selecionaPokemon(name) {
  console.log(name);
}

function criaPokemon(pokemon) {
  return `<li onclick="selecionaPokemon('${pokemon.name}')">${pokemon.name}</li>`;
}

function render() {
  listaPokemons.innerHTML = pokemons
    .map((pokemon) => {
      return criaPokemon(pokemon);
    })
    .join('');
}

async function start() {
  pokemons = await getPokemonsApi();
  render();
}

async function getPokemonsApi() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');

  const data = await res.json();

  return data.results;
}
