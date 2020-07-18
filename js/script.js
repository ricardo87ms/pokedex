window.addEventListener('load', start);

let pokemons = [];

function criaPokemon(pokemon) {
  return `<li>${pokemon.name}</li>`;
}

function start() {
  getPokemonsApi();
}

function getPokemonsApi() {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then((res) => {
    res.json().then((data) => {
      pokemons = data.results;

      const listPokemons = document.querySelector('#pokemons');

      listPokemons.innerHTML = pokemons
        .map((pokemon) => {
          return criaPokemon(pokemon);
        })
        .join('');
    });
  });
}
