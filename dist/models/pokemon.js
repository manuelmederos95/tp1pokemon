"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var attack_1 = require("./attack");
var Pokemon = /** @class */ (function () {
    function Pokemon(name, speed, hp) {
        this.name = name;
        this.speed = speed;
        this.hp = hp;
        this.attacks = new Array();
    }
    Pokemon.prototype.learnAttack = function (attackName, attackDamage) {
        this.attacks.push(new attack_1.Attack(attackName, attackDamage));
    };
    Pokemon.prototype.printAttacks = function () {
        this.attacks.forEach(function (value) {
            console.log(value);
        });
    };
    Pokemon.prototype.attackPokemon = function (rival, attackIndex) {
        rival.hp = rival.hp - this.attacks[attackIndex].damage;
        console.log(this.getName() + " uses " + this.attacks[attackIndex].name);
        console.log(rival.getName() + " hp: " + rival.hp);
    };
    Pokemon.prototype.getName = function () {
        return this.name;
    };
    Pokemon.prototype.isKO = function () {
        return this.hp <= 0;
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
