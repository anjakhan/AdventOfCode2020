const array = [44,41,48,17,35,146,73,3,16,159,11,29,32,63,65,62,126,151,6,124,87,115,122,43,12,85,2,98,59,156,149,66,10,82,26,79,56,22,74,49,25,69,54,19,108,18,55,131,140,15,125,37,129,91,51,158,117,136,142,109,64,36,160,150,42,118,101,78,28,105,110,40,157,70,97,139,152,47,104,81,27,116,132,143,1,80,75,141,133,9,50,153,123,111,119,130,112,94,90,86];

// Part 1

const findJoltDiff = (array) => {
	let diffArr = [];
	const input = array.sort(compareNumbers);

	const reducer = (accumulator, currentValue) => {
		diffArr.push(currentValue - accumulator);
		return currentValue;
	}

	input.reduce(reducer, 0);

	let oneDiff = diffArr.filter(diff => diff === 1).length;
	let threeDiff = diffArr.filter(diff => diff === 3).length+1;

	return `${oneDiff} * ${threeDiff} = ${oneDiff*threeDiff}`;
}

const compareNumbers = (a, b) => {
	return a - b;
}

findJoltDiff(test);

// ------------------------------------------------------------------------------------------------------------------------------------------------------

// Part 2

const findDistinctWays = (array) => {
	const input = array.sort(compareNumbers);
	let min = 0;
	let max = input[input.length-1] + 3;
	let distinctArr = [[0]];

	input.splice(0, 0, min);
	input.push(max);
	
	for (i=0; i<input.length; i++) {
		let z = 0;
		let temp = [];

		while (z<distinctArr[0].length) {
			let index = input.indexOf(distinctArr[0][z])
			let plusOne = input[index+1] - distinctArr[0][z];
			let plusTwo = input[index+2] - distinctArr[0][z];
			let plusThree = input[index+3] - distinctArr[0][z];
	
			if (index === input.length-1) {
				temp.push(distinctArr[0][z])
			} else {
				if (plusOne === 1 || plusOne === 3) {
					temp.push(input[index+1])
				}
				if (plusTwo === 2) {
					temp.push(input[index+2])
				}
				if (plusThree === 3) {
					temp.push(input[index+3])
				}
			}
			z++;
		}
		distinctArr.push(temp);
		distinctArr.shift()
	}
	
	return distinctArr[distinctArr.length-1].length
}

findDistinctWays(array);
