abstract class House {
  protected door: "close" | "open" = "close";
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  comeIn(person: Person) {
    if (this.door === "open") {
      this.tenants.push(person);
    } else {
      console.log("The door is close");
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key === this.key) {
      this.door = "open";
      console.log("The door is open");
    } else {
      console.log("Wrong key!");
    }
  }
}

class Key {
  private signature: number = Math.random();

  getSignature(): number {
    return this.signature;
  }
}

const key1 = new Key();
const key2 = new Key();

class Person {
  constructor(private key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

const person1 = new Person(key1);
const person2 = new Person(key2);

const house1 = new MyHouse(person1.getKey());

console.log(house1);

house1.comeIn(person1);
house1.openDoor(person1.getKey());
house1.openDoor(key1);
house1.openDoor(person2.getKey());
house1.openDoor(key2);
console.log(house1);

house1.comeIn(person2);
house1.comeIn(person1);
console.log(house1);
