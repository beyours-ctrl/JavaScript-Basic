console.log("Exercise 11");
console.log("submit EVENT & preventDefault()");

let applicants = [];

document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("name").value);
    let student = document.getElementById("student").checked;
    let error = document.getElementById("error");
    let list = document.getElementById("list");

    if (name === ""){
        error.textContent = "Name cannot be empty";
        return;
    }

    if(age <= 0) {
        error.textContent = "Age must be more than 0";
        return;
    };
    error.textContent = "";

    applicants.push({name, age, student});
    list.innerHTML = "";
});