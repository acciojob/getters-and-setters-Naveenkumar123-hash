//complete this code
class Person {
	 constructor(name,age){
		this.name=name;
		this.age=age;
       }
	 get name() {
        return this._name;
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
		console.log(`${this.name} is studying.`);
     }
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching.`);
	}
}
const person = new Person("John", 25);
console.log(person.name);  // Output: John Doe
console.log(person.age);   // Output: 25
person.age = 30;
console.log(person.age);   // Output: 30

const student = new Student("john", 30);
student.study();  // Output: Alice is studying.

const teacher = new Teacher("Alice", 30);
teacher.teach();  // Output: Bob is teaching.

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
