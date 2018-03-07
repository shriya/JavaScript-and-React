var x = 'hello world!'

function greet(thing) {
	console.log(this + " says greetings, " + thing);
}

greet.call("Cami", "earthlings")

//=> Cami says greetings, earthlings

var person = {
	name: "Samantha",
	greet: function(thing) {
			console.log(this.name + " says greetings, " + thing);
		}
}

person.greet('neighbor')
// Samantha says greetings, neighbor

function newGreet(thing1, thing2) {
	console.log(this + " says greetings, " + thing1);
	console.log("But " + thing2 + " doesn't like " + this);
}

newGreet.call('Samantha', 'Maya', 'Angelina')
// Samantha says greetings, Maya
// But Angelina doesn't like Samantha

newGreet.apply('Samantha', ['Maya', 'Angelina'])
// Samantha says greetings, Maya
// But Angelina doesn't like Samantha

var boundGreeting = newGreet.bind('Noah')
boundGreeting('Christian', 'Ben');




































