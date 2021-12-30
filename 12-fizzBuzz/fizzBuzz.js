function fizzBuzz(start, end) {
	const fizzbuzz=[];
	for (let steps=start;steps<=end;steps++){
		if (steps%3==0 && steps%5==0){
			fizzbuzz.push("FizzBuzz");}
		else if (steps%3==0){
			fizzbuzz.push("Fizz");}
		else if (steps%5==0){
			fizzbuzz.push("Buzz");}
		else
			fizzbuzz.push(steps);
	}
	return fizzbuzz;
}

// Do not edit this line;
module.exports = fizzBuzz;
