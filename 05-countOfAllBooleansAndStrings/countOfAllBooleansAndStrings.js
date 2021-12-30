function countOfAllBooleansAndStrings(arr) {
	let count =0;
	for (let step=0;step<arr.length;step++){
		if (typeof(arr[step])=="boolean"){
			count++;}
	}
	 for (let tep=0;tep<arr.length;tep++){
                if (typeof(arr[tep])=="string"){
                        count++;}
        }

	return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
