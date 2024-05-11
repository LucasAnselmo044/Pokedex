const pokemonName = document.querySelector('.pokemon_name')
const pokemonNumber = document.querySelector('.pokemon_number')
const pokemonImage = document.querySelector('.pokemon_image')
const form = document.querySelector('.form')
const input = document.querySelector('.input_search')

const botaoVoltar = document.querySelector('.btn-prev')
const botaoProximo = document.querySelector('.btn-next')

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status = 200) {

        const data = await APIResponse.json();
        return data;

    }
}

const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'Carregando...'
    
    const data = await fetchPokemon(pokemon);

    if (data) {
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    input.value='';
  } else {
    pokemonName.innerHTML = 'Não encontrado.';
    pokemonNumber.innerHTML = '';
  }
}

form.addEventListener('submit', (event) => {

    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
});

botaoVoltar.addEventListener('click', () => {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
})

botaoProximo.addEventListener('click', () => {
    searchPokemon += 1;
    renderPokemon(searchPokemon);
})


renderPokemon(searchPokemon)