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

const person = new Person("Sakshi", 24); // We are calling the construction function here which we have made above

console.log(person.greet());

// Access modifiers (public, private, protected)

/*
public: Accessible from everywhere. This is default if no modifier is specified.
private: Accessible only within the class
protected: Accessible within the class and its subclasses
*/

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

// Inheritance
/*
With the help of inheritance we can use the properties and methods of one class into another class by extending it
*/

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

// Abstract Class
abstract class Shape {
  abstract getArea(): number; // abstract method, must be implemented by subclasses

  printArea(): void {
    console.log(`The area is ${this.getArea()}`);
  }
}

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

// Setters and Getters
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
console.log(circle._radius)