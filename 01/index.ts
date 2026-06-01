//Basic Types
//Numbers

let num1:number = 123456; // We can also write it as 12_34_56 & it'll print fine
// let num2: bigint = 1326536125371256376n;
let str1:string = "Hello Everyone";
let isActive: boolean = true;

// Type inference
let age = 21 // Ts will consider it as a number even though we havent given it's type, this is called type inference

let numArray: number[] = [1,2,3,4];
let charArray: string[] = ['a', 'b', 'd', 'f'];

let val1: null = null;
let val2: undefined = undefined;

let obj :object = {
    name: "Rahul",
    age: 24
}

//Now we can append any values inside it as it as we have specified it as an object but if we specifiy the types inside it, it won't take or append any key value inside it.

obj = {...obj, phone: 835634526};
console.log(obj)

//Object with defined type
let obj1 : {name: string, age: number} = {
    name: "Mohit",
    age: 23
}

//Here we cannot add any other key value pairs because we have already specified it's type