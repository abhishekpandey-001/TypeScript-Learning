// interface

interface Person {
  name: string;
  age: number;
  greet(): void;
}

// now we can use the interface and create multiple
let person: Person = {
  name: "abc",
  age: 25,
  greet() {
    console.log("Hello");
  },
};
person.greet(); // calling the greet function

// interface with functions
interface MathOp {
  (a: number, b: number): number;
}

const add: MathOp = (x, y) => x + y;
const sub: MathOp = (a, b) => a - b;

console.log("add two numbers:", add(1, 2));
console.log("substract two numbers:", sub(8, 2));

// type alias
type UserId = string; // we passed a string to another name called UserId

let userid: UserId = "abc";

type Person1 = {
  name: string;
  age: number;
};

let person1: Person1 = {
  name: "abc",
  age: 12,
};

console.log(person1.name);

// more advanced types
type ID = string | number;
let orderId: ID = "abc";
let orderId1: ID = 222;

// interfaces vs alias
interface User {
  name: string;
  phone: number;
}

interface Customer extends User {
  address: string;
}

// we can use one interface into another one by using the extend syntax
let myCustomer: Customer = {
  name: "x",
  phone: 2635263,
  address: "abc",
};

type Vehicle = {
  maker: string;
  model: string;
};

// & -> intersection types
type Car = Vehicle & {
  isElectric: boolean;
};

let myCar: Car = {
  maker: "BMW",
  model: "M5",
  isElectric: true,
};

// MAIN DIFFERENCE BETWEEN INTERFACE AND TYPE
// In interface, we can pass multiple interfaces and it won't show the error but in type, it will show the error because we cannot pass the same type multiple times
