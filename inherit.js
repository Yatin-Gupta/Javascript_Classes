class Person {
	// Initialization
	constructor(firstName, lastName) { // automatically get invoked when instance initiated
		this.firstName = firstName;
		this.lastName = lastName;
		this.hasJob = false;
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

	setLastName(name) {
		this.lastName = name;
	}

	// GETTER static method(also works with Worker class)
	static get species() {
		return "Homo Sapiens";
	}

	static species_sent() {
		// this normally points to instance but in class
		// this points to class thus this code will work
		return `Humans are ${this.fullName()}`;
	}

	// GETTER instance method(also works with worker class)
	get lastname() {
		return this.lastName;
	}
	// SETTER instance method
	set fullname(name) {
		var namear = name.split(" ");
		this.setFirstName(namear[0]);
		this.setLastName(namear[1]);
	}
	// GETTER instance method
	get fullname() {
		return this.fullName();
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

// static methods also inherit into worker but this will not work in inherited
// static members. 
class Worker extends Person {
	constructor(firstName, lastName, job) {
		super(firstName, lastName); // super must be called as first line of constructor
		// else it will throw reference error as:
		// must call super constructor in derived class before accessing 'this' or returning
		// from derived constructor.
		this.job = job;
		this.hasJob = true;
	}

	getJob() {
		return this.job;
	}
}

var sameer = new Worker('Sameer', 'Khan', 'SD');
console.log(sameer);

var manoj = new Person('Manoj', 'Kumar');
console.log(manoj);