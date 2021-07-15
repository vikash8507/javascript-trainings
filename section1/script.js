// ################# First Assignment: Value #####################

let country = "India";
let continent = "Asia";
let population = "12500000";

console.log(country);
console.log(continent);
console.log(population);



// ################## Second Assignment: If-Else with user input #########################

const numNeighbors = Number(prompt("How many neighbor countries does your country have? "));

if (numNeighbors === 1) {
    console.log("Only 1 border.");
} else if (numNeighbors >= 1) {
    console.log("More than 1 border.");
} else {
    console.log("No border.");
}



// ################## Second Assignment: Switch Statements #########################

const lang = "hindi";

switch (lang) {
    case "chinese":
    case "mandarin":
        console.log("Most number of native speakers!");
    case "spanish":
        console.log("2nd Place in number of native speakers!");
    case "english":
        console.log("3rd Place!");
        break;
    case "hindi":
        console.log("Number 4");
        break;
    case "arbic":
        console.log("5th most peakinng language");
        break;
    default:
        console.log("Great language to :D");
        break;
}