// any type

// Here it will take any type, gives us the flexibility just like the javascript does because here, numVal is having 'any' type. When a type is not defined, it takes any. Very rarely we use it

let numVal; // or let numVal: any;
numVal = 99;
numVal = "Hello";

function testAnyType(val: any) {
  console.log(val);
}

// Arrays
let numArray: number[] = [2, 3, 7];
let stringArray: string[] = ["Helloḍ", "Hey"];

// Tuples
let arr: [number, string] = [1, "batman"];
let coordinates3D: [number, number, number] = [10, 20, 30]; // types can be same or different

// Enum
enum Color {
  Red = "Apple",
  Green = 22,
  Blue = "Sky",
}

console.log(Color.Blue); // by default it takes the value of its index
let color: Color = Color.Green;
console.log(color);

// Unknown
let notSure: unknown = "a";

if (typeof notSure === "string") {
  notSure.length;
} else if (typeof notSure === "number") {
  notSure.toFixed(2);
}

// Never type
function infiniteLoop(): never {
  while (true) {
    //do something endlessely
    console.log(1);
  }
}

//will keep running infinitely
function throwNewError(message: string): never {
  throw new Error(message);
}

// Void type

function logMessage(message: string): void {
  console.log(message);
  return undefined; // allowed in void. But if we return any value or anything, it will throw an error
}

// Type inference and type assertions
let age = 98; // type inference

// type assertion
let someValue: any = "Hello World";
let someLength: number = (someValue as string).length;
console.log(someLength);

// Union type
let unionExample: string | number; // this can either be a string or a number
unionExample = "abc"; // acceptable
unionExample = 43; // acceptable

function unionExampleWithFunction(id: string | number) {
  console.log(`id: ${id}`);
}

unionExampleWithFunction(76); // acceptable
unionExampleWithFunction("abc"); // acceptable

// Type Narrowing

function narrowingExample(id: string | number) {
  if (typeof id === "string") {
    console.log("id is a string", id.toLocaleUpperCase());
  } else {
    console.log(`id is a number: ${id}`);
  }
}
