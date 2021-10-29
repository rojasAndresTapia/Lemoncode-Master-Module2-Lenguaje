const persons = ['Diego', 'Pepe', 'Juan', 'Maria', 'Francisca', 'Paula'];

const fruits = ['apple', 'orange', 'banana', 'cherry', 'strawberry', 'avocado'];

const copyPerson = [...persons];

const car = {
  wheels: 4,
  color: 'red',
  model: 'Toyota',
  doors: 2,
};

// 1 head
const head = (arr) => {
  const [first, ...rest] = arr;
  return first;
};

console.log('head ', head(copyPerson));

// 1 tail
const tail = (arr) => {
  const [first, ...rest] = arr;
  return rest;
};

console.log('tail ', tail(copyPerson));

// 1 init

const init = (arr) => {
  arr.pop();
  return arr;
};

console.log('init ', init(copyPerson));

// 1 last
const last = (arr) => {
  const getLast = arr.length - 1;
  return arr[getLast];
};

console.log('last ', last(persons));

// 2 concat

const concat = (a, b) => {
  const mixArrs = [...a, ...b];
  return mixArrs;
};

console.log(' ', concat(persons, fruits));

// 3 clone
const clone = (obj) => {
  const obj2 = {};
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      obj2[prop] = obj[prop];
    }
  }
  return obj2;
};

console.log('clone ', clone(car));

// 3 Merge
const a = { name: 'Maria', surname: 'Ibañez', country: 'SPA' };
const b = { name: 'Luisa', age: 31, married: true };

const merge = (obj, obj2) => {
  const obj3 = { ...obj2, ...obj };
  return obj3;
};

console.log('merge ', merge(a, b));

// 4 read books

const books = [
  { title: 'Harry Potter y la piedra filosofal', isRead: true },
  { title: 'Canción de hielo y fuego', isRead: false },
  { title: 'Devastación', isRead: true },
];

const isBookRead = (arr, titleToSearch) => {
  const isReaded = arr.find((item) => item.title === titleToSearch);
  return !isReaded ? false : isReaded.isRead;
};

console.log(isBookRead(books, 'Devastación')); // true
console.log(isBookRead(books, 'Canción de hielo y fuego')); // false
console.log(isBookRead(books, 'Los Pilares de la Tierra')); // false

// 5 slot machine

class slotMachine {
  constructor(counter, state1, state2, state3) {
    this.counter = 0;
    this.state1 = state1;
    this.state2 = state2;
    this.state3 = state3;
    this.result = '';
    this.play = function () {
      this.counter ++;
      this.state1 = Math.random();
      this.state1 = !!(this.state1 > 0.5);
      this.state2 = Math.random();
      this.state2 = !!(this.state2 > 0.5);
      this.state3 = Math.random();
      this.state3 = !!(this.state3 > 0.5);
      if (
        this.state1  &&
        this.state2  &&
        this.state3 
      ) {
        this.result = `Congratulations!!!. You won ${this.counter} coins!!`;
        this.counter = 0;
        console.log(this.result);
        
      } else {
        this.result = 'Good luck next time!!';
        console.log(this.result);
        
      }
    };
  }
}

const machine1 = new slotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();





