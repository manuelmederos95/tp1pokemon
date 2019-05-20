import {Pokemon} from './models/pokemon';

export function getFastestPokemon(poke1:Pokemon, poke2:Pokemon) {
    if(poke1.speed >= poke2.speed) {
        return poke1;
    }
    else{
        return poke2;
    }
}

export function pokemonGetOrder(poke1:Pokemon, poke2:Pokemon, pokemons:Array<Pokemon>) {
    if(poke1.speed >= poke2.speed) {
        pokemons.push(poke2);
        pokemons.push(poke1);
    }
    else{
        pokemons.push(poke1);
        pokemons.push(poke2);
    }
}

export function initThunderPokemonAttacks(pokemon:Pokemon) {
    pokemon.learnAttack("Thunder", 150);
    pokemon.learnAttack("Storm", 150);
    pokemon.learnAttack("Kick", 30);
    pokemon.learnAttack("Magnetic", 90);
}

export function initWaterPokemonAttacks(pokemon:Pokemon) {
    pokemon.learnAttack("Surf", 50);
    pokemon.learnAttack("Water canon", 150);
    pokemon.learnAttack("Bubbles", 30);
    pokemon.learnAttack("Splash", 0);
}



