import {Pokemon} from '../models/pokemon';
import {getFastestPokemon, initThunderPokemonAttacks, initWaterPokemonAttacks, pokemonGetOrder} from '../battleUtilities';

const returnOnError = (operation, alternative) => {
    try {
        return operation();
    } catch (e) {
        return alternative;
    }
};

test('test higher speed goes first', () => {
    let pika = new Pokemon("Pikachu", 90, 1000);
    let tort = new Pokemon("Tortank", 20, 1000);
    let faster = getFastestPokemon(pika,tort).getName();
    expect(faster).toBe("Pikachu");
});

test('test if same speed first pokemon goes first', () => {
    let pika = new Pokemon("Pikachu", 90, 1000);
    let tort = new Pokemon("Tortank", 90, 1000);
    let faster = getFastestPokemon(pika,tort).getName();
    expect(faster).toBe("Pikachu");
});

test('test higher speed goes first', () => {
    let pika = new Pokemon("Pikachu", 90, 1000);
    let tort = new Pokemon("Tortank", 120, 1000);
    let faster = getFastestPokemon(pika,tort).getName();
    expect(faster).toBe("Tortank");
});

test('test first round order with Pikachu faster', () => {
    let pika = new Pokemon("Pikachu", 90, 1000);
    let tort = new Pokemon("Tortank", 20, 1000);
    let pokemons = new Array<Pokemon>();
    pokemonGetOrder(pika,tort,pokemons);
    let faster = pokemons.pop().name;
    expect(faster).toBe("Pikachu");
});

test('test first round order with both same speed', () => {
    let pika = new Pokemon("Pikachu", 90, 1000);
    let tort = new Pokemon("Tortank", 90, 1000);
    let pokemons = new Array<Pokemon>();
    pokemonGetOrder(pika,tort,pokemons);
    let faster = pokemons.pop().name;
    expect(faster).toBe("Pikachu");
});

test('test first round order with Tortank faster', () => {
    let pika = new Pokemon("Pikachu", 90, 1000);
    let tort = new Pokemon("Tortank", 100, 1000);
    let pokemons = new Array<Pokemon>();
    pokemonGetOrder(pika,tort,pokemons);
    let faster = pokemons.pop().name;
    expect(faster).toBe("Tortank");
});

test('test Attack add', () => {
    let pika = new Pokemon("Pikachu", 90, 1000);
    pika.learnAttack("Thunder", 50);
    let attackName = pika.attacks[0].name;
    let attackDamage = pika.attacks[0].damage;
    expect(attackName).toBe("Thunder");
    expect(attackDamage).toBe(50);
});

test('Tortank should loose 50hp after Pikachu attack', () => {
    let pika = new Pokemon("Pikachu", 90, 1000);
    let tort = new Pokemon("Tortank", 20, 1000);
    pika.learnAttack("Thunder", 50);
    pika.attackPokemon(tort, 0);
    expect(tort.hp).toBe(950);
});

test('Pikachu should loose 0hp after Tortank attack', () => {
    let pika = new Pokemon("Pikachu", 90, 1000);
    let tort = new Pokemon("Tortank", 20, 1000);
    tort.learnAttack("Splash", 0);
    tort.attackPokemon(pika, 0);
    expect(pika.hp).toBe(1000);
});


test('Pikachu should be KO after Tortank attack', () => {
    let pika = new Pokemon("Pikachu", 90, 100);
    let tort = new Pokemon("Tortank", 20, 1000);
    tort.learnAttack("Canon Water", 100);
    tort.attackPokemon(pika, 0);
    expect(pika.isKO()).toBe(true);
});

test('Pikachu should be KO after Tortank attack', () => {
    let pika = new Pokemon("Pikachu", 90, 100);
    let tort = new Pokemon("Tortank", 20, 1000);
    tort.learnAttack("Canon Water", 200);
    tort.attackPokemon(pika, 0);
    expect(pika.isKO()).toBe(true);
});

test('Tortank should loose if Pikachu is faster and Tortank just uses Splash', () => {
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
    let attackIndex = 3;

    while(pokemonsAreAlive) {

        let p1 = pokemons.pop();
        let p2 = pokemons.pop();
        p1.attackPokemon(p2, attackIndex);

        if(p2.isKO()) {
            pokemonsAreAlive = false;
            console.log("WINNER: " + p1.name);
        }
        pokemons.push(p1);
        pokemons.push(p2);
    }

    let looser = pokemons.pop().name;
    expect(looser).toBe("Tortank");
});

test('Pikachu should loose if Pikachu is faster and both uses attack index 2 and Pickachu health is low', () => {
    let pika = new Pokemon("Pikachu", 90, 100);
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
    let attackIndex = 2;

    while(pokemonsAreAlive) {

        let p1 = pokemons.pop();
        let p2 = pokemons.pop();
        p1.attackPokemon(p2, attackIndex);

        if(p2.isKO()) {
            pokemonsAreAlive = false;
            console.log("WINNER: " + p1.name);
        }
        pokemons.push(p1);
        pokemons.push(p2);
    }

    let looser = pokemons.pop().name;
    expect(looser).toBe("Pikachu");
});

test('Pikachu should loose if Tortank is faster and both uses attack index 2', () => {
    let pika = new Pokemon("Pikachu", 90, 1000);
    let tort = new Pokemon("Tortank", 120, 1000);

    initThunderPokemonAttacks(pika);
    initWaterPokemonAttacks(tort);
    console.log(pika.getName());
    console.log(pika.printAttacks());
    console.log(tort.getName());
    console.log(tort.printAttacks());

    let pokemons = new Array<Pokemon>();
    pokemonGetOrder(pika,tort,pokemons);
    let pokemonsAreAlive:boolean = true;
    let attackIndex = 2;

    while(pokemonsAreAlive) {

        let p1 = pokemons.pop();
        let p2 = pokemons.pop();
        p1.attackPokemon(p2, attackIndex);

        if(p2.isKO()) {
            pokemonsAreAlive = false;
            console.log("WINNER: " + p1.name);
        }
        pokemons.push(p1);
        pokemons.push(p2);
    }

    let looser = pokemons.pop().name;
    expect(looser).toBe("Pikachu");
});







