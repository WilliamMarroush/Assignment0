function countOfAllBooleans(arr) {
	let count =0;
	for (let step=0;step<arr.length;step++){
		if (typeof(arr[step])=="boolean"){
			count++;}
	}
	return count;

}

// Do not edit this line;
module.exports = countOfAllBooleans;
