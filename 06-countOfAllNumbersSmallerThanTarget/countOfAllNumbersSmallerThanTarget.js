function countOfAllNumbersSmallerThanTarget(nums, target) {
	let count=0;
	for (let steps=0;steps<nums.length;steps++){
		if (nums[steps]<target){
			count++;}}
	return count;

}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
