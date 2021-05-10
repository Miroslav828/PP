// Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:
// For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********
function makeFrame(array) {
	var maxWordLength = 0;
	var topAndBottomString = '';
	var topAndBottomlength = 0;
	var middlePart = '';
	var spaceLength = 0;
	var spaceString = '';
	var frame = '';
	var word = '';
	function makeStringFromChar(char, num) {
		var resultString = '';
		for (var i = 0; i < num; i++) {
			resultString += char;
		}
		return resultString;
	}
	//find the longest word
	for (var i = 0; i < array.length; i++) {
		word = array[i];
		if (word.length > maxWordLength) {
			maxWordLength = word.length;
		}
	}
	//make top and bottom strings
	topAndBottomlength = maxWordLength + 4;
	topAndBottomString = makeStringFromChar('*', topAndBottomlength);
	//create middle part
	for (var k = 0; k < array.length; k++) {
		word = array[k];
		spaceLength = maxWordLength - word.length;
		spaceString = makeStringFromChar(' ', spaceLength);
		middlePart += '* ' + word + spaceString + ' *\n';
	}
	//create frame
	frame = topAndBottomString + '\n' + middlePart + topAndBottomString;
	return frame;
}
console.log(makeFrame(['Hello', 'world', 'in', 'a', 'frame']))