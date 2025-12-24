console.log("Exercise 6");
console.log("Array");

let participants = ["Naka", "Sinji", "Okarun", "Doki"];

participants.push("Ayasa");

for(let i = 0; i < participants.length; i++){
    console.log(`Participants - ${i + 1}: ${participants[i]}`);
}
    console.log(`Total Participants: ${participants.length}`);