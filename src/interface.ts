interface User {
    name: string,
    email: string
};

function profile(user: User): string {
    return user.name;
}

const user = {
    name: "nandhi",
    email: "nandhi@gmail.com"
};

console.log(profile(user));