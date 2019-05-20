import {Attack} from './attack';

export class Pokemon {
  name:string;
  hp:number;
  speed:number;
  attacks:Attack[];

  constructor(name : string, speed: number, hp:number) {
    this.name = name;
    this.speed = speed;
    this.hp = hp;
  }

  learnAttack(attackName:string, attackDamage:number){
    this.attacks.push(new Attack(attackName,attackDamage));
  }

  printAttacks(){
    this.attacks.forEach(function (value) {
      console.log(value);
    });
  }

  getName() : string{
    return this.name;
  }
}





