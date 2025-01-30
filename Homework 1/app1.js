// Fetch the JSON data

fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json')
    .then(response => response.json())
    .then(data => {


        // 1. All students with an average grade higher than 3
        const studentsAbove3 = data
            .filter(student => student.averageGrade > 3);
        console.log('Students with average grade higher than 3:', studentsAbove3);

        // 2. All female student names with an average grade of 5
        const femaleStudentsWith5 = data
            .filter(student => student.gender === 'Female');
        // .map(student => student.firstName);
        console.log(femaleStudentsWith5);

        const femSt5 = data
            .filter(student => student.gender === 'Female' && student.averageGrade === 5)
            .map(student => student.firstName);
        console.log(femSt5);


        const o1 = data.filter(student => student.gender[4] && student.averageGrade === 5).map(student => student.firstName);



        console.log('Female students with average grade of 5:', o1);

        // 3. All male student full names who live in Skopje and are over 18 years old
        const maleStudentsInSkopje = data
            // .filter(student => student.gender === 'male' && student.city === 'Skopje' && student.age > 18)
            .filter(student => student.gender === 'Male');
        console.log(maleStudentsInSkopje);
        // console.log( data.filter(student => student.gender[4]));

        const city = data.filter(student => student.city === 'Skopje');
        console.log('Od Skopje', city);

        const age = data.filter(student => student.age > 18);
        console.log('Age', age);

        // .map(student => `${student.firstName} ${student.lastName}`);
        // .map(student => `${student.firstName} ${student.lastName}`);

        const o2 = data.filter(student => student.gender === 'Male' && student.city === 'Skopje' && student.age > 18).map(student => `${student.firstName} ${student.lastName}`);
        console.log('Male students in Skopje over 18:', o2);

        // 4. The average grades of all female students over the age of 24
        const femaleStudentsOver24 = data
            .filter(student => student.gender === 'Female' && student.age > 24);
        console.log('Zeni nad 24', femaleStudentsOver24);

        const averageGradeFemaleOver24 = femaleStudentsOver24.reduce((acc, student) => acc + student.averageGrade, 0) / femaleStudentsOver24.length;
        console.log('Average grades of female students over 24:', averageGradeFemaleOver24);



        // 5. All male students with a name starting with B and average grade over 2
        const maleStudentsB = data
            .filter(student => student.gender === 'Male' && student.firstName.startsWith('B') && student.averageGrade > 2);
        console.log('Male students with name starting with B and average grade over 2:', maleStudentsB);
    })
    .catch(error => console.error('Error fetching data:', error));
