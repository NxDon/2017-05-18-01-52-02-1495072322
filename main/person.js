// Write your code here
module.exports = Person

function Person(name,age) {
	// body...
	this.name = name;
	this.age = age;
	this.introduce = function(){
		return "My name is Tom. I am 21 years old."
	}
}