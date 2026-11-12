const personalInfo = {
    studentName: "Mexandryl Derder",
    idNumber: "2026 - 6716",
    yearLevel: "||",
    Program: "Information Technology"
}

const subject = {
    sub1: "DSA",
    sub2: "Web2",
    sub3: "OOP",
    sub4: "MObile App",
    sub5: "Informative Management 1",
    sub6: "Life and Works of Rizal",
    sub7: "Pathfit 3"
}

let grade1 = 99;
let unit1 = 3;

let grade2 = 99;
let unit2 = 3;

let grade3 = 99;
let unit3 = 3;

let grade4 = 99;
let unit4 = 3;

let grade5 = 99;
let unit5 = 3;

let grade6 = 99;
let unit6 = 3;

let grade7 = 99;
let unit7 = 2;

let totalGrade = (grade1 * unit1) + (grade2 * unit2) + (grade3 * unit3) + (grade4 * unit4) + (grade5 * unit5) + (grade6 * unit6) + (grade7 * unit7);
let totalUnit = unit1 + unit2 + unit3 + unit4 + unit5 + unit6 + unit7;

let Final_grade = totalGrade / totalUnit;
let gwa = totalGrade / totalUnit;
let remark = "";

if (gwa == 100) {
    remark = "A"
} else if (gwa >= 97) {
    remark = "A"
} else if (gwa >= 94) {
    remark = "A-"
} else if (gwa >= 90) {
    remark = "B+"
} else if (gwa >= 87) {
    remark = "B"
} else if (gwa >= 83) {
    remark = "B-"
} else if (gwa >= 80) {
    remark = "C+"
} else if (gwa >= 77) {
    remark = "C"
} else if (gwa >= 73) {
    remark = "D"
} else if (gwa >= 0 ) {
    remark = "F"
} else 
    remark = "in"

console.log(personalInfo)
console.log("====Courses Enrolled====")
console.log(subject.sub1 + ": " + " " + grade1 + ": " + unit1)
console.log(subject.sub2 + ": " + " " + grade2 + ": " + unit2)
console.log(subject.sub3 + ": " + " " + grade3 + ": " + unit3)
console.log(subject.sub4 + ": " + " " + grade4 + ": " + unit4)
console.log(subject.sub5 + ": " + " " + grade5 + ": " + unit5)
console.log(subject.sub6 + ": " + " " + grade6 + ": " + unit6)
console.log(subject.sub7 + ": " + " " + grade7 + ": " + unit7)
console.log("General Weighted Average: " + Final_grade)
console.log("Remark: " + remark)
