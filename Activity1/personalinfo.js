
const students = [
    {
        studentName: "Mexandryl Derder",
        idNumber: "2026 - 6716",
        yearLevel: "II",
        Program: "Information Technology",
        grades: [99, 98, 97, 96, 95, 94, 99]
    },
    {
        studentName: "Caliging, Angelo A.",
        idNumber: "2026 - 6862",
        yearLevel: "II",
        Program: "Information Technology",
        grades: [95, 94, 96, 93, 92, 95, 98]
    },
    {
        studentName: "Vinluan, Kevin B.",
        idNumber: "2026 - 6648",
        yearLevel: "II",
        Program: "Information Technology",
        grades: [90, 92, 91, 94, 89, 93, 95]
    },
    {
        studentName: "Balbin, Benz P.",
        idNumber: "2026 - 6719",
        yearLevel: "II",
        Program: "Information Technology",
        grades: [88, 90, 87, 91, 89, 92, 94]
    }
];

const subjects = [
    { subjectName: "Data Structures and Algorithms (DSA)", units: 3 },
    { subjectName: "Web Development 2 (Web2)", units: 3 },
    { subjectName: "Object-Oriented Programming (OOP)", units: 3 },
    { subjectName: "Mobile Application Development", units: 3 },
    { subjectName: "Information Management 1", units: 3 },
    { subjectName: "Life and Works of Jose Rizal", units: 3 },
    { subjectName: "PATHFIT 3", units: 2 }
];


// TOTAL UNITS
let totalUnit = subjects[0].units + subjects[1].units + subjects[2].units + subjects[3].units + subjects[4].units + subjects[5].units + subjects[6].units;


// STUDENT 1 - MEXANDRYL DERRDER

let totalGrade = 
    (students[0].grades[0] * subjects[0].units) +
    (students[0].grades[1] * subjects[1].units) +
    (students[0].grades[2] * subjects[2].units) +
    (students[0].grades[3] * subjects[3].units) +
    (students[0].grades[4] * subjects[4].units) +
    (students[0].grades[5] * subjects[5].units) +
    (students[0].grades[6] * subjects[6].units);

let gwa = totalGrade / totalUnit;
let remark = "";

if (gwa >= 98 && gwa <= 100) {
    remark = "A";
} else if (gwa >= 94 && gwa <= 97) {
    remark = "A-";
} else if (gwa >= 90 && gwa <= 93) {
    remark = "B+";
} else if (gwa >= 87 && gwa <= 89) {
    remark = "B";
} else if (gwa >= 83 && gwa <= 86) {
    remark = "B-";
} else if (gwa >= 80 && gwa <= 82) {
    remark = "C+";
} else if (gwa >= 77 && gwa <= 79) {
    remark = "C";
} else if (gwa >= 73 && gwa <= 76) {
    remark = "D";
} else if (gwa >= 0 && gwa <= 72) {
    remark = "F";
} else {
    remark = "Incomplete";
}

console.log("======== STUDENT 1 ========");
console.log(students[0].studentName);
console.log(students[0].idNumber);
console.log(students[0].yearLevel);
console.log(students[0].Program);
console.log("==== COURSES ENROLLED ====");
console.log(subjects[0].subjectName + ": " + students[0].grades[0] + " | Units: " + subjects[0].units);
console.log(subjects[1].subjectName + ": " + students[0].grades[1] + " | Units: " + subjects[1].units);
console.log(subjects[2].subjectName + ": " + students[0].grades[2] + " | Units: " + subjects[2].units);
console.log(subjects[3].subjectName + ": " + students[0].grades[3] + " | Units: " + subjects[3].units);
console.log(subjects[4].subjectName + ": " + students[0].grades[4] + " | Units: " + subjects[4].units);
console.log(subjects[5].subjectName + ": " + students[0].grades[5] + " | Units: " + subjects[5].units);
console.log(subjects[6].subjectName + ": " + students[0].grades[6] + " | Units: " + subjects[6].units);
console.log("GWA: " + gwa.toFixed(2));
console.log("Remark: " + remark);
console.log("===========================");


// STUDENT 2 - ANGELO

let totalGrade2 =
    (students[1].grades[0] * subjects[0].units) +
    (students[1].grades[1] * subjects[1].units) +
    (students[1].grades[2] * subjects[2].units) +
    (students[1].grades[3] * subjects[3].units) +
    (students[1].grades[4] * subjects[4].units) +
    (students[1].grades[5] * subjects[5].units) +
    (students[1].grades[6] * subjects[6].units);

let gwa2 = totalGrade2 / totalUnit;
let remark2 = "";

if (gwa2 >= 98 && gwa2 <= 100) {
    remark2 = "A";
} else if (gwa2 >= 94 && gwa2 <= 97) {
    remark2 = "A-";
} else if (gwa2 >= 90 && gwa2 <= 93) {
    remark2 = "B+";
} else if (gwa2 >= 87 && gwa2 <= 89) {
    remark2 = "B";
} else if (gwa2 >= 83 && gwa2 <= 86) {
    remark2 = "B-";
} else if (gwa2 >= 80 && gwa2 <= 82) {
    remark2 = "C+";
} else if (gwa2 >= 77 && gwa2 <= 79) {
    remark2 = "C";
} else if (gwa2 >= 73 && gwa2 <= 76) {
    remark2 = "D";
} else if (gwa2 >= 0 && gwa2 <= 72) {
    remark2 = "F";
} else {
    remark2 = "Incomplete";
}

console.log("======== STUDENT 2 ========");
console.log(students[1].studentName);
console.log(students[1].idNumber);
console.log(students[1].yearLevel);
console.log(students[1].Program);
console.log("==== COURSES ENROLLED ====");
console.log(subjects[0].subjectName + ": " + students[1].grades[0] + " | Units: " + subjects[0].units);
console.log(subjects[1].subjectName + ": " + students[1].grades[1] + " | Units: " + subjects[1].units);
console.log(subjects[2].subjectName + ": " + students[1].grades[2] + " | Units: " + subjects[2].units);
console.log(subjects[3].subjectName + ": " + students[1].grades[3] + " | Units: " + subjects[3].units);
console.log(subjects[4].subjectName + ": " + students[1].grades[4] + " | Units: " + subjects[4].units);
console.log(subjects[5].subjectName + ": " + students[1].grades[5] + " | Units: " + subjects[5].units);
console.log(subjects[6].subjectName + ": " + students[1].grades[6] + " | Units: " + subjects[6].units);
console.log("GWA: " + gwa2.toFixed(2));
console.log("Remark: " + remark2);
console.log("===========================");


// STUDENT 3 - KEVIN

let totalGrade3 =
    (students[2].grades[0] * subjects[0].units) +
    (students[2].grades[1] * subjects[1].units) +
    (students[2].grades[2] * subjects[2].units) +
    (students[2].grades[3] * subjects[3].units) +
    (students[2].grades[4] * subjects[4].units) +
    (students[2].grades[5] * subjects[5].units) +
    (students[2].grades[6] * subjects[6].units);

let gwa3 = totalGrade3 / totalUnit;
let remark3 = "";

if (gwa3 >= 98 && gwa3 <= 100) {
    remark3 = "A";
} else if (gwa3 >= 94 && gwa3 <= 97) {
    remark3 = "A-";
} else if (gwa3 >= 90 && gwa3 <= 93) {
    remark3 = "B+";
} else if (gwa3 >= 87 && gwa3 <= 89) {
    remark3 = "B";
} else if (gwa3 >= 83 && gwa3 <= 86) {
    remark3 = "B-";
} else if (gwa3 >= 80 && gwa3 <= 82) {
    remark3 = "C+";
} else if (gwa3 >= 77 && gwa3 <= 79) {
    remark3 = "C";
} else if (gwa3 >= 73 && gwa3 <= 76) {
    remark3 = "D";
} else if (gwa3 >= 0 && gwa3 <= 72) {
    remark3 = "F";
} else {
    remark3 = "Incomplete";
}

console.log("======== STUDENT 3 ========");
console.log(students[2].studentName);
console.log(students[2].idNumber);
console.log(students[2].yearLevel);
console.log(students[2].Program);
console.log("==== COURSES ENROLLED ====");
console.log(subjects[0].subjectName + ": " + students[2].grades[0] + " | Units: " + subjects[0].units);
console.log(subjects[1].subjectName + ": " + students[2].grades[1] + " | Units: " + subjects[1].units);
console.log(subjects[2].subjectName + ": " + students[2].grades[2] + " | Units: " + subjects[2].units);
console.log(subjects[3].subjectName + ": " + students[2].grades[3] + " | Units: " + subjects[3].units);
console.log(subjects[4].subjectName + ": " + students[2].grades[4] + " | Units: " + subjects[4].units);
console.log(subjects[5].subjectName + ": " + students[2].grades[5] + " | Units: " + subjects[5].units);
console.log(subjects[6].subjectName + ": " + students[2].grades[6] + " | Units: " + subjects[6].units);
console.log("GWA: " + gwa3.toFixed(2));
console.log("Remark: " + remark3);
console.log("===========================");


// STUDENT 4 - BENZ

let totalGrade4 =
    (students[3].grades[0] * subjects[0].units) +
    (students[3].grades[1] * subjects[1].units) +
    (students[3].grades[2] * subjects[2].units) +
    (students[3].grades[3] * subjects[3].units) +
    (students[3].grades[4] * subjects[4].units) +
    (students[3].grades[5] * subjects[5].units) +
    (students[3].grades[6] * subjects[6].units);

let gwa4 = totalGrade4 / totalUnit;
let remark4 = "";

if (gwa4 >= 98 && gwa4 <= 100) {
    remark4 = "A";
} else if (gwa4 >= 94 && gwa4 <= 97) {
    remark4 = "A-";
} else if (gwa4 >= 90 && gwa4 <= 93) {
    remark4 = "B+";
} else if (gwa4 >= 87 && gwa4 <= 89) {
    remark4 = "B";
} else if (gwa4 >= 83 && gwa4 <= 86) {
    remark4 = "B-";
} else if (gwa4 >= 80 && gwa4 <= 82) {
    remark4 = "C+";
} else if (gwa4 >= 77 && gwa4 <= 79) {
    remark4 = "C";
} else if (gwa4 >= 73 && gwa4 <= 76) {
    remark4 = "D";
} else if (gwa4 >= 0 && gwa4 <= 72) {
    remark4 = "F";
} else {
    remark4 = "Incomplete";
}

console.log("======== STUDENT 4 ========");
console.log(students[3].studentName);
console.log(students[3].idNumber);
console.log(students[3].yearLevel);
console.log(students[3].Program);
console.log("==== COURSES ENROLLED ====");
console.log(subjects[0].subjectName + ": " + students[3].grades[0] + " | Units: " + subjects[0].units);
console.log(subjects[1].subjectName + ": " + students[3].grades[1] + " | Units: " + subjects[1].units);
console.log(subjects[2].subjectName + ": " + students[3].grades[2] + " | Units: " + subjects[2].units);
console.log(subjects[3].subjectName + ": " + students[3].grades[3] + " | Units: " + subjects[3].units);
console.log(subjects[4].subjectName + ": " + students[3].grades[4] + " | Units: " + subjects[4].units);
console.log(subjects[5].subjectName + ": " + students[3].grades[5] + " | Units: " + subjects[5].units);
console.log(subjects[6].subjectName + ": " + students[3].grades[6] + " | Units: " + subjects[6].units);
console.log("GWA: " + gwa4.toFixed(2));
console.log("Remark: " + remark4);
console.log("===========================");
