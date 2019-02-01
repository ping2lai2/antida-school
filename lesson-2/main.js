const ranges = {
	uppercaseLetters: [65, 90],
	lowercaseLetters: [97, 122],
	score: [0, 20],
	age: [10, 50],
	name: [3, 9] //name length
};


const randomInt = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));


const randomName = (nameLength) => {
	let name = String.fromCodePoint(randomInt(...ranges.uppercaseLetters));
	//nameLength - 1 bcz first is capital letter
	for (let i = 0; i++ < nameLength - 1;) {
		name += String.fromCodePoint(randomInt(...ranges.lowercaseLetters));
	}
	return name;
};


const generateServerData = (arrayLength) => {
	let dataArray = [];
	for (let i = 0; i++ < arrayLength;) {
		dataArray.push({
			score: randomInt(...ranges.score),
			name: randomName(randomInt(...ranges.name)),
			age: randomInt(...ranges.age)
		});
	}
	return dataArray;
};


/*
{data: [
	{ score: 10, name: 'Bob' , age: 18},
]}
*/

const serverHello = {
	data: generateServerData(20)
};

console.log('generated data\n', serverHello);

/* first */
const getScoreSum = (receivedData) => receivedData.data.reduce((accum, curVal) => accum + curVal.score, 0);

console.log('first\n', getScoreSum(serverHello));

/* second */

const getByAge = (receivedData, age = 18) => {
	const resultArray = receivedData.data.filter((curVal) => curVal.age >= age);
	return (resultArray.length) ? resultArray : `all people under the age of ${age} years`;
};

console.log('second\n', getByAge(serverHello));

/* third */

const getByFirstLetter = (receivedData, letter = 'B') => {
	const resultArray = receivedData.data.filter((curVal) =>
		(curVal.name[0] === letter.toLowerCase() || curVal.name[0] === letter.toUpperCase())
	);
	return (resultArray.length) ? resultArray : `nothing names with first letter '${letter}'`;
};

console.log('third\n', getByFirstLetter(serverHello));

/* fourth */

serverHello.toString = function () {
	return this.data.map((curVal) => `${curVal.name} - ${curVal.age} : ${curVal.score}`);
};

console.log('fourth\n', serverHello.toString());


/* fifth (1) */
const sortByAgePattern = (first, second) => (first.age >= second.age) ? 1 : -1;

const getScoreByAge1 = (receivedData) => {
	const sortedByAgeArray = receivedData.data.sort(sortByAgePattern);
	console.log('result of sorting\n',sortedByAgeArray);
	let scoreArray = [sortedByAgeArray[0].score];
	for (let i = 1, j = 0; i < sortedByAgeArray.length; i++) {
		if (sortedByAgeArray[i].age !== sortedByAgeArray[i - 1].age) {
			j++;
		}
		scoreArray[j] = (scoreArray[j] || 0) + sortedByAgeArray[i].score; // if array[j] is undefined then array[j]=0
	}
	return scoreArray.map((curVal) => curVal.toString());

};

console.log('fifth (1)\n', getScoreByAge1(serverHello));

/* fifth (2) */
const getScoreByAge2 = (receivedData) => {
	const sortedByAgeArray = receivedData.data.sort(sortByAgePattern);
	let scoreArray = Array(100).fill(0);
	sortedByAgeArray.forEach((curVal, i, curArr) => {
		scoreArray[curArr[i].age] += sortedByAgeArray[i].score;
	  });
	return scoreArray.map((curVal) => '' + curVal);

};

console.log('fifth (2)\n', getScoreByAge2(serverHello));


/* fifth (3) */
const getScoreByAge3 = (receivedData) => {
	let scoreArray = new Array(100);
	for (let i = 0; i < scoreArray.length; i++) {
		scoreArray[i] = receivedData.data.filter((curVal) => curVal.age === i)
			.reduce((accum, curVal) => accum + curVal.score, 0);
	}
	return scoreArray.map((curVal) => curVal.toString());
};

console.log('fifth (3)\n', getScoreByAge3(serverHello));