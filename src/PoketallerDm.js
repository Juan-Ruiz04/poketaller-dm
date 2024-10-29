import { LitElement, html } from 'lit-element';

export class PoketallerDm extends LitElement {
 
  async fetchPokemon() {
    if (this.pokemonCount < 1 || this.pokemonCount > 1010) {
      alert("Por favor, ingrese un número entre 1 y 1010.");
      return;
    }

    this.loading = true;
    const promises = [];
    for (let i = 1; i <= this.pokemonCount; i++) {
      promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()));
    }

    try {
      const pokemonData = await Promise.all(promises);
      this.pokemons = pokemonData.map(pokemon => ({
        id: pokemon.id,
        name: pokemon.name,
        imageUrl: pokemon.sprites.front_default,
        types: pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')
      }));
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      alert("Ocurrió un error al cargar los Pokémon.");
    } finally {
      this.loading = false;
    }
  }

  async fetchEvolutions(pokemonId) {
    try {
      const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
      const speciesData = await speciesResponse.json();
      const evolutionChainUrl = speciesData.evolution_chain.url;
      const evolutionResponse = await fetch(evolutionChainUrl);
      const evolutionData = await evolutionResponse.json();
      const evolutions = await this.getEvolutionsWithDetails(evolutionData.chain);
      this.selectedPokemonEvolutions = evolutions;
      this.showModal = true;
    } catch (error) {
      console.error("Error fetching evolution data:", error);
      alert("Ocurrió un error al cargar las evoluciones.");
    }
  }

  async getEvolutionsWithDetails(chain) {
    const evolutions = [];
    let current = chain;
    while (current) {
      const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${current.species.name}`).then(res => res.json());
      evolutions.push({
        name: pokemonData.name,
        imageUrl: pokemonData.sprites.front_default,
        types: pokemonData.types.map(typeInfo => typeInfo.type.name).join(', ')
      });
      current = current.evolves_to[0];
    }
    return evolutions;
  }

  closeModal() {
    this.showModal = false;
    this.selectedPokemonEvolutions = [];
  }

  updatePokemonCount(e) {
    const newValue = Number(e.target.value);
    this.pokemonCount = isNaN(newValue) ? 20 : newValue;
  }


 
}
