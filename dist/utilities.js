"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pokemon_1 = require("./models/pokemon");
function getFastestPokemon(poke1, poke2) {
    if (poke1.speed > poke2.speed) {
        return poke1;
    }
    else {
        return poke2;
    }
}
exports.getFastestPokemon = getFastestPokemon;
var pika = new pokemon_1.Pokemon("Pikachu", 10);
var tort = new pokemon_1.Pokemon("Tortank", 2);
// @ts-ignore
console.log(getFastestPokemon(pika, tort).getName());
