fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json')
    .then(response => response.json())
    .then(data => {

        // 1. All students with an average grade higher than 3
        const studentsAbove3 = data
            .filter(student => student.averageGrade > 3);
        console.log('Students with average grade higher than 3:', studentsAbove3);

        // 2. All female student names with an average grade of 5
        const femaleStudentsWith5 = data
            .filter(student => student.gender === 'Female' && student.averageGrade === 5) 
            .map(student => student.firstName); 
        console.log('Female students with average grade of 5:', femaleStudentsWith5);

        // 3. All male student full names who live in Skopje and are over 18 years old
        const maleStudentsInSkopje = data
            .filter(student => student.gender === 'Male' && student.city === 'Skopje' && student.age > 18)
            .map(student => `${student.firstName} ${student.lastName}`); 
        console.log('Male students in Skopje over 18:', maleStudentsInSkopje);

        // 4. The average grades of all female students over the age of 24
        const femaleStudentsOver24 = data
            .filter(student => student.gender === 'Female' && student.age > 24);
        console.log('Female students over 24:', femaleStudentsOver24);

        const averageGradeFemaleOver24 = femaleStudentsOver24.reduce((acc, student) => acc + student.averageGrade, 0) / femaleStudentsOver24.length;
        console.log('Average grades of female students over 24:', averageGradeFemaleOver24);

        // 5. All male students with a name starting with B and average grade over 2
        const maleStudentsB = data
            .filter(student => student.gender === 'Male' && student.firstName.startsWith('B') && student.averageGrade > 2)
            .map(student => `${student.firstName} ${student.lastName}`);
        console.log('Male students with name starting with B and average grade over 2:', maleStudentsB);
    })
    .catch(error => console.error('Error fetching data:', error));
