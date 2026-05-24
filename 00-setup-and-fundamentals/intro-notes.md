# What is TypeScript?

TypeScript is a **strongly-typed superset of JavaScript** developed by Microsoft.

It adds features like:
- Static typing
- Better error checking
- Improved tooling support
- Enhanced code readability and maintainability

TypeScript code is eventually compiled into JavaScript before execution.

---

# TypeScript vs JavaScript

| Feature | TypeScript (TS) | JavaScript (JS) |
|---|---|---|
| **Type System** | Statically typed | Dynamically typed |
| **Compilation** | Needs to be compiled into JavaScript | Directly executed by browser/Node.js |
| **Error Checking** | Errors detected at compile time | Errors detected at runtime |
| **OOP Support** | Better support with interfaces, generics, and classes | Prototype-based OOP support |
| **Code Scalability** | Easier to scale for large applications | Harder to maintain in large projects |
| **Use Case** | Large and complex applications | Small projects and rapid prototyping |
| **Interoperability** | Can use JavaScript libraries and code | Compatible with compiled TypeScript |
| **Development Speed** | Slightly slower due to type checking and compilation | Faster development setup |
| **Community Support** | Growing rapidly for enterprise applications | Very large and established community |
| **Tooling Support** | Excellent editor support, autocompletion, and refactoring | Basic tooling support |
| **ES6+ Features** | Supports ES6+ features and future proposals | Depends on browser/Node.js support |

---

# Example: Dynamic Typing vs Static Typing

## JavaScript (Dynamic Typing)

```js
let value = "Hello";
value = 100; // Allowed
```

## TypeScript (Static Typing)

```ts
let value: string = "Hello";

value = 100; // Error
```

---

# Why TypeScript?

TypeScript is widely used because it:

- Reduces bugs during development
- Improves code maintainability
- Makes large codebases easier to manage
- Provides excellent IDE support
- Helps teams write cleaner and safer code

# How TypeScript works?

TypeScript is a superset of JavaScript so under the hood it is still javascript. So, the code we write in TS get transpiled into JS code and then the code of JS get to come in implementation and running. This ensures the cross-platform execution.

# Backward Compatibility

TypeScript supports modern javascript features (ES6+) even when older browsers might not. During compilation, TypeScript converts these modern features into a form that older browsers can understand.

# How to Run the TypeScrpt File?
- install a global file called tsconfig.json
- to run use: npx tsx index.ts or ts-node index.ts
- to create tsconfig.json: tsc --init or npx tsc --init