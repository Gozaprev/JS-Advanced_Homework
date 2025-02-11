const fetchStudentsAsync = async () => {
    try {
        const url = 'https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json'
        const res = await fetch(url);
        const data = await res.json();

        return data;
    } catch (err) {
        throw new Error(err);
    }
};



const renderResults = students => {
    console.log("Render students called");

    const output = document.getElementById('output');




    ///////////////////////////////////////////////////////////////////////////////

    // Calculate average age and average grade
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    const totalGrade = students.reduce((sum, student) => sum + student.averageGrade, 0);
    const averageAge = totalAge / students.length;
    const averageGrade = totalGrade / students.length;

    // Count students over 60 and under 30
    const countOver60 = students.filter(student => student.age > 60).length;
    const countUnder30 = students.filter(student => student.age < 30).length;

    // List of students over 30 with average grade of 4 and above
    const filteredStudents = students.filter(student => student.age > 30 && student.averageGrade >= 4)
        .map(student => `${student.firstName} ${student.lastName}, ${student.city}`);

    // Find student named Arthur Cadore
    const arthur = students.find(student => student.firstName === "Arthur" && student.lastName === "Cadore");

    // Find oldest and youngest students
    const oldestStudent = students.reduce((oldest, student) => student.age > oldest.age ? student : oldest);
    const youngestStudent = students.reduce((youngest, student) => student.age < youngest.age ? student : youngest);

    // List of students with last name longer than 8 characters
    const longLastNames = students.filter(student => student.lastName.length > 8)
        .map(student => `${student.firstName} ${student.lastName}`);

    // Find top 10 best students by average grade without mutating original data
    const topStudents = [];
    for (const student of students) {
        if (topStudents.length < 10) {
            topStudents.push({ ...student }); // Create a copy of the student object
        } else {
            const minIndex = topStudents.reduce((minIdx, currStudent, idx) =>
                currStudent.averageGrade < topStudents[minIdx].averageGrade ? idx : minIdx, 0);
            if (student.averageGrade > topStudents[minIndex].averageGrade) {
                topStudents[minIndex] = { ...student }; // Replace with a copy of the new student
            }
        }
    }
    const topStudentNames = topStudents.map(student => `${student.firstName} ${student.lastName}`);

    // Check if some users have an average grade of 1 or if all users are adults
    const hasAverageGradeOne = students.some(student => student.averageGrade === 1);
    const allAdults = students.every(student => student.age > 18);

    // Display results

    output.innerHTML = `
        <h2>Statistics</h2>
        <p>Average Age: ${averageAge.toFixed(2)}</p>
        <p>Average Grade: ${averageGrade.toFixed(2)}</p>
        <p>Students over 60: ${countOver60}</p>
        <p>Students under 30: ${countUnder30}</p>
        <h3>Students over 30 with average grade >= 4:</h3>
        <ul>${filteredStudents.map(student => `<li>${student}</li>`).join('')}</ul>
        <h3>Arthur Cadore's Information:</h3>
        <pre>${JSON.stringify(arthur, null, 2)}</pre>
        <h3>Oldest Student:</h3>
        <pre>${JSON.stringify(oldestStudent, null, 2)}</pre>
        <h3>Youngest Student:</h3>
        <pre>${JSON.stringify(youngestStudent, null, 2)}</pre>
        <h3>Students with last name longer than 8 characters:</h3>
        <ul>${longLastNames.map(name => `<li>${name}</li>`).join('')}</ul>
        <h3>Top 10 Best Students:</h3>
        <ul>${topStudentNames.map(name => `<li>${name}</li>`).join('')}</ul>
        <p>Some users have an average grade of 1: ${hasAverageGradeOne}</p>
        <p>All users are adults: ${allAdults}</p>
        `;
};



/////////////////////////////////////////////////////////////////////////////////



const app = async () => {
    try {
        //1. Fetch student data
        const students = await fetchStudentsAsync();

        renderResults(students);

        //2. Render student data
    } catch (error) {
        console.log("In the app error block");
        document.querySelector(".error").innerText = error;
        const output = document.getElementById('output');
        output.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    }
};

app();


////////////////////////////////////////////////////////////////////////////////
