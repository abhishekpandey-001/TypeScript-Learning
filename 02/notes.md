# Types in Detail

In this section, we will discuss some important TypeScript types in detail, including Tuples, Enums, Unknown, Never, Void, Union Types, Type Inference, Type Assertions, and Type Narrowing.

---

## Tuples

A Tuple is a special type of array that allows us to store a fixed number of elements where each element can have a different type.

```ts
let arr: [number, string] = [1, "Batman"];
```

### Drawback of Tuples

TypeScript enforces the tuple structure during type checking, but some array methods such as `push()` can still add elements that match one of the tuple's allowed types.

```ts
let response: [string, number] = ["success", 200];

response.push(0);

console.log(response);
```

Output:

```ts
["success", 200, 0];
```

Although the tuple was defined to contain only two elements, TypeScript allows the `push()` operation in this case. This is one of the limitations of tuples.

---

## Enums

Enums allow us to define a set of named constants. They make our code more readable and easier to maintain.

```ts
enum Color {
  Red = "Apple",
  Green = 22,
  Blue = "Sky",
}

console.log(Color.Blue);

let color: Color = Color.Green;
console.log(color);
```

### Numeric Enum Example

If values are not explicitly assigned, TypeScript automatically assigns numeric values starting from `0`.

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction.Up); // 0
console.log(Direction.Right); // 3
```

---

## Unknown Type

The `unknown` type is used when we do not know the type of a value beforehand.

Unlike `any`, TypeScript does not allow us to directly access properties or methods on an `unknown` value. We must first narrow its type.

```ts
let notSure: unknown = "Hello";

if (typeof notSure === "string") {
  console.log(notSure.length);
} else if (typeof notSure === "number") {
  console.log(notSure.toFixed(2));
}
```

### Why Use `unknown` Instead of `any`?

- `any` disables type checking.
- `unknown` forces us to verify the type before using the value.
- Therefore, `unknown` is safer than `any`.

---

## Never Type

The `never` type represents values that never occur.

It is commonly used in functions that:

- Never finish execution.
- Always throw an error.

### Example 1: Infinite Loop

```ts
function infiniteLoop(): never {
  while (true) {
    console.log(1);
  }
}
```

### Example 2: Throwing an Error

```ts
function throwNewError(message: string): never {
  throw new Error(message);
}
```

Since these functions never successfully return a value, their return type is `never`.

---

## Void Type

The `void` type is mostly used with functions that perform an action but do not return any meaningful value.

```ts
function logMessage(message: string): void {
  console.log(message);
}
```

A `void` function may explicitly return `undefined`, but it cannot return any other value.

```ts
function logMessage(message: string): void {
  console.log(message);
  return undefined; // Allowed
}
```

The following would cause an error:

```ts
function logMessage(message: string): void {
  return "Hello"; // Error
}
```

---

## Type Inference and Type Assertions

### Type Inference

Type inference is TypeScript's ability to automatically determine the type of a variable based on its assigned value.

```ts
let age = 66;
```

TypeScript automatically infers that `age` is of type `number`.

Equivalent code:

```ts
let age: number = 66;
```

This helps reduce the amount of type annotations we need to write.

### Type Assertion

Type assertion tells TypeScript to treat a value as a specific type.

```ts
let someValue: any = "Hello World";

let someLength: number = (someValue as string).length;

console.log(someLength);
```

Type assertions do not change the actual value at runtime. They only inform TypeScript about the type we expect.

---

## Union Type

A Union Type allows a variable to hold more than one type.

```ts
let unionExample: string | number;
```

The variable can be either a `string` or a `number`.

```ts
unionExample = "abc"; // Valid
unionExample = 43; // Valid
```

### Union Types with Functions

```ts
function unionExampleWithFunction(id: string | number) {
  console.log(`ID: ${id}`);
}

unionExampleWithFunction(76);
unionExampleWithFunction("abc");
```

Both function calls are valid because the parameter accepts either type.

---

## Type Narrowing

Type narrowing is the process of reducing a broader type to a more specific type using checks such as `typeof`, `instanceof`, or custom type guards.

This is especially useful when working with Union Types.

```ts
function narrowingExample(id: string | number) {
  if (typeof id === "string") {
    console.log("ID is a string:", id.toUpperCase());
  } else {
    console.log(`ID is a number: ${id}`);
  }
}
```

In the above example:

- Inside the `if` block, TypeScript knows that `id` is a `string`.
- Inside the `else` block, TypeScript knows that `id` is a `number`.

This process is called **Type Narrowing**.