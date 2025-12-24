console.log("Exercise 7");
console.log("Object");

let user = {
    name : "Naka",
    age : 17,
    city : "Tokyo",
    isStudent : true
};

console.log(user.name);
console.log(user.age);
console.log(user.city);
console.log(user.isStudent);

user.email = "naka@gmail.com";
console.log(user.email);

function canUserRegister(user){
    return user.age >=20 || user.isStudent;
}

let result = canUserRegister(user);
console.log(`Can User Register: ${result}`);