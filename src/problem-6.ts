interface Profile {
    name: string;
    age: number;
    email: string
};

function updateProfile(info: Profile, updateInfo: { [T in keyof Profile]?: Profile[T] }): Profile {
    return { ...info, ...updateInfo }
}



// const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(updateProfile(myProfile, {name: "xx", age: 11}));
