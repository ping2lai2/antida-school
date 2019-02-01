const numb = 5000;
const classNamePattern = 'smth';

let classNamesArray = [];

for (let i = 0; i < numb; i++) { // create different classes and push them
    if (Math.round(Math.random() * 2 - .5)) {

        classNamesArray.push(classNamePattern);
    } else {
        classNamesArray.push(`${classNamePattern}_${i}`);
    }
}

const startTest = (testedFunction) => {
    const element = document.createElement('div');
    element.id = testedFunction.name;
    document.body.appendChild(element);

    console.log('____________________');
    console.time(testedFunction.name);
    for (let i = 0; i < numb; i++) {
        testedFunction(element, classNamesArray[i]);
    }
    console.timeEnd(testedFunction.name);

}

const addClass1 = (element, newClassName) => {
    element.classList.add(newClassName);
};

const addClass2 = (element, newClassName) => {
    if (element.className.indexOf(newClassName) < 0) {
        element.className += ' ' + newClassName;
    }
};

const addClass3 = (element, newClassName) => {
    if (!element.className.includes(newClassName)) {
        element.className += ' ' + newClassName;
    }
};

startTest(addClass1);
startTest(addClass2);
startTest(addClass3);