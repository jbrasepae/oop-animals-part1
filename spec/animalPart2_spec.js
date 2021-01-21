const { Dog, Cat, Home, Animal } = require('../src/animal');
var dog = new Dog();
var cat = new Cat();
var home = new Home();

describe('Animal', function() {
	it('should expect Dog to eat Food', function() {
		expect(dog.eat()).toBe('Food');
	});

	it('should expect Cat to eat food', function() {
		expect(cat.eat()).toBe('Food');
	});

	it('should expect Dog sound to be Bark', function() {
		expect(dog.sounds()).toBe('Bark');
	});

	it('should expect Cat sound to be Meow', function() {
		expect(cat.sounds()).toBe('Meow');
	});
});

describe('Home', function() {
	it('should adopt pet', function() {
		expect().toBe();
	});
});
