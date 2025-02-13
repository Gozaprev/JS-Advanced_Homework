class Academy {
    constructor(name, start, end) {
        this.name = name;
        this.students = [];
        this.subjects = [];
        this.start = start;
        this.end = end;
        this.numberOfClasses = this.subjects.length * 10; // Initially 0, will be updated when subjects are added
    }

    printStudents() {
        console.log(`Students in ${this.name}:`);
        this.students.forEach(student => {
            console.log(`${student.firstName} ${student.lastName} 
                started ${this.name} at ${this.start} and finished at ${this.end}`);
        });
    }

    printSubjects() {
        console.log(`Subjects in ${this.name}:`);
        this.subjects.forEach(subject => {
            console.log(subject.title);
        });
    }

    addStudent(student) {
        if (!this.students.includes(student)) {
            this.students.push(student);
        } else {
            console.error("Student is already enrolled in this academy.");
        }
    }

    addSubject(subject) {
        this.subjects.push(subject);
        subject.academy = this; // Set the academy for the subject
        this.numberOfClasses = this.subjects.length * 10; // Update numberOfClasses
    }
}

class Subject {
    constructor(title, isElective) {
        this.title = title;
        this.isElective = isElective;
        this.academy = null; 
        this.students = [];
    }

    #numberOfClasses = 10;

    get numberOfClasses() {
        return this.#numberOfClasses;
    }

    overrideClasses(newNumber) {
        if (newNumber >= 3) {
            this.#numberOfClasses = newNumber; 
        } else {
            console.error("Number of classes cannot be less than 3.");
        }
    }

    addStudent(student) {
        if (!this.students.includes(student)) {
            this.students.push(student);
        } else {
            console.error("Student is already enrolled in this subject.");
        }
    }
}

class Student {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.#completedSubjects = []; 
        this.#academy = null; 
        this.#currentSubject = null; 
    }

    #completedSubjects;
    #academy;
    #currentSubject;

    get completedSubjects() {
        return this.#completedSubjects;
    }
    get academy() {
        return this.#academy;
    }
    get currentSubject() {
        return this.#currentSubject;
    }

    startAcademy(academy) {
        this.#academy = academy; 
        academy.addStudent(this); 
    }

    startSubject(subject) {
        if (this.#academy && this.#academy.subjects.includes(subject)) {
            if (this.#currentSubject) {
                this.#completedSubjects.push(this.#currentSubject); // Move current subject to completed
            }
            this.#currentSubject = subject; 
            subject.addStudent(this); 
        } else {
            console.error("Error: Student must be enrolled in an academy and the subject must exist in that academy.");
        }
    }
}

const academy = new Academy("Semos", new Date("2025-10-01"), new Date("2026-12-31"));
const subject1 = new Subject("JavaScript Basics", false);
const subject2 = new Subject("Advanced JavaScript", true);

academy.addSubject(subject1);
academy.addSubject(subject2);

const student1 = new Student("Borche", "Borisov", 20);
const student2 = new Student("Daniel", "Ivtimov", 17);

student1.startAcademy(academy);
student2.startAcademy(academy);

student1.startSubject(subject1);
student2.startSubject(subject2);

academy.printStudents();
academy.printSubjects();
