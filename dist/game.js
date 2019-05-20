"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pokemon_1 = require("./models/pokemon");
var battleUtilities_1 = require("./battleUtilities");
var pika = new pokemon_1.Pokemon("Pikachu", 90, 1000);
var tort = new pokemon_1.Pokemon("Tortank", 20, 1000);
battleUtilities_1.initThunderPokemonAttacks(pika);
battleUtilities_1.initWaterPokemonAttacks(tort);
console.log(pika.getName());
console.log(pika.printAttacks());
console.log(tort.getName());
console.log(tort.printAttacks());
var pokemons = new Array();
battleUtilities_1.pokemonGetOrder(pika, tort, pokemons);
var pokemonsAreAlive = true;
var attackIndex = 0;
while (pokemonsAreAlive) {
    var p1 = pokemons.pop();
    var p2 = pokemons.pop();
    attackIndex = Math.floor(Math.random() * p1.attacks.length);
    p1.attackPokemon(p2, attackIndex);
    if (p2.isKO()) {
        pokemonsAreAlive = false;
        console.log("WINNER: " + p1.name);
    }
    pokemons.push(p1);
    pokemons.push(p2);
}
