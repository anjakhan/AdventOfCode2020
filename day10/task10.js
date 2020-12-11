const array = [44,41,48,17,35,146,73,3,16,159,11,29,32,63,65,62,126,151,6,124,87,115,122,43,12,85,2,98,59,156,149,66,10,82,26,79,56,22,74,49,25,69,54,19,108,18,55,131,140,15,125,37,129,91,51,158,117,136,142,109,64,36,160,150,42,118,101,78,28,105,110,40,157,70,97,139,152,47,104,81,27,116,132,143,1,80,75,141,133,9,50,153,123,111,119,130,112,94,90,86];

// Part 1

const findJoltDiff = (array) => {
	let diffArr = [];
	const input = array.sort((a, b) => a - b);

	const reducer = (accumulator, currentValue) => {
		diffArr.push(currentValue - accumulator);
		return currentValue;
	}

	input.reduce(reducer, 0);

	let oneDiff = diffArr.filter(diff => diff === 1).length;
	let threeDiff = diffArr.filter(diff => diff === 3).length+1;

	console.log(`Number of differences: ${oneDiff} * ${threeDiff} = ${oneDiff*threeDiff}`);
	return diffArr;
}

// findJoltDiff(array);

// ------------------------------------------------------------------------------------------------------------------------------------------------------

// Part 2

const findDistinctWays = (array) => {
	let sorted = findJoltDiff(array);
  	let combis = 1;
  	let consec = 0;
	
  	for (let i = 0; i < sorted.length; i++) {
    		if (sorted[i] === 1 && sorted[i+1] === 1) {
      			consec++;
    		} else {
      			if (consec === 1) combis *= 2;
      			if (consec === 2) combis *= 4;
      			if (consec === 3) combis *= 7;
      			consec = 0;
    		}
  	}
  	return `Total no. of distinct ways: ${combis}`;
}

findDistinctWays(array);
