/* FIRST */

class Human {
  constructor(name = 'John', lastName = 'Doe', hello = 'Hello') {
    this.name = name;
    this.lastName = lastName;
    this._hello = hello;
  }

  get hello() {
    return `${this._hello} ${this.name} ${this.lastName}`;
  }

  set hello(value) {
    this._hello = value;
  }
}

/* SECOND */

class SupaHuman extends Human {
  constructor(name, lastName, hello, age = 18) {
    super(name, lastName, hello);
    this.age = age;
  }
  isAdult() {
    return this.age >= 18;
  }
}

/* just test */
let supahuman = new SupaHuman();
let human = new Human();
console.log('supahuman.hello: ', supahuman.hello);
supahuman.hello = 'GB';
console.log('supahuman.hello has been changed (setter): ', supahuman.hello);
console.log('human.hello: ', human.hello);

/* THIRD */

const ranges = {
  uppercaseLetters: [65, 90],
  lowercaseLetters: [97, 122],
  age: [10, 50],
  name: [3, 9] //name length
};

const randomInt = (min, max) =>
  Math.round(min - 0.5 + Math.random() * (max - min + 1));

const randomName = nameLength => {
  let name = String.fromCodePoint(randomInt(...ranges.uppercaseLetters));

  for (let i = 0; i < nameLength - 1; i++) {
    name += String.fromCodePoint(randomInt(...ranges.lowercaseLetters));
  }
  return name;
};

const createSupaHumanArray = n => {
  let supaHumanArray = [];
  for (let i = 0; i < n; i++) {
    supaHumanArray.push(
      new SupaHuman(
        randomName(randomInt(...ranges.name)),
        randomName(randomInt(...ranges.name)),
        'Hi',
        randomInt(...ranges.age)
      )
    );
  }
  return supaHumanArray;
};

const supaHumanArray = createSupaHumanArray(20);

console.log('-created array of objects:\n', supaHumanArray);

const getEven = array => array.filter((object, index) => index % 2 === 0);

const getAdult = array => {
  const resultArray = array.filter(object => object.age >= 18);
  return resultArray.length
    ? resultArray
    : 'all people under the age of 18 years';
};

const getAdult2 = array => {
  const resultArray = array.filter(object => object.isAdult());
  return resultArray.length
    ? resultArray
    : 'all people under the age of 18 years';
};

const getNotAdultNames = array => {
  const resultArray = array
    .filter(object => object.age < 18)
    .map(object => object.name);
  return resultArray.length ? resultArray : 'all people are over 18';
};


console.log('-even indexes:\n', getEven(supaHumanArray));
console.log('-adult:\n', getAdult(supaHumanArray));
console.log('-adult:\n', getAdult2(supaHumanArray));
console.log('-not adult names:\n', getNotAdultNames(supaHumanArray));
