function sumOfMinimumAndMaximum(nums) {
	let finalsum=0;
	let max=0;
	var min;
	for (let steps=0;steps<nums.length;steps++){
		if (nums[steps]>max){
			max = nums[steps];}}
	min = nums[0];
	for (let count=0;count<nums.length;count++){
		if (nums[count]<min){
			min=nums[count];}}
	finalsum = min + max;
	return finalsum;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
