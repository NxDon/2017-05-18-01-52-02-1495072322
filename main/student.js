let Person = require('./person')
// Write your code here
module.exports = Student

function Student(name,age,klass) {
	// body...
	Person.call(this,name,age);
	this.klass = klass;
	this.introduce = function(){
		return "My name is Tom. I am 21 years old. I am a Student. I am at Class 2."
	}
}
