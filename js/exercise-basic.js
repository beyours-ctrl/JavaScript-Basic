console.log("Exercise - Basic");

let applicants = [];
let form = document.getElementById("form");
let list = document.getElementById("list");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);
    let student = document.getElementById("student").checked;
    let error = document.getElementById("error");

    if (name === ""){
        error.textContent = "Name cannot be empty";
        return;
    };

    if (age <=0){
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
        <button data-index="${i}">Delete</button>
        </li>`;
    };
});

list.addEventListener("click", function(event){
    if (event.target.tagName === "BUTTON"){
        let index = Number(event.target.dataset.index);
        applicants.splice(index, 1);

        list.innerHTML = "";

        for (let i = 0; i < applicants.length; i++) {
            let accepted = applicants[i].age >=18 && applicants[i].student;

            list.innerHTML += 
            `<li>
                ${applicants[i].name} - ${accepted ? "Accepted" : "Rejected"}
                <button data-index="${i}">Delete</button>
            </li>`;
        };
    };
});