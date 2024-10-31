### Poketaller DM

## Descripción del Componente

- * Poketaller DM es un componente de modelo de datos diseñado para gestionar la lógica de negocio de la aplicación Poketaller, específicamente para la carga de Pokémon y sus evoluciones.

## Objetivos del Componente

- * Cargar los datos de Pokémon desde la API de PokeAPI.
- * Manejar la lógica de carga de Pokémon y evoluciones.
- * Proporcionar los datos de Pokémon y evoluciones a la interfaz de usuario.

## Métodos

- * fetchPokemon(): Método que carga los datos de Pokémon desde la API de PokeAPI.
- * fetchEvolutions(pokemonId): Método que carga las evoluciones de un Pokémon específico.
- * getEvolutionsWithDetails(chain): Método que obtiene las evoluciones con detalles de un Pokémon.
- * closeModal(): Método que cierra el modal de evoluciones.
- * updatePokemonCount(e): Método que actualiza el valor de pokemonCount.

## Propiedades

- * pokemonCount: Número de Pokémon a cargar (tipo Number).
- * pokemons: Lista de Pokémon cargados (tipo Array).
- * selectedPokemonEvolutions: Lista de evoluciones del Pokémon seleccionado (tipo Array).
- * showModal: Indicador para mostrar el modal de evoluciones (tipo Boolean).
- * loading: Indicador de carga (tipo Boolean).

## Uso

- * Este componente se utiliza en conjunto con el componente Poketaller UI para cargar y mostrar los datos de Pokémon y evoluciones.

## Dependencias

- * lit-element
- * `(link unavailable)

## Contribución

- * Para contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Clona el repositorio.
2. Crea una rama para tu contribución.
3. Realiza tus cambios y commit.
4. Envía un pull request.

Autores

- * Juan LUis Mejia Ruiz

## Notas

- * Este componente utiliza la API de PokeAPI para cargar los datos de Pokémon y evoluciones.
- * La API de PokeAPI tiene límites de solicitud, por lo que es importante utilizarla de manera responsable.
