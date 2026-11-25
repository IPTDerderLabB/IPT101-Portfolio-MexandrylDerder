//profileBuilder.js

function createStudentProfile(name, id, program, yearLevel, schoolYear) {
    return {
        name: name, 
        id: id,
        program: program,
        yearLevel: yearLevel,
        schoolYear: schoolYear
    };
}

const myProfile = createStudentProfile(
    "Mexandryl Derder",
    "2026-6716", 
    "Information Technology", 
    2, 
    "2026-2027");

console.log(myProfile);