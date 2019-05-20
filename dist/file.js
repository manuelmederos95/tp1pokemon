"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pokemon_1 = require("./models/pokemon");
var pika = new pokemon_1.Pokemon("Pikachu", 10);
var tort = new pokemon_1.Pokemon("Tortank", 2);
// @ts-ignore
console.log(pika.speed);
