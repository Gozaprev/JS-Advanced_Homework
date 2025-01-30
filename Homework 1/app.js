// console.log("Works ;)");

//  There is a JSON file with students. Make a call to the file and get the following data from it:
// const url = `https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json`;

//   All students with an average grade higher than 3
//   All female student names with an average grade of 5
//   All male student full names who live in Skopje and are over 18 years old
//   The average grades of all female students over the age of 24
//   All male students with a name starting with B and average grade over 2



function fetchData() {
    const url = `https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);

            }
            return response.json();
        })
        .then(data => {
            // if (!Array.isArray(data)) {
            //     console.error('Data is not an array');
            //     return;
            // }
            console.log('Data received:', data);



            /////////////////////////////////////////////////////////////////

            // 1. All students with an average grade higher than 3
            const studentsAbove3 = data.filter(student => student.averageGrade > 3);
            console.log('Students with average grade higher than 3:', studentsAbove3);

            const output1 = studentsAbove3.length !== 0 ? studentsAbove3 : 'There is no such student';
            console.log('Students with average grade higher than 3:', output1);

            // 2. All female student names with an average grade of 5
            const femaleStudentsWith5 = data
                .filter(student => student.gender === 'Female' && student.averageGrade === 5)
                .map(student => student.firstName);
            console.log('Female students with average grade of 5:', femaleStudentsWith5);

            const output2 = femaleStudentsWith5.length !== 0 ? femaleStudentsWith5 : 'There is no such student';
            console.log('Female students with average grade of 5:', output2);

            // 3. All male student full names who live in Skopje and are over 18 years old
            const maleStudentsInSkopje = data
                .filter(student => student.gender === 'Male' && student.city === 'Skopje' && student.age > 18)
                .map(student => `${student.firstName} ${student.lastName}`);
            console.log('Male students in Skopje over 18:', maleStudentsInSkopje);

            const output3 = maleStudentsInSkopje.length !== 0 ? maleStudentsInSkopje : 'There is no such student';
            console.log('Male students in Skopje over 18:', output3);

            // 4. The average grades of all female students over the age of 24
            const femaleStudentsOver24 = data
                .filter(student => student.gender === 'Female' && student.age > 24);
            const averageGradeFemaleOver24 = femaleStudentsOver24.reduce((acc, student) => acc + student.averageGrade, 0) / femaleStudentsOver24.length;
            console.log('Average grades of female students over 24:', averageGradeFemaleOver24);

            const output4 = averageGradeFemaleOver24.length !== 0 ? averageGradeFemaleOver24 : 'There is no such student';
            console.log('Average grades of female students over 24:', output4);

            // 5. All male students with a name starting with B and average grade over 2
            const maleStudentsB = data
                .filter(student => student.gender === 'Male' && student.firstName.startsWith('B') && student.averageGrade > 2);
            console.log('Male students with name starting with B and average grade over 2:', maleStudentsB);

            const output5 = maleStudentsB.length !== 0 ? maleStudentsB : 'There is no such student';
            console.log('Male students with name starting with B and average grade over 2:', output5);



        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

}

// console.log(fetchData());
fetchData();

//   All students with an average grade higher than 3
//   All female student names with an average grade of 5
//   All male student full names who live in Skopje and are over 18 years old
//   The average grades of all female students over the age of 24
//   All male students with a name starting with B and average grade over 2
