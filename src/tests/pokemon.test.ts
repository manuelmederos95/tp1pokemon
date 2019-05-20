import {Pokemon} from '../models/pokemon';
import {getFastestPokemon} from '../battleUtilities';

const returnOnError = (operation, alternative) => {
    try {
        return operation();
    } catch (e) {
        return alternative;
    }
};

test('test Pikachu attacks first', () => {
    let pika = new Pokemon("Pikachu", 90, 1000);
    let tort = new Pokemon("Tortank", 20, 1000);
    let faster = getFastestPokemon(pika,tort).getName();
    expect(faster).toBe("Pikachu");
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
    pika.attackPokemon(tort, 1);
    expect(tort.hp).toBe(950);
});



