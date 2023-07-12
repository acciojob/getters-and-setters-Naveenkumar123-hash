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
		console.log(this.name);
     }
}

class Teacher extends Person {
	teach(){
		console.log(this.name);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
