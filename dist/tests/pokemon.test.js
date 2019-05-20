"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pokemon_1 = require("../models/pokemon");
var battleUtilities_1 = require("../battleUtilities");
var returnOnError = function (operation, alternative) {
    try {
        return operation();
    }
    catch (e) {
        return alternative;
    }
};
test('test higher speed goes first', function () {
    var pika = new pokemon_1.Pokemon("Pikachu", 90, 1000);
    var tort = new pokemon_1.Pokemon("Tortank", 20, 1000);
    var faster = battleUtilities_1.getFastestPokemon(pika, tort).getName();
    expect(faster).toBe("Pikachu");
});
test('test if same speed first pokemon goes first', function () {
    var pika = new pokemon_1.Pokemon("Pikachu", 90, 1000);
    var tort = new pokemon_1.Pokemon("Tortank", 90, 1000);
    var faster = battleUtilities_1.getFastestPokemon(pika, tort).getName();
    expect(faster).toBe("Pikachu");
});
test('test higher speed goes first', function () {
    var pika = new pokemon_1.Pokemon("Pikachu", 90, 1000);
    var tort = new pokemon_1.Pokemon("Tortank", 120, 1000);
    var faster = battleUtilities_1.getFastestPokemon(pika, tort).getName();
    expect(faster).toBe("Tortank");
});
test('test first round order with Pikachu faster', function () {
    var pika = new pokemon_1.Pokemon("Pikachu", 90, 1000);
    var tort = new pokemon_1.Pokemon("Tortank", 20, 1000);
    var pokemons = new Array();
    battleUtilities_1.pokemonGetOrder(pika, tort, pokemons);
    var faster = pokemons.pop().name;
    expect(faster).toBe("Pikachu");
});
test('test first round order with both same speed', function () {
    var pika = new pokemon_1.Pokemon("Pikachu", 90, 1000);
    var tort = new pokemon_1.Pokemon("Tortank", 90, 1000);
    var pokemons = new Array();
    battleUtilities_1.pokemonGetOrder(pika, tort, pokemons);
    var faster = pokemons.pop().name;
    expect(faster).toBe("Pikachu");
});
test('test first round order with Tortank faster', function () {
    var pika = new pokemon_1.Pokemon("Pikachu", 90, 1000);
    var tort = new pokemon_1.Pokemon("Tortank", 100, 1000);
    var pokemons = new Array();
    battleUtilities_1.pokemonGetOrder(pika, tort, pokemons);
    var faster = pokemons.pop().name;
    expect(faster).toBe("Tortank");
});
test('test Attack add', function () {
    var pika = new pokemon_1.Pokemon("Pikachu", 90, 1000);
    pika.learnAttack("Thunder", 50);
    var attackName = pika.attacks[0].name;
    var attackDamage = pika.attacks[0].damage;
    expect(attackName).toBe("Thunder");
    expect(attackDamage).toBe(50);
});
test('Tortank should loose 50hp after Pikachu attack', function () {
    var pika = new pokemon_1.Pokemon("Pikachu", 90, 1000);
    var tort = new pokemon_1.Pokemon("Tortank", 20, 1000);
    pika.learnAttack("Thunder", 50);
    pika.attackPokemon(tort, 0);
    expect(tort.hp).toBe(950);
});
test('Pikachu should loose 0hp after Tortank attack', function () {
    var pika = new pokemon_1.Pokemon("Pikachu", 90, 1000);
    var tort = new pokemon_1.Pokemon("Tortank", 20, 1000);
    tort.learnAttack("Splash", 0);
    tort.attackPokemon(pika, 0);
    expect(pika.hp).toBe(1000);
});
test('Pikachu should be KO after Tortank attack', function () {
    var pika = new pokemon_1.Pokemon("Pikachu", 90, 100);
    var tort = new pokemon_1.Pokemon("Tortank", 20, 1000);
    tort.learnAttack("Canon Water", 100);
    tort.attackPokemon(pika, 0);
    expect(pika.isKO()).toBe(true);
});
test('Pikachu should be KO after Tortank attack', function () {
    var pika = new pokemon_1.Pokemon("Pikachu", 90, 100);
    var tort = new pokemon_1.Pokemon("Tortank", 20, 1000);
    tort.learnAttack("Canon Water", 200);
    tort.attackPokemon(pika, 0);
    expect(pika.isKO()).toBe(true);
});
test('Tortank should loose if Pikachu is faster and Tortank just uses Splash', function () {
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
    var attackIndex = 3;
    while (pokemonsAreAlive) {
        var p1 = pokemons.pop();
        var p2 = pokemons.pop();
        p1.attackPokemon(p2, attackIndex);
        if (p2.isKO()) {
            pokemonsAreAlive = false;
            console.log("WINNER: " + p1.name);
        }
        pokemons.push(p1);
        pokemons.push(p2);
    }
    var looser = pokemons.pop().name;
    expect(looser).toBe("Tortank");
});
test('Pikachu should loose if Pikachu is faster and both uses attack index 2 and Pickachu health is low', function () {
    var pika = new pokemon_1.Pokemon("Pikachu", 90, 100);
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
    var attackIndex = 2;
    while (pokemonsAreAlive) {
        var p1 = pokemons.pop();
        var p2 = pokemons.pop();
        p1.attackPokemon(p2, attackIndex);
        if (p2.isKO()) {
            pokemonsAreAlive = false;
            console.log("WINNER: " + p1.name);
        }
        pokemons.push(p1);
        pokemons.push(p2);
    }
    var looser = pokemons.pop().name;
    expect(looser).toBe("Pikachu");
});
test('Pikachu should loose if Tortank is faster and both uses attack index 2', function () {
    var pika = new pokemon_1.Pokemon("Pikachu", 90, 1000);
    var tort = new pokemon_1.Pokemon("Tortank", 120, 1000);
    battleUtilities_1.initThunderPokemonAttacks(pika);
    battleUtilities_1.initWaterPokemonAttacks(tort);
    console.log(pika.getName());
    console.log(pika.printAttacks());
    console.log(tort.getName());
    console.log(tort.printAttacks());
    var pokemons = new Array();
    battleUtilities_1.pokemonGetOrder(pika, tort, pokemons);
    var pokemonsAreAlive = true;
    var attackIndex = 2;
    while (pokemonsAreAlive) {
        var p1 = pokemons.pop();
        var p2 = pokemons.pop();
        p1.attackPokemon(p2, attackIndex);
        if (p2.isKO()) {
            pokemonsAreAlive = false;
            console.log("WINNER: " + p1.name);
        }
        pokemons.push(p1);
        pokemons.push(p2);
    }
    var looser = pokemons.pop().name;
    expect(looser).toBe("Pikachu");
});
