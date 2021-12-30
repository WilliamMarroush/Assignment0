function isPalindrome(word) {
	const backwards = [];
	let track = 0;
	for (let steps = word.length-1;steps>=0;steps--){
		backwards.push(word.charAt(steps));
	}
	for (let count = 0;count<word.length;count++){
		if (backwards[count]==word.charAt(count)){
			track++;}}
	if (track == word.length){
		return true;}
	else 
		return false;
	
}

// Do not edit this line;
module.exports = isPalindrome;
