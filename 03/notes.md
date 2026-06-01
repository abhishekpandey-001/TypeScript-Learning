# Part 3

In this section, we will dive deeper into TypeScript and explore **Interfaces** and **Type Aliases**, along with the differences between them.

---

## Interface

An Interface is used to define the structure or shape of an object. It specifies what properties and methods an object or class should contain.

Interfaces help in:

- Enforcing type safety.
- Defining contracts for objects and classes.
- Improving code readability and maintainability.

> Interfaces do not generate any JavaScript code. They are only used by TypeScript during type checking.

### Example

```ts
interface Person {
  name: string;
  age: number;
  greet(): void;
}

let person: Person = {
  name: "abc",
  age: 25,
  greet() {
    console.log("Hello");
  },
};

person.greet();
```

In the above example:

- The object must contain `name` and `age`.
- The object must implement the `greet()` method.
- Missing or incorrectly typed properties will result in a TypeScript error.

---

## Type Alias

A Type Alias allows us to create a custom name for any type.

It can be used with:

- Primitive types
- Union types
- Object types
- Function types
- Intersection types

Type aliases improve code readability and reusability.

### Example

```ts
type ID = string | number;

let orderId: ID = "abc";
let orderId1: ID = 222;
```

Instead of repeatedly writing `string | number`, we can create a reusable alias called `ID`.

---

## Interface Extension

Interfaces can inherit properties from other interfaces using the `extends` keyword.

### Example

```ts
interface User {
  name: string;
  phone: number;
}

interface Customer extends User {
  address: string;
}

let myCustomer: Customer = {
  name: "x",
  phone: 2635263,
  address: "abc",
};
```

In this example:

- `Customer` inherits all properties from `User`.
- `Customer` must contain `name`, `phone`, and `address`.

---

## Type Composition Using Intersection Types

Type aliases can be combined using the intersection operator (`&`).

### Example

```ts
type Vehicle = {
  maker: string;
  model: string;
};

type Car = Vehicle & {
  isElectric: boolean;
};

let myCar: Car = {
  maker: "BMW",
  model: "M5",
  isElectric: true,
};
```

The `Car` type contains all properties from `Vehicle` plus the `isElectric` property.

---

## Main Differences Between Interface and Type Alias

Both Interfaces and Type Aliases can be used to define object shapes, but there are some important differences.

### 1. Declaration Merging

Interfaces support declaration merging, while Type Aliases do not.

#### Interface Example

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}
```

TypeScript automatically merges both declarations into:

```ts
interface User {
  name: string;
  age: number;
}
```

This is valid.

#### Type Alias Example

```ts
type User = {
  name: string;
};

type User = {
  age: number;
};
```

This will result in an error because type aliases cannot be declared multiple times with the same name.

---

### 2. Extending and Combining Types

Interfaces use the `extends` keyword.

```ts
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}
```

Type aliases use intersection types (`&`).

```ts
type Animal = {
  name: string;
};

type Dog = Animal & {
  breed: string;
};
```

---

### 3. Flexibility

Type aliases can represent more than just object shapes.

```ts
type ID = string | number;
```

Interfaces cannot directly represent union types.

---

## When to Use What?

### Use Interfaces When:

- Defining object structures.
- Working with classes.
- You need declaration merging.
- You expect other developers to extend your types.

### Use Type Aliases When:

- Creating union types.
- Creating intersection types.
- Aliasing primitive types.
- Creating function type definitions.
- Working with more complex type compositions.

> In modern TypeScript, both are widely used. A common convention is to use **Interfaces for object shapes** and **Type Aliases for everything else**.