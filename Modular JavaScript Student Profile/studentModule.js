// studentModule.js

export const studentDetails = {
    name: "Mexandryl Derder",
    id: "2026-6716",
    program: "Information Technology",
    yearLevel: 2,
    schoolYear: "2026-2027",
};

export function printSummary(student, status) {
    return`Student: ${student.name} | ID: ${student.id} | Program: ${student.program} | Status: ${status}`; 
}