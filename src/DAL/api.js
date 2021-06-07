const students = [
    {
        username: "Hisham",
        email: "hisham@gmail.com",
        address: "17551 Wayne Ave",
        course: "JavaScript",
        gender: "Male"
    },

    {
        username: "Yakov Kassa",
        email: "yakov@gmail.com",
        address: "Netanya, Israel",
        course: "MySQL",
        gender: "Male"
    },

    {
        username: "Yema",
        email: "yema@gmail.com",
        address: "Somewhere in Israel",
        course: "React JS",
        gender: "Male"
    },
];


function addStudent(loginData) {
    const studentData = {};

    for (const input in loginData) {
        studentData[input] = loginData[input].value;
    }

    students.push({...studentData});
    console.log(students);
}

export function getStudents() {
    return students;
}

export default addStudent;