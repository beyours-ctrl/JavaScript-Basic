console.log("Exercise 8");
console.log("Array Of Object");

let applicants = [
    {name : "Naka", age: 20, isStudent : true},
    {name : "Sinji", age: 21, isStudent : true},
    {name : "Ayasa", age: 18, isStudent : false}
];

let totalAccepted = 0;

for(let i=0; i < applicants.length; i++){
    let accepted = applicants[i].age >= 20 && applicants[i].isStudent;

    console.log(`Nama: ${applicants[i].name}`);
    if(accepted){
        console.log("Status: Accepted");
        totalAccepted++;
    }else{
        console.log("Status: Rejected")
    }
}
console.log(`Total Applicants: ${applicants.length}`);
console.log(`Total Accepted: ${totalAccepted}`);