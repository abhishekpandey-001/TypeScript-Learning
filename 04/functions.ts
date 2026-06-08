// Functions

// Regular function
function add(a: number, b: number): number {
  return a + b;
}

const answer = add(1, 2);
console.log(answer);

// Here as well, we can now define the type of parameters and the function itself. A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.

// Function expression
const sub = function (a: number, b: number): number {
  return a - b;
};

// Arrow functions
const divide = (a: number, b: number): number => {
  return a * b;
};

// Optional parameters
function greet1(username: string, greeting?: string): string {
  return `${greeting ? greeting : ""}${username}`;
}

console.log(greet1("Nikhil"));

// Default Parameter
// Here, if we don't give a parameter, it takes and uses the deault parameter we have given to it
function greet2(username: string, greeting: string = "Hello"): string {
  return `${greeting}${username}`;
}

// Function Overloading
function getLength(value: string): number;
function getLength(value: any[]): number;
function getLength(value: any): number {
  return value.length
}

console.log(getLength('Hi')) // first function runs, result --->>> 2
console.log(getLength([1,2,3,4])) // second function runs, result --->>> 4
// if we donm't give the any type in third one then it will start giving errors because first two are different types