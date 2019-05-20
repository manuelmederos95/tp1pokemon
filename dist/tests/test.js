"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pokemon_1 = require("../models/pokemon");
var utilities_1 = require("../utilities");
var returnOnError = function (operation, alternative) {
    try {
        return operation();
    }
    catch (e) {
        return alternative;
    }
};
test('test Pikachu attacks first', function () {
    var pika = new pokemon_1.Pokemon("Pikachu", 10);
    var tort = new pokemon_1.Pokemon("Tortank", 2);
    expect(returnOnError(function () { return utilities_1.getFastestPokemon(pika, tort).getName(); }, "").toEqual('Pikachu'));
});
