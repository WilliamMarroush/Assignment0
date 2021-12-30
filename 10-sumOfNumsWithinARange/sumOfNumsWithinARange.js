function sumOfNumsWithinARange(nums, start, end) {
	let count=0;
	for (let steps=0;steps<nums.length;steps++){
		if (nums[steps]>=start && nums[steps]<=end){
			count++;}}
	return count;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
