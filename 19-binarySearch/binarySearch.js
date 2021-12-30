class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
	  let middle = Math.floor(nums.length/2);
	  let smallerarray = nums.slice(0);
	  if (smallerarray[middle]==target){
		  return true;}
	  if (smallerarray[middle]<target){
		  smallerarray = smallerarray.splice(middle,smallerarray.length-1);
		  return (this.binarySearch(smallerarray,target));
	  }
	  else if (smallerarray[middle]>target){
		  smallerarray=smallerarray.splice(0,middle);
		  return (this.binarySearch(smallerarray,target));}
	  else
		  return false;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;

