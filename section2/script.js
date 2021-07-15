// 'use strict';

function calAge(birthYear) {
    return 2030 - birthYear;
}

const calRetirement = function(age) {
    return 65 - age;
}

const yearsUntilRetirement = (birthYear, name) => {
    const age = calAge(birthYear);
    let retirement = calRetirement(age);

    retirement = retirement >= 1 ?  retirement : -1;

    return `${name} retire in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1990, "Vikash"));




// ###################################################

const vikash = {
    firstName: "Vikash",
    lastName: "Kumar",
    birthYear: 1998,
    interested: 'Developer',
    hasDrivingLicense: false,

    calcAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        this.summary = `${this.firstName} ${this.lastName} is a ${this.calcAge()}-years old ${this.interested}, and he has ${this.hasDrivingLicense ? "a" : "no"} Drive's License.`;
        return this.summary;
    }
}

console.log(vikash.getSummary());

// ###################################################




// ###################### Challenge 1 of part 2 ####################

const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

function checkWinner (dolphinsScore, koalasScore) {
    if ((dolphinsScore > koalasScore) && (dolphinsScore >= (2*koalasScore))) {
        console.log(`Dolphin win (${dolphinsScore} vs ${koalasScore})`);
    } else if ((dolphinsScore < koalasScore) && ((2*dolphinsScore) <= koalasScore)) {
        console.log(`Koalas win (${koalasScore} vs ${dolphinsScore})`);
    } else {
        console.log("No winner");
    }
}

const dolphinsScore = calcAverage(85, 54, 41);
const koalasScore = calcAverage(23, 34, 27);

checkWinner(dolphinsScore, koalasScore);




// ###################### Challenge 2 of part 2 ####################

// Tip calculation
const calcTip = bill => {
    const tip = (bill >= 50 && bill <= 300) ? bill*0.15 : bill*0.2;
    return tip;
}

// Actual bills
const bills = [125, 555, 44];

// Corresponding tips
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// Corresponding total bills
const totalBills = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(totalBills);




// ###################### Challenge 3 of part 2 ####################

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
}

const john = {
    fullName: "John Smith",
    mass: 95,
    height: 1.95,

    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
}

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI}).`);
} else {
    console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI}).`);
}



// ###################### Challenge 4 of part 2 ####################

// Tip calculation
const calcTip = bill => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

// Bills array
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Tips and Total Bills array
const tips = [];
const totalBills = [];

for (let i=0; i< bills.length; i++) {

    // Pushing tip values in tips array
    tips.push(calcTip(bills[i]));

    // Pushing tatal bill in totalBills array
    totalBills.push(bills[i] + tips[i]);
}

console.log(bills, tips, totalBills);

// Bonus challenge of Challenge 4
const calcAverage = arr => {
    let sum = 0;

    for (let i=0; i< arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}

console.log(`Average total bill payable is ${calcAverage(totalBills)}`);



// ###################### Challenge 4 of part 2 ####################

const printForcast = arr => {
    for (let i=0; i<arr.length; i++) {
        console.log(`${arr[i]} degree C in ${i+1}day.`);
    }
}

const temperatures = [17, 21, 23];
printForcast(temperatures);