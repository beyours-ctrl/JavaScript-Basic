console.log("Exercise 9");
console.log("Document Of Model(DOM) - Basic");

let applicants = [];

document.getElementById("btnAdd").onclick = function(){
    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);
    let student = document.getElementById("student").checked;
    let list = document.getElementById("list");

    applicants.push({name, age, student});
    list.innerHTML = "";

    for (let i = 0; i < applicants.length; i++){
        let accepted = applicants[i].age >=20 && applicants[i].student;

        if(accepted){
            list.innerHTML += `<li>${applicants[i].name} \n | Status : Accepted </li>`;
        } else {
            list.innerHTML += `<li>${applicants[i].name} \n | Status : Rejected </li>`
        }       
    }
};