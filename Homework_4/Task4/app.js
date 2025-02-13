// Task 3


class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, academyName, studentId) {
        super(firstName, lastName, age);
        this.academyName = academyName;
        this.studentId = studentId;
    }

    study() {
        console.log(`${this.firstName} is studying at the ${this.academyName} academy.`);
    }
}

// Task 4


class DesignStudent extends Student {
    constructor(firstName, lastName, age, academyName, studentId, isStudentOfTheMonth) {
        super(firstName, lastName, age, '', studentId);
        this.academyName = academyName;
        this.isStudentOfTheMonth = isStudentOfTheMonth;
        const studentStatus = this.isStudentOfTheMonth ? 'student of the month' : 'not student of the month';

        this.printDesignStudent = function () {
            console.log(
              `${this.firstName} ${this.lastName} is ${this.age} years old. ${this.firstName} 
              studies ${this.academyName} and his student ID is ${this.studentId}. 
              This student is ${studentStatus}.`
            );
          };

    }

    

    attendAdobeExam() {
        console.log(`${this.firstName} is doing an adobe exam!`);
    }


}

class CodeStudent extends Student {
    constructor(firstName, lastName, age, academyName, studentId) {
        super(firstName, lastName, age, '', studentId);
        this.academyName = academyName;

        this.printCodeStudent = function () {

            const projectType = this.#hasGroupProject ? 'group' : 'individual'; 
            this.doProject(projectType);

            console.log(
              `${this.firstName} ${this.lastName} is ${this.age} years old. ${this.firstName} 
              studies ${this.academyName} and his student ID is ${this.studentId}. 
              This student is working on ${projectType} project.`
            );
          };


    }

    #hasIndividualProject = false;
    #hasGroupProject = false;

    get hasIndividualProject() {
        return this.#hasIndividualProject;
    }

    get hasGroupProject() {
        return this.#hasGroupProject;
    }

    doProject(type) {
        if (type === 'individual') {
            this.#hasIndividualProject = true;
            console.log(`${this.firstName} is working on an individual project.`);
        } else if (type === 'group') {
            this.#hasGroupProject = true;
            console.log(`${this.firstName} is working on a group project.`);
        } else {
            console.log('Invalid project type. Please specify "individual" or "group".');
        }
    }

}

    
class NetworkStudent extends Student {
    constructor(firstName, lastName, age, academyName, studentId, academyPart) {
        super(firstName, lastName, age, academyName, studentId);
        this.academyName = academyName;
        this.academyPart = academyPart;

        this.printNetworkStudent = function () {
            console.log(
              `${this.firstName} ${this.lastName} is ${this.age} years old. ${this.firstName} 
              studies ${this.academyName} and his student ID is ${this.studentId}. 
              This student is enrolled into part ${academyPart} of the Academy.`
            );
          };



    }

    attendCiscoExam() {
        console.log(`${this.firstName} is doing a cisco exam!`);
    }
}

const designStudent = new DesignStudent('Borche', 'Borisov', 20, 'design', 'S12345', true); //firstName, lastName, age, academyName, studentId, isStudentOfTheMonth
const codeStudent = new CodeStudent('Daniel', 'Ivtimov', 18, 'code', 'S67890'); //firstName, lastName, age, studentId, academyPart
const networkStudent = new NetworkStudent('Bob', 'Bobsky', 23, 'network', 'C4789', 2); //firstName, lastName, age, academyName, studentId, academyPart


console.log(designStudent.getFullName());
designStudent.study();
designStudent.attendAdobeExam();
designStudent.printDesignStudent();

console.log(codeStudent.getFullName());
codeStudent.study();
codeStudent.doProject('individual');
codeStudent.doProject('group');
codeStudent.printCodeStudent();

console.log(networkStudent.getFullName());
networkStudent.study();
networkStudent.attendCiscoExam();
networkStudent.printNetworkStudent();
