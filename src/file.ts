import {Pokemon} from './models/pokemon';

let pika = new Pokemon("Pikachu", 10, 1000);
let tort = new Pokemon("Tortank", 2, 1000);
// @ts-ignore
console.log(pika.speed);
