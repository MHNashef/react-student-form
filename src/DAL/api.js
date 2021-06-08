const students = [
//   {
//     id: 0,
//     username: "Hisham",
//     email: "hisham@gmail.com",
//     address: "Somewhere in Israel",
//     course: "JavaScript",
//     gender: "Male",
//   },

//   {
//     id: 1,
//     username: "Yakov",
//     email: "yakov@gmail.com",
//     address: "Somewhere in Israel",
//     course: "MySQL",
//     gender: "Male",
//   },

//   {
//     id: 2,
//     username: "Yema",
//     email: "yema@gmail.com",
//     address: "Somewhere in Israel",
//     course: "CSS",
//     gender: "Female",
//   },
//   {
//     id: 3,
//     username: "Eliezer",
//     email: "eliezer@gmail.com",
//     address: "Somewhere in Israel",
//     course: "HTML",
//     gender: "Male",
//   },
//   {
//     id: 4,
//     username: "Marta",
//     email: "marta@gmail.com",
//     address: "Somewhere in Israel",
//     course: "Python",
//     gender: "Female",
//   },
];

function addStudent(loginData) {
  const studentData = {};

  for (const input in loginData) {
    studentData[input] = loginData[input].value;
  }

  students.push({id: students.length, ...studentData });
}

export function getStudents() {
  return students;
}

export default addStudent;
