import {Pokemon} from './models/pokemon';
import {initThunderPokemonAttacks, initWaterPokemonAttacks, pokemonGetOrder} from './battleUtilities';

let pika = new Pokemon("Pikachu", 90, 1000);
let tort = new Pokemon("Tortank", 20, 1000);
initThunderPokemonAttacks(pika);
initWaterPokemonAttacks(tort);
console.log(pika.getName());
console.log(pika.printAttacks());
console.log(tort.getName());
console.log(tort.printAttacks());

let pokemons = new Array<Pokemon>();
pokemonGetOrder(pika,tort,pokemons);
let pokemonsAreAlive:boolean = true;
let attackIndex = 0;

while(pokemonsAreAlive) {

    let p1 = pokemons.pop();
    let p2 = pokemons.pop();
    attackIndex = Math.floor(Math.random() * p1.attacks.length);
    p1.attackPokemon(p2, attackIndex);
    if(p2.isKO()) {
        pokemonsAreAlive = false;
        console.log("WINNER: " + p1.name);
    }
    pokemons.push(p1);
    pokemons.push(p2);
}




