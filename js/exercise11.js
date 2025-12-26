console.log("Exercise 11");
console.log("submit EVENT & preventDefault()");

let applicants = [];

document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);
    let student = document.getElementById("student").checked;
    let error = document.getElementById("error");
    let list = document.getElementById("list");

    if (name === ""){
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

    for (let i = 0; i < applicants.length; i++){
        let accepted = applicants[i].age >=18 && applicants[i].student;

        list.innerHTML += 
        `<li>
            ${applicants[i].name} - ${accepted ? "Accepted" : "Rejected"}
        </li>`;
    };
});