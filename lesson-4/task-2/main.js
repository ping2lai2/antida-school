var weekdays = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота'
];

function getDay() {
  var date = new Date();
  var day = date.getDay();
  return weekdays[day] || 'Strange day';
}

/* uniform distribution, probability = 1/10 */
const getRandomInt = () => (Math.floor(Math.random() * 10) + 1 === 10 ? 7 : 0);

Date.prototype.getDayOld = Date.prototype.getDay;

Date.prototype.getDay = function() {
  return this.getDayOld() + getRandomInt();
};

/* OTHER VARIANTS */

/* FIRST */

/*
const first = Date.prototype.getDay;

Date.prototype.getDay =  function () {
  return Math.floor(Math.random() * 10) && first.apply(this).toString || undefined;
};
*/

/* SECOND */

/*
const daysList = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sad: 6
};

Date.prototype.getDay = function () {
  return daysList[new Date().toString().slice(0,3)] + getRandomInt();

};
*/

for (let i = 0; i++ < 10; ) {
  console.log(getDay());
}
