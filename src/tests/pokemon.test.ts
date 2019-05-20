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

    let fast = getFastestPokemon(pika,tort).getName();
    expect(fast).toBe("Pikachu");
});

