Union and Intersection types are two important concepts in TypeScript, used to create relationships between types. Which helps to make the typing system in our code more flexible and clear.

## Union Type
Suppose, if the value of a variable can be any of string, number, boolean, etc., then how do we declare the type of that variable? In that case we use Union Type. A Union Type in TypeScript is a type that can be one of multiple types. This means a variable or property can hold values of more than one specified type. That is, we can assign multiple types to a variable and its value can be any of the specified types .
```typescript
type RollNumber = string | number;      
let rollNumber: RollNumber = "10";      // Valid because it is a `string`
rollNumber = 10;                        // Valid because it is a `number`
rollNumber = true                       // Invalid because 'boolean' is not assignable to type 'string | number'
```
