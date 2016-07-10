var writeMyName = function () {
	document.write('ws');
};

writeMyName();

var writeAName = function(name) {
	document.write(name);

}

writeAName('wangsong');


var writeNameManyTimes = function (name, times) {
	var i;
	
	for (i = 0; i < times; i++) {
	document.write('<br>'+ name);
}
};

writeNameManyTimes('T-Rex', 5);
