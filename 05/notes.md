# Classes, Access Modifiers, Inheritance, Abstract Classes, Getters and Setters

In this section, we will learn about Classes, Access Modifiers, Inheritance, Abstract Classes, and Getters & Setters in TypeScript.

---

## Classes

A Class is a blueprint for creating objects. It allows us to group related properties and methods together.

Classes help us implement Object-Oriented Programming (OOP) concepts such as encapsulation, inheritance, and polymorphism.

### Example

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello my name is ${this.name}, and I am ${this.age} years old`;
  }
}

const person = new Person("Sakshi", 24);

console.log(person.greet());
```

### Key Components of a Class

- **Properties** → Variables that belong to the class.
- **Constructor** → A special method used to initialize objects.
- **Methods** → Functions defined inside a class.
- **Objects** → Instances created from a class.

In the above example:

- `name` and `age` are properties.
- `constructor()` initializes the object.
- `greet()` is a method.
- `person` is an object (instance) of the `Person` class.

---

## Access Modifiers

Access Modifiers control the visibility and accessibility of class properties and methods.

TypeScript provides three access modifiers:

- `public`
- `private`
- `protected`

### Public

Public members can be accessed from anywhere.

This is the default access modifier if none is specified.

```ts
class User {
  public name: string = "Batman";
}

const user = new User();

console.log(user.name);
```

---

### Private

Private members can only be accessed within the class where they are defined.

```ts
class Car {
  private make: string;

  constructor(make: string) {
    this.make = make;
  }
}
```

The following will result in an error:

```ts
const car = new Car("BMW");

// Error
console.log(car.make);
```

---

### Protected

Protected members can be accessed within the class and its subclasses.

```ts
class Car {
  protected year: number;

  constructor(year: number) {
    this.year = year;
  }
}
```

A child class can access the protected property, but code outside the class hierarchy cannot.

---

### Example

```ts
class Car {
  private make: string;
  public model: string;
  protected year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getModel(): string {
    return this.model;
  }
}

const car = new Car("BMW", "BMW M5", 2025);
```

### Access Modifier Comparison

| Modifier | Same Class | Child Class | Outside Class |
|----------|------------|-------------|---------------|
| public | ✅ | ✅ | ✅ |
| protected | ✅ | ✅ | ❌ |
| private | ✅ | ❌ | ❌ |

---

## Inheritance

Inheritance allows one class to acquire the properties and methods of another class.

This promotes code reusability and helps establish relationships between classes.

Inheritance is achieved using the `extends` keyword.

### Example

```ts
class Animal {
  constructor(public name: string) {}

  makeSound(): void {
    console.log("Animal is making a sound.....");
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  makeSound(): void {
    console.log("Woof! Woof! Woof!");
  }
}

const dog = new Dog("Tommy");
dog.makeSound();
```

### The `super` Keyword

The `super` keyword is used to call the constructor or methods of the parent class.

```ts
super(name);
```

This initializes the parent class before the child class is fully created.

### Method Overriding

A child class can provide its own implementation of a method inherited from the parent class.

In the above example:

```ts
makeSound(): void {
  console.log("Woof! Woof! Woof!");
}
```

This overrides the `makeSound()` method from the `Animal` class.

---

## Abstract Classes

An Abstract Class is a class that cannot be instantiated directly.

It is used as a base class from which other classes can inherit.

Abstract classes can contain:

- Abstract methods
- Concrete methods

### Abstract Methods

Abstract methods do not have an implementation.

Any class inheriting from the abstract class must implement those methods.

### Example

```ts
abstract class Shape {
  abstract getArea(): number;

  printArea(): void {
    console.log(`The area is ${this.getArea()}`);
  }
}
```

### Implementing an Abstract Class

```ts
class Rectangle extends Shape {
  constructor(
    private width: number,
    private height: number,
  ) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const rect = new Rectangle(5, 10);

rect.printArea();
```

In this example:

- `Shape` cannot be instantiated directly.
- `Rectangle` extends `Shape`.
- `Rectangle` must implement the `getArea()` method.

---

## Getters and Setters

Getters and Setters allow us to control how class properties are accessed and modified.

They help enforce validation and encapsulation.

### Example

```ts
class Circle {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  get _radius(): number {
    return this.radius;
  }

  set _radius(value: number) {
    if (value <= 0) {
      throw new Error("Radius must be positive");
    }

    this.radius = value;
  }
}

const circle = new Circle(10);

console.log(circle._radius);

circle._radius = 12;

console.log(circle._radius);
```

### Getter

A Getter is used to retrieve the value of a property.

```ts
get _radius(): number {
  return this.radius;
}
```

### Setter

A Setter is used to update the value of a property and can include validation logic.

```ts
set _radius(value: number) {
  if (value <= 0) {
    throw new Error("Radius must be positive");
  }

  this.radius = value;
}
```

### Benefits of Getters and Setters

- Encapsulation of internal data.
- Validation before updating values.
- Better control over property access.
- Improved maintainability of code.

---

## Summary

- Classes are blueprints used to create objects.
- Access Modifiers control member visibility using `public`, `private`, and `protected`.
- Inheritance allows a class to reuse properties and methods from another class.
- The `super` keyword is used to access parent class constructors and methods.
- Abstract Classes define contracts that child classes must implement.
- Getters and Setters provide controlled access to class properties.