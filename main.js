// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
	// your code here
	//use the length of the arr
	//get the sum of the array using reduce method
	if (array===[]){
	  return 0
	}else{
	  const sum= array.reduce((acc,c)=>acc+c,0)
	  const len= array.length
	  return sum/len
	}
  }