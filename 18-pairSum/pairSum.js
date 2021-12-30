function pairSum(nums, target) {
	if (nums.length<=1){
		throw 'Not enough values in array. Default false.';}
	let doesitadd = false;
	for (let steps=0;steps<nums.length;steps++){
		for (let pair=0;pair<nums.length;pair++){
			if (nums[steps]+nums[pair]==target){
				return true;}}}
	return doesitadd;

}

// Do not edit this line;
module.exports = pairSum;
