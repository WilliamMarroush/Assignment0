function productOfAnyAmountOfNumbers(...args) {
	let finalproduct = 1;
	for (let steps=0;steps<arguments.length;steps++){
		finalproduct = finalproduct * arguments[steps];
	}
	return finalproduct;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
