import {Attack} from './attack';

export class Pokemon {
  name:string;
  hp:number;
  speed:number;
  attacks:Array<Attack>;

  constructor(name : string, speed: number, hp:number) {
    this.name = name;
    this.speed = speed;
    this.hp = hp;
    this.attacks = new Array<Attack>();
  }

  learnAttack(attackName:string, attackDamage:number){
    this.attacks.push(new Attack(attackName,attackDamage));
  }

  printAttacks(){
    this.attacks.forEach(function (value) {
      console.log(value);
    });
  }

  attackPokemon(rival:Pokemon, attackIndex:number){
    rival.hp = rival.hp - this.attacks[attackIndex].damage;
    console.log(this.getName() + " uses " + this.attacks[attackIndex].name);
    console.log( rival.getName() + " hp: " + rival.hp );
  }

  getName() : string{
    return this.name;
  }

  isKO():boolean {
    return this.hp <= 0;
  }
}





