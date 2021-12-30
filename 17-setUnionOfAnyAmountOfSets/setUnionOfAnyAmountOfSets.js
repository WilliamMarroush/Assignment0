function setUnionOfAnyAmountOfSets(...args) {
	let myset = new Set;
	for (let steps=0;steps<arguments.length;steps++){
		for (const count of arguments[steps]){
			myset.add(count);}}
	return myset;

}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
