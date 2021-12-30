function countOfAllIndexMatchingNumbers(nums) {
	let count =0;
	for (let steps =0;steps<nums.length;steps++){
		if (nums[steps]==steps){
			count++;}}
	return count;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
