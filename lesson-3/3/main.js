/**
* реализовать функцию-конструктор копилки
* - номер счета - 3-х значное число, начиная с 1
* - если номер меньше трехзначного числа, слева заполняем нулями
* - состояние счета при создании, учитывается в транзакциях
*/
function Moneybox(balance = 10) {
  Moneybox.accountCounter++;
  this.accountNumber =
    Moneybox.accountCounter > 999
      ? `Counter overflow. Please contact support or someone else`
      : `${'0'.repeat(3 - String(Moneybox.accountCounter).length)}${Moneybox.accountCounter}`; //creating three-digit accountNumber
  this.balance = balance;
  this.transactions = balance > 0 ? [ balance ] : [];
  //this.getMoneyboxInfo = getMoneyboxInfo;
}
Moneybox.accountCounter = 0;

function isNumb(val) {
  return !isNaN(parseFloat(val)) && isFinite(val);
}

/**
* реализовать получение информации о состоянии копилки
* вывод должен быть в формате
*
* ***
* Номер: 001
* На счету: 150
* Транзакции: 200, -100, 50
* ***
*/

function getMoneyboxInfo() {
  const transactionsData = '' + this.transactions.join(', ');
  return `Номер: ${this.accountNumber}
На счету: ${this.balance}
Транзакции: ${transactionsData}`;
}

/**
* реализовать добавление в копилку
*/

function addToMoneybox(money) {
  const numbMoney = Number(money);
  if (isNumb(money) && numbMoney > 0) {
    this.balance = this.balance + numbMoney;
    this.transactions.push(numbMoney);
  } else {
    console.error(`不要做这个`);
  }
}

/**
* реализовать изъятие из копилки
*/

function takeFromMoneybox(money) {
  const numbMoney = Number(money);
  if (isNumb(money) && numbMoney > 0) {
    this.balance = this.balance - numbMoney;
    this.transactions.push(-numbMoney);
  } else {
    console.error(`invalid operation`);
  }
}

let moneybox1 = new Moneybox(100);
let moneybox2 = new Moneybox();

/**
* FIRST VARIANT
*/

Moneybox.prototype._getMoneyboxInfo = getMoneyboxInfo;
Moneybox.prototype._addToMoneybox = addToMoneybox;
Moneybox.prototype._takeFromMoneybox = takeFromMoneybox;

console.log(moneybox1._getMoneyboxInfo());
console.log(moneybox2._getMoneyboxInfo());

/**
* используя addToMoneybox и takeFromMoneybox определи следующие функции
*/

const _add100ToMoneybox1 = () => moneybox1._addToMoneybox(100); // добавит 100 в moneybox1

const _addToMoneybox2 = (money) => moneybox2._addToMoneybox(money); // добавит 500 в moneybox2

const _take250FromMoneybox2 = () => moneybox2._takeFromMoneybox(250); // изымает 250 из moneybox2

const _take10FromMoneybox1 = () => moneybox1._takeFromMoneybox(10); // изымает 10 из moneybox1

_add100ToMoneybox1();
_addToMoneybox2(500);
_take250FromMoneybox2();
_take10FromMoneybox1();

/**
* используя getMoneyboxInfo определи следующие переменные
*/
const _moneybox1Info = moneybox1._getMoneyboxInfo();
const _moneybox2Info = moneybox2._getMoneyboxInfo();

console.log(_moneybox1Info);
console.log(_moneybox2Info);

/**
* SECOND VARIANT
*/

const add100ToMoneybox1 = () => addToMoneybox.bind(moneybox1)(100);

const addToMoneybox2 = (money) => addToMoneybox.call(moneybox2, money);

const take250FromMoneybox2 = takeFromMoneybox.bind(moneybox2, 250);

const take10FromMoneybox1 = () => takeFromMoneybox.call(moneybox1, 10);

add100ToMoneybox1();
addToMoneybox2(500);
take250FromMoneybox2();
take10FromMoneybox1();

const moneybox1Info = getMoneyboxInfo.bind(moneybox1)();
const moneybox2Info = getMoneyboxInfo.bind(moneybox2)();

console.log(moneybox1Info);
console.log(moneybox2Info);
