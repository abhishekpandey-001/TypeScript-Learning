# Basic Types

This section will be covering basic types that we see in typeScript and will also compare it with JavaScript side by side.

# Built-in Types

We get same types as we have in Javascript but we get some additional types in typescript which are: any, unknown, never, enum, tupple including JS types which are: number, string, boolean, null, undefined, object.

## Type Inference
Type inference is TypeScript's ability to automatically detect and assign data types to variables, functions, and expressions based on their initial values or surrounding context, without requiring explicit type annotations.

### Key Rules:
- **Automatic:** `let num = 1` is instantly typed as `number`.
- **Enforced:** Once inferred, TypeScript locks the type and blocks invalid assignments (e.g., changing a number to a string).
- **The Catch:** Declaring a variable without a value (e.g., `let num;`) fails inference and defaults to `any`.
