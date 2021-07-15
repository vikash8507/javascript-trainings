// ##################### Coding Challenge 1: Basic operations ###########################

const markMass = 95;
const markHeight = 1.88;

const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight ** 2);

const markHeightBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHeightBMI);


// ##################### Coding Challenge 2: If Else ###########################

const markMass = 95;
const markHeight = 1.88;

const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / (markHeight ** 2);
const johnBMI = johnMass / (johnHeight ** 2);

let result;
if (markBMI > johnBMI) {
    result = `Mark's BMI(${markBMI} is higher than John's BMI(${johnBMI}))`;
} else {
    result = `John's BMI(${johnBMI} is higher than Mark's BMI(${markBMI}))`;
}
console.log(result);


// ##################### Coding Challenge 3: If Else with Logical operatos ###########################

const dolphinsScore = (97 + 112 + 101) / 3;
const koalasScore = (109 + 95 + 105) / 3;

if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
    console.log("Dolphins win the trophy🎉.");
} else if (dolphinsScore < koalasScore && koalasScore >= 100) {
    console.log("Koalas win the trophy🎉.");
} else if (dolphinsScore === koalasScore && koalasScore >= 100) {
    console.log("Both teams win the trophy🎉.");
} else {
    console.log("No team win the trophy🤐.");
}


// ##################### Coding Challenge 4: If Else or Ternary operator with Logical operatos ###########################
const bill = 430;

const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total amount was ${bill + tip}`);
