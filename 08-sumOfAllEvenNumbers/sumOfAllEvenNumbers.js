function sumOfAllEvenNumbers(nums) {
	let count =0;
	for (let steps=0;steps<nums.length;steps++){
		if ((nums[steps]%2)==0){
			count++;}}
	return count;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;
