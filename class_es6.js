class Person {
	// Initialization
	constructor(firstName, lastName) { // automatically get invoked when instance initiated
		this.firstName = firstName;
		this.lastName = lastName;
		this.hasJob = true;
		// Private properties not exist for es6 class, but to mimic same 
		// behaviour, it could be done as:
		var memberType = "Private";
		this.getPrivate = function(){
			return memberType;
		};
	}

	// Public Instance Methods
	fullName() {
		return `${this.firstName} ${this.lastName}`;
	}

	setFirstName(name) {
		this.firstName = name;
	}

	// static method
	static species() {
		return "Homo Sapiens";
	}

	static species_sent() {
		// this normally points to instance but in class
		// this points to class thus this code will work
		return `Humans are ${this.fullName()}`;
	}

	// ES6 not allow static properties. But in React code developers use 
	// large no of static properties.
	// Way round to it is Babble
	// Javascript features are divided into stages, stage-0, stage-1 and to 
	// stage-3
	// In it some features are rejected, withdrawn, some are on 
	// process to accept but not accepted and some are accepted
	// In order to use feature that are not accepted we need babble plugin
}

var sameer = new Person('Sameer', 'Khan');
console.log(sameer);