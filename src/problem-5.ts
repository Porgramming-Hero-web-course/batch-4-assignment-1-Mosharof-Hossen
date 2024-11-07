
function getProperty<T, Q extends keyof T>(obj: T, property: Q): T[Q] {
    return obj[property]
}


// const person = { name: "Alice", age: 30 ,isAdmin:true};
// console.log(getProperty(person, "name"));