var iguanodon = {
	name: 'Iguanodon',
	height: '13m',
	weight: '3t',
};

console.log(iguanodon.name);
console.log(iguanodon.weight);

iguanodon.diet = 'Herbivore';
console.log(iguanodon);

var spinosaurus = {
	name: 'Spinosaurus',
	height: '15m',
	weight: '6t',
	diet: 'Carnivore'
};

var microraptor = {
	name: 'Microraptor',
	height: '80cm',
	weight: '1kg',
	diet: 'Carnivore'
};


var dinos = [iguanodon, spinosaurus, microraptor];

var writeDinos = function (dinos) {
	dinos.forEach(function(bigguy) {
		document.write('<h2>' + bigguy.name + '</h2>');
		document.write('<dl>');
		document.write('<dt>Height:</dt><dd>' + bigguy.height + '</dd>');
		document.write('<dt>Weight:</dt><dd>' + bigguy.weight + '</dd>');
		document.write('<dt>diet:</dt><dd>' + bigguy.diet + '</dd>');
		document.write('</dl>');
	});
};	
writeDinos(dinos);








