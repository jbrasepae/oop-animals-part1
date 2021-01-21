class Animal {
	constructor(name) {
		this.name = name;
	}

	eat() {
		return 'Food';
	}
}
class Dog extends Animal {
	constructor(name) {
		super(name);
	}

	sounds() {
		return 'Bark';
	}
}

class Cat extends Animal {
	constructor(name) {
		super(name);
	}

	sounds() {
		return 'Meow';
	}
}

class Home {
	constructor() {
		this.adoptedAnimals = [];
	}

	adoptPet(pet) {
		this.adoptedAnimals.push(pet);
	}

	makeAllSounds() {
		for (var i = 0; i < this.adoptedAnimals.length; i++) {
			this.adoptedAnimals[i].sounds();
		}
	}
}
module.exports = { Dog, Cat, Home };
// var home = new Home();
// var dog1 = new Dog();
// var dog2 = new Dog();
// var cat = new Cat();

// home.makeAllSounds();

// home.adoptPet(dog1);
// home.makeAllSounds();

// home.adoptPet(cat);
// home.makeAllSounds();

// home.adoptPet(dog2);
// home.makeAllSounds();
