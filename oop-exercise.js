/* Please read the instructions located in the exercises/2-oop-exercise-readme.md file and complete your code below */
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.grades = [];
  }
  addGrade(grade) {
    if (grade >= 0 && grade <= 100) {
      this.grades.push(grade);
    } else {
      console.log("Grade must be between 0 and 100");
    }
  }
  calculateAverageGrade() {
    if (this.grades.length > 0) {
      return (
        this.grades.reduce((acc, data) => (acc += data)) / this.grades.length
      );
    } else {
      return 0;
    }
  }
  hasPassed(passingGrade) {
    return this.calculateAverageGrade() > passingGrade;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
}
class Course {
  constructor(title, students) {
    this.title = title;
    this.students = students;
  }
  enrollStudent(student) {
    this.students.push(student);
  }
  listStudents() {
    console.log(this.students.map((student) => student.getName()));
  }
  calculateCourseAverage() {
    if (this.students.length > 0) {
      return (
        this.students.reduce(
          (acc, student) => (acc += student.calculateAverageGrade()),
          0
        ) / this.students.length
      ).toFixed(1);
    } else {
      return 0;
    }
  }
  getStudents() {
    return this.students;
  }
}

//generate data
const myClass = new Course("myClass", []);
for (let i = 1; i < 101; i += 5) {
  const student = new Student("student" + i, 18);

  for (let g = 0; g < 5; g++) {
    student.addGrade(Number((Math.random() * 100).toFixed(0)));
  }
  console.log(
    student,
    student.grades,
    student.calculateAverageGrade(),
    student.hasPassed(65)
  );
  myClass.enrollStudent(student);
}
myClass.listStudents();
console.log(myClass.calculateCourseAverage());
console.log(myClass.getStudents());
