// Also called function constructor
function Person(firstName, lastName) {
	// Initialization
	this.firstName = firstName;
	this.lastName = lastName;
	this.hasJob = false;

	// Creating private member
	var memberType = "Private"; // Inaccessible from class object

	// Creating public functions
	this.fullName = function() {
		return this.firstName + " " + this.lastName;
	};

	this.setFirstName = function(name) {
		this.firstName = name;
	};

	// Getting private member by public method
	this.getPrivate = function() {
		return memberType;
	};

}

var ali = new Person("Ali", "Khan");
console.log(ali);