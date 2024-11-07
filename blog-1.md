# Union Type to Intersection Type in TypeScript

Union and Intersection types are two important concepts in TypeScript, used to create relationships between types. Which helps to make the typing system in our code more flexible and clear.

## Union Type
Suppose, if the value of a variable can be any of string, number, boolean, etc., then how do we declare the type of that variable? In that case we use Union Type. A Union Type in TypeScript is a type that can be one of multiple types. This means a variable or property can hold values of more than one specified type. That is, we can assign multiple types to a variable and its value can be any of the specified types .

Example:
```typescript
type RollNumber = string | number;      
let rollNumber: RollNumber = "10";      // Valid because it is a `string`
rollNumber = 10;                        // Valid because it is a `number`
rollNumber = true                       // Invalid because 'boolean' is not assignable to type 'string | number'
```
Note: Union Type (|): The variable can be any one of multiple types. Example: string | number | boolean

## Intersection Type
An Intersection Type in TypeScript is a type created by combining multiple types. With an Intersection type, a variable or object must fulfill all properties of each combined type.

Example:
```typescript
interface FrontEnd {
        developerName: string;
        frontEndSkill: string;
    }
interface BackEnd {
        developerName: string;
        backEndSkill: string;
    }
const fullStack: FrontEnd & BackEnd = {       // Creating an intersection type
        developerName: "Hossen",
        frontEndSkill: "HTML, React Js",
        backEndSkill: "Node Js, MongoDb"
    }
```
Here, the fullStack object combines both the FrontEnd and BackEnd interfaces, meaning it must contain all properties: developerName, frontEndSkill and backEndSkill.

Note: Intersection Type (&): The variable must satisfy all properties of multiple types. Example: FrontEnd & BackEnd
