window.addEventListener('load', start);

let pokemons = [];

function criaPokemon(pokemon) {
  return `<li>${pokemon.name}</li>`;
}

function start() {
  getPokemonsApi();
}

function getPokemonsApi() {
  var ajax = new XMLHttpRequest();

  ajax.open('GET', 'https://pokeapi.co/api/v2/pokemon?limit=151', true);

  ajax.send();

  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4 && ajax.status == 200) {
      var data = JSON.parse(ajax.responseText);
      pokemons = data.results;

      const listPokemons = document.querySelector('#pokemons');

      listPokemons.innerHTML = pokemons
        .map((pokemon) => {
          return criaPokemon(pokemon);
        })
        .join('');
    }
  };
}
