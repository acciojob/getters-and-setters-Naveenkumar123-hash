//complete this code
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value;
  }
}


class Student extends Person {
	study(){
		console.log(`${this.name} is studying`);
     }
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching.`);
	}
}
const person = new Person("John", 25);
person.age = 30;
console.log(person.age);  

const student = new Student("John", 30);
student.study();  // Output: Alice is studying.

const teacher = new Teacher("Alice", 30);
teacher.teach();  // Output: Bob is teaching.

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
