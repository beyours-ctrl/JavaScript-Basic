console.log("Exercise 13");
console.log("Basic Concepts Of Editing");

let applicants = [];
let editIndex = null;
let form = document.getElementById("form");
let list = document.getElementById("list");
let error = document.getElementById("error");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);
    let student = document.getElementById("student").checked;

    if (name === ""){
        error.textContent = "Name cannot be empty";
        return;
    };

    if (age <= 0){
        error.textContent = "Age must be more than 0";
        return;
    };
    error.textContent = "";

    if (editIndex === null){
        applicants.push({name, age, student});
    } else { 
        applicants[editIndex] = {name, age, student};
        editIndex = null;
    };

    form.reset();
    renderList();
});

list.addEventListener("click", function(event){
    if (event.target.tagName === "BUTTON"){
        let index = Number(event.target.dataset.index);
        let action = event.target.dataset.action;

        if (action === "delete"){
            applicants.splice(index, 1);
        };

        if (action === "edit"){
            let data = applicants[index];

            document.getElementById("name").value = data.name;
            document.getElementById("age").value = data.age;
            document.getElementById("student").checked = data.student;

            editIndex = index;
        };
        renderList();
    };
});

let clearAll = document.getElementById("delete-all");

clearAll.addEventListener("click", function(event){
    applicants = [];
    renderList();
});

function renderList(){
    list.innerHTML = "";

    for (let i = 0; i < applicants.length; i++){
        let accepted = applicants[i].age >= 18 && applicants[i].student;

        list.innerHTML += 
        `<li>
            Name: ${applicants[i].name}  | Age: ${applicants[i].age}  - Status: ${accepted ? "Accepted" : "Rejected"}
            <button data-index="${i}" data-action="edit">Edit</button>
            <button data-index="${i}" data-action="delete">Delete</button>
        </li>`;
    };
};