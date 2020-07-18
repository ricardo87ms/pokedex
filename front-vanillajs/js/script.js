window.addEventListener('load', start);

const listaPokemons = document.querySelector('#pokemons');
const mostraSelecionado = document.querySelector('#pokemon-selecionado');

let pokemons = [];
let pokemonSelecionado = '';

async function start() {
  await getPokemons();
  renderListaPokemon();
}

async function selecionaPokemon(name) {
  await getPokemon(name);
  renderPokemonSelecionado();
}

function criaPokemonLista(pokemon) {
  return `<li onclick="selecionaPokemon('${pokemon.name}')">${pokemon.name}</li>`;
}

function criaPokemonSelecionado(pokemon) {
  return `
  <img
    src="${pokemon.sprites.front_default}"
    alt="${pokemon.name}" />
    <p><strong>ID: </strong>${pokemon.id}</p>
    <p><strong>Nome: </strong>${pokemon.name}</p>
    <p><strong>Peso: </strong>${pokemon.weight}</p>
    <p><strong>Altura: </strong>${pokemon.height}</p>
  `;
}

function renderPokemonSelecionado() {
  mostraSelecionado.innerHTML = criaPokemonSelecionado(pokemonSelecionado);
}

function renderListaPokemon() {
  listaPokemons.innerHTML = pokemons
    .map((pokemon) => {
      return criaPokemonLista(pokemon);
    })
    .join('');
}

async function getPokemons() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');

  const data = await res.json();

  pokemons = data.results;
}

async function getPokemon(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  pokemonSelecionado = await res.json();
}
