const students = [];


function addStudent(loginData) {
    const studentData = {};

    for (const input in loginData) {
        studentData[input] = loginData[input].value;
    }

    students.push({...studentData});
    console.log(students);
}

export default addStudent;