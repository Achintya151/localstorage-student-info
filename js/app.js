// DOM Element
const studentForm = document.getElementById('studentForm');
const studentsContainer = document.querySelector('.students');
const nameInput = studentForm['name'];
const ageInput = studentForm['age'];
const rollInput = studentForm['roll'];

const students = [
    {
        name: '',
        age: Number,
        roll: Number
    }
];

const addStudents = (name, age, roll) => {

}

const createStudentElement = ({ name, age, roll }) => {
    const studentDiv = document.createElement('div');
    const studentName = document.createElement('h2');
    const studentAge = document.createElement('p');
    const studentRoll = document.createElement('p');

    studentName.innerText = "Student Name:" + name;
    studentAge.innerText = "Student Age -" + age;
    studentRoll.innerText = "Student Roll -" + roll;

    studentDiv.append(studentName, studentAge, studentRoll);
    studentsContainer.appendChild(studentDiv);
}