const convertToCorrectType = (cellType, cellValue) => {
	switch (cellType) {
		case 'date':
			return new Date(cellValue);
		case 'int':
			return parseInt(cellValue);
		case 'float':
			return parseFloat(cellValue);
		default:
			return cellValue;
	}
};

const createObjFromTable = (tableElem) => {
	let currentRowElementsList;
	let objectsArray = [];
	let createdRow;
	const contentRowList = tableElem.querySelectorAll('tr:not(:first-child)'); //without header row

	const headerArray = [ ...tableElem.querySelectorAll('th') ].map((headerCell) => {
		let value = headerCell.innerText.toLowerCase();

		if (value.includes(' ')) {
			value = value.replace(/\s+./g, (match) => match.trim().toUpperCase());
		}
		return {
			type: headerCell.dataset.type,
			value: value
		};
	});

	for (let i = 0; i < contentRowList.length; i++) {
		createdRow = {}; // delete object props to create new props
		currentRowElementsList = contentRowList[i].querySelectorAll('td');

		for (let j = 0; j < currentRowElementsList.length; j++) {
			createdRow[headerArray[j].value] = convertToCorrectType(
				headerArray[j].type,
				currentRowElementsList[j].innerText
			);
		}
		objectsArray.push(createdRow);
	}
	console.log(objectsArray);
	console.table(objectsArray);
};

createObjFromTable(document.querySelector('table'));
