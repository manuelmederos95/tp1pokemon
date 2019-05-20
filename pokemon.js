class Pokemon {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}


let pika = new Pokemon("Pikachu");
console.log("Pika pika " + pika.getName());

