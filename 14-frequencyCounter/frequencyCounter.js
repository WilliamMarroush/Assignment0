function frequencyCounter(word) {
	var frequency = {};
	for (let steps=0;steps<word.length;steps++){
		let character = word.charAt(steps);
		if (frequency[character]){
			frequency[character]++;}
		else{
			frequency[character]=1;}
	}
	return frequency;
}

// Do not edit this line;
module.exports = frequencyCounter;
