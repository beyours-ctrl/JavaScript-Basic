console.log("Exercise 10");
console.log("Input Validation");

let applicants = [];

document.getElementById("btnAdd").onclick = function(){
    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);
    let student = document.getElementById("student").checked;
    let error = document.getElementById("error");
    let list = document.getElementById("list");

    if(name === "") {
        error.textContent = "Name cannot be empty";
        return;
    };

    if(age <= 0) {
        error.textContent = "Age must be more than 0";
        return;
    };
    error.textContent = "";

    applicants.push({name, age, student});
    list.innerHTML = "";

    for (let i=0; i < applicants.length; i++){
        let accepted = applicants[i].age >=19 && applicants[i].student;

        if(accepted){
            list.innerHTML += `<li>${applicants[i].name} - Accepted</li>`;
        } else {
            list.innerHTML += `<li>${applicants[i].name} - Rejected</li>`;
        };
    };
};