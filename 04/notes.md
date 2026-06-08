# Optional Fields and Function Overloading

In this section, we will learn about Optional Fields and Function Overloading in TypeScript.

---

## Optional Fields

By default, TypeScript requires all properties defined in an interface to be present when creating an object.

However, we can make a property optional using the `?` operator. Optional properties may or may not be provided when creating an object.

### Example

```ts
interface User {
  name: string;
  phone: number;
  address?: string;
}

const myUser: User = {
  name: "Batman",
  phone: 478236,
};
```

In the above example:

- `name` and `phone` are required properties.
- `address` is an optional property.
- Since `address` is optional, TypeScript does not throw an error when it is omitted.

---

## Function Overloading

Function Overloading allows us to define multiple function signatures for the same function.

This is useful when a function needs to handle different types of parameters while maintaining proper type safety.

### Example

```ts
function getLength(value: string): number;
function getLength(value: any[]): number;

function getLength(value: any): number {
  return value.length;
}

console.log(getLength("Hi")); // matches the string overload, returns 2

console.log(getLength([1, 2, 3, 4])); // matches the array overload, returns 4
```

### How It Works

The above example contains two overload signatures:

```ts
function getLength(value: string): number;
function getLength(value: any[]): number;
```

And one implementation signature:

```ts
function getLength(value: any): number {
  return value.length;
}
```

The implementation signature must be broad enough to handle all overload signatures.

A more type-safe implementation could be:

```ts
function getLength(value: string | any[]): number {
  return value.length;
}
```

### Benefits of Function Overloading

- Improves type safety.
- Makes functions more flexible.
- Provides better IntelliSense and autocomplete support.
- Allows a single function to work with multiple parameter types.