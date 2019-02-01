# Домашние задания Antida Frontend School
* [Урок 1 - Обзорная лекция;](#урок-1)
* [Урок 2 - Типы данных в JS;](#урок-2)
* [Урок 3 - Цикл событий и контекст вызова;](#урок-3)
* [Урок 4 - Замыкания. Прототипы;](#урок-4)
* [Урок 5 - Возможности ES6+;](#урок-5)
* [Урок 6 - Promises, async/await;](#урок-6)
* [Урок 7 - Обзорная лекция по инструментарию;](#урок-7)
* [Урок 8 - Фреймворки и библиотеки;](#урок-8)
* [Урок 9 - Настройка сборки;](#урок-9)
* [Урок 10 - Погружение в React;](#урок-10)


## Урок 1

0. Проверить, как быстро будет работать изменение атрибута class (`Element.className`, `Element.classList.add`). Протестировать с помощью `console.time`, `console.timeEnd`. Реализовать аналоги.
1. Написать функцию, которая принимает на вход селектор для таблицы и может преобразовать **[таблицу в массив объектов](https://output.jsbin.com/gevudig/1/)**. Ключ объекта должен быть преобразован в camelCase.Преобразование к нужным типам через атрибут `data-type`.
2. На Node.JS написать скрипт, который принимает название файла в качестве аргумента и убирает все лишние пробелы (больше одного), сохраняет новый файл в виде `'converted_' + fileName`. При завершении работы скрипта показывает за какое время он отработал. Пример выполнения скрипта:
```
$ node task2.js text.txt
```
Вход (text.txt):
```
Hello world! NodeJS RULES!
Hello world! NodeJS RULES!
```
Выход (converted_text.txt):
```
Hello world! NodeJS RULES!
Hello world! NodeJS RULES!
```

**[→ решение ←](/lesson-1)**



## Урок 2

Дан объект с ответом от сервера, содержащим таблицу рейтинга, вида:
```javascript
{data: [
  { score: 10, name: 'Bob' , age: 18},
]}
```
Написать функцию, которая:
  * вернёт сумму всех очков
  * вернёт только массив с участниками старше 18
  * вернёт только массив с участниками с именем, начинающимся на B
  * вернёт массив со строками вида: *“Bob - 18: 10”* используя метод `toString`, который предварительно добавлен в изначальный объект
  * вернёт массив чисел в виде строк, суммы очков участников, сгруппированных по возрасту.

**[→ решение ←](/lesson-2)**



## Урок 3

Задание **[тут](https://docs.google.com/document/d/1teOurPKQMmLJi4RMWrM9FA035t4OoyVOIHLSKjsxH60/edit)**

**[→ решение ←](/lesson-3)**


## Урок 4

0. Сделать возможным следующий синтаксис:
```javascript
var a = (5).plus(3).minus(6); //2. 
[1,2,3].startsWith(1); // true
```
1. Используя замыкания написать небольшую консольную игру, которая будет загадывать секретное число, а игрок должен будет угадать за отведенное количество попыток, при каждом “угадывании” количество попыток сокращается на 1. При неправильном варианте ответа игроку будет выводиться сообщение больше или меньше загаданное число и количество оставшихся попыток. Это должна быть функция куда мы будем передавать аргументы - `n` и `tries` (значения по умолчанию 10 и 3), где с помощью `n` создаётся секретное (целое!) число от 1 до n, а `tries` - это количество попыток, которые есть у игрока, чтобы отгадать число.
2. Не изменяя код сделать так, чтобы иногда он мог возвращать *Strange day*.
```javascript
var weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

function getDay() {
  var date = new Date();
  var day = date.getDay();
  return weekdays[day] || 'Strange day';
}
```
Пример работы:
```javascript
getDay(); // Суббота
getDay(); // Strange day
getDay(); // Суббота
```
3. ...
```javascript
var counter20 = { count: 20 };
var counter30 = { count: 30 };
// Ваш код
/* Используя один и тот же объект расширить counter20 и counter30 так, 
чтобы функции test1 и test2 всегда возвращали true:*/
var test1 = () => counter20 + counter30 + 2 === counter20 + counter30;
var test2 = Function(
`return ${counter20} + ${counter30} - 2 === ${counter20 + counter30}`
);
```

**[→ решение ←](/lesson-4)**



## Урок 5

  * Создайте класс `Human` в котором есть свойства: `name, lastName`, геттер , возвращающий фразу *“Hello Name LastName”*. Сеттер, устанавливающий префикс для геттера выше, например: *“Hello”*;
  * Создайте класс расширяющий класс выше и добавляющий свойство age и метод `isAdult` возвращающий true если возраст указан 18 и больше.
  * Создайте массив из объектов второго класса, но с различным значениям свойств. Создайте от него несколько массивов:
    * Только четные
    * Только совершеннолетние
    * Только имена несовершеннолетних

П.С. Проявите творческий подход, примените все возможности языка из урока.  
П.П.С. Попробуйте пофантазировать и доработать классы через новые расширения, добавить свойства и методы, геттеры, сеттеры.

**[→ решение ←](/lesson-5)**



## Урок 6

Написать функцию `getUserAvatars`, которая получает n пользователей начиная с `startsWith` с GitHub и возвращает массив объектов вида 
```javascript
{
  avatar: string;
  id: number;
  username: string;
 }[]
```
  Пользователи не должны повторяться.
  Пример запроса за пользователем:
```javascript
var getUser = async (user) => fetch(`//api.github.com/users/${user}`);
```
**FYI**: это не та апишка из которой можно достать “всех” пользоватлей

**[→ решение ←](/lesson-6)**



## Урок 7

Написать свой `leftPad`, используя ES6

**→ решение ←**
```javascript
//NOTE: The third argument should be a single char
// т.е. это не '', 'abc' и прочее

const leftpad1 = (str, len, ch = ' ') => (len>(str+'').length 
                                          ? ch.repeat(len-(str+'').length) 
                                          : '') + str;


//es2017
const leftpad2 = (...args) => ''.padStart.call(...args); //¯\_(ツ)_/¯
```

## Урок 8

Попробуйте используя Webpack собрать проект на React (Hello World) с простейшим тестом на Jest или QUnit

**[→ решение ←](/lesson-8)**



## Урок 9

Попробовать воспользоваться динамическим импортом для разделения кода на бандлы (будет проще если сразу начать использовать пакет `react-loadable`) потребуется плагин для babel `@babel/plugin-syntax-dynamic-import`

**[→ решение ←](/lesson-9)**



## Урок 10

Исходник **[тут](https://github.com/loktevra/react-course-ru-v2)**  
Нужно добавить к новостям “Лайки”

**[→ решение ←](/lesson-10)**
