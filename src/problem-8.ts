
function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
    for (let index: number = 0; index < keys.length; index++) {
        if (!(keys[index] in (obj as object))) {
            return false
        }
    }
    return true;
}

// const person = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(validateKeys(person, ["email","namde", "age",]));