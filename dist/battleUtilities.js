"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFastestPokemon(poke1, poke2) {
    if (poke1.speed >= poke2.speed) {
        return poke1;
    }
    else {
        return poke2;
    }
}
exports.getFastestPokemon = getFastestPokemon;
function pokemonGetOrder(poke1, poke2, pokemons) {
    if (poke1.speed >= poke2.speed) {
        pokemons.push(poke2);
        pokemons.push(poke1);
    }
    else {
        pokemons.push(poke1);
        pokemons.push(poke2);
    }
}
exports.pokemonGetOrder = pokemonGetOrder;
function initThunderPokemonAttacks(pokemon) {
    pokemon.learnAttack("Thunder", 150);
    pokemon.learnAttack("Storm", 150);
    pokemon.learnAttack("Kick", 30);
    pokemon.learnAttack("Magnetic", 90);
}
exports.initThunderPokemonAttacks = initThunderPokemonAttacks;
function initWaterPokemonAttacks(pokemon) {
    pokemon.learnAttack("Surf", 50);
    pokemon.learnAttack("Water canon", 150);
    pokemon.learnAttack("Bubbles", 30);
    pokemon.learnAttack("Splash", 0);
}
exports.initWaterPokemonAttacks = initWaterPokemonAttacks;
