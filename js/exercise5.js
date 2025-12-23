console.log("Exercise 5");
console.log("Function");

function checkRegistration(age, isStudent){
    return age >=18 && isStudent;
}

let result = checkRegistration(20, true);
console.log(`Can Register: ${result}`);