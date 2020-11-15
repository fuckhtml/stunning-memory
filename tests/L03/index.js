// const guitarist = {
//   name: 'Mick',
//   surname: 'Thomson',
//   age: '43',
//   band: 'Slipknot',
//   favoriteSong: 'People are shit',
//   greet: function() {
//     console.log(`Heey, I am fucking ${this.name} ${this.surname}!`)
//   },
//   play: function() {
//     console.log(`Start playing ${this.favoriteSong}...`);
//   }
// }

// const props = Object.keys(guitarist);
// for (let prop of props) {
//   if (typeof guitarist[prop] === 'function') {
//     guitarist[prop]();
//   }
// }
// const propValuePairList = Object.entries(guitarist);
// const map = new Map(propValuePairList);
// console.dir(map);



// --------------


// const people = [
//   {name: 'Alex', age: 23},
//   {name: 'Terry', age: 30},
//   {name: 'Nikita', age: 24},
//   {name: 'Jide', age: 32},
//   {name: 'Maxim', age: 17},
// ];

// console.log(people.slice().sort( (a,b) => a.age - b.age ) );
// console.log(people.slice().sort( (a,b) => b.age - a.age ) );

// console.log(people.filter(it => it.age <= 18));

// console.log(people.slice(1,3));

// const ul = document.createElement('ul');
// people.map( it => {
//   const li = `<li>Name: <b>${it.name}<b> | Age: <b>${it.age}</b></li>`;
//   ul.insertAdjacentHTML('beforeend', li);
// } );
// console.log(ul);

// console.log(people.reduce((acc, it) => {
//   return acc + it.age
// }, 0));

// console.log(people.reduce((acc, it) => {
//   return acc + it.name
// }, ''));

// console.dir(new Object())

// --- Queue using maps LOFI : Last Out First In

// const callbacks = new Set();

// const addAsyncListener = (fn) => {
//   callbacks.add(fn);
// }

// const startAsync = () => {
//   setTimeout(()=> {
//     for (const cb of callbacks) {
//       callbacks.delete(cb)
//       cb();
//     }
//     console.log(`Done`)
//   }, 1000);
// }

// const log1 = () => console.log(1);
// addAsyncListener(log1);
// addAsyncListener(log1);
// addAsyncListener(() => console.log(2));
// addAsyncListener(() => console.log(3));

// console.log('Wait...');
// startAsync();

// addAsyncListener(() => console.log(4));
// addAsyncListener(() => console.log(5));

// ---

// const name = `Alex`;
// const surname = `Grigoriev`;
// const age = 23;

// const a = {
//   name: name,
//   surname: surname,
//   age: age
// }

// const b = {name, surname, age};

// console.log(a, b);

// const c = {
//   name: 'Alex',
  
//   meet1() {
//     console.log(`Hello, I am ${this.name}, can I meet you?`)
//   },
//   meet2: () => {
//     console.log(`Hello, I am ${this.name}, can I meet you?`)    
//   },

//   age: 0,
//   get getAge() {
//     console.log(`Getter is called!`);
//     return this.age;
//   },
//   set setAge(age) {
//     console.log(`Setter is called!`);
//     this.age = age;
//   },

//   surname,
//   [`sur` + `name`]: `Grigoriev`,
// }

// c.meet1();
// c.meet2();

// c.setAge = 23;
// console.log(c.getAge);

// console.log(c.surname);

// console.log(c.name);
// console.log(c[`name`]);
// console.log(c[`n`+`a`+`m`+`e`]);

// console.log(c);
// delete c.name;
// console.log(c);

// console.log(c.name !== undefined);
// console.log(c.age !== undefined);

// console.log(`name` in c);
// console.log(`age` in c);

// console.log(c.hasOwnProperty('name'));
// console.log(c.hasOwnProperty(`age`));

// -----

// const names = ['alex', 'terry', 'jide'];
// const getRandomName = () => names[Math.floor(Math.random() * names.length)];
// const greet = (name = getRandomName(), ...rest) => {
//   console.log(`Hello, ${name}`);
//   rest.map((it) => console.log(`Hello, ${it}`));

//   const [secondName, thirdName, ...otherNames] = rest;
//   console.log('---', secondName, thirdName, otherNames, '---');
// }

// greet();
// greet('Nikita');
// greet('Zuck', 'Kyle', 'Teddy');
// greet('Zuck', 'Kyle', 'Teddy', 'Reddy', 'Fiddy');


// const generateArray = () => {
//   const n = Math.floor(Math.random() * 10);
//   let m = [];
//   for (let i = 0; i < n; i++) {
//     m.push(Math.floor(Math.random() * 101));
//   }
//   return m;
// }

// console.log(Math.max(...generateArray()));
// console.log(Math.min(...generateArray()));


// const a = [1,2,3];
// const b = [4,5,6];
// const c = [0, ...a, ...b];
// console.log(c);

// ---

const map = new Map();
map.set(1, "1");
map.set('2', "2");
map.set(true, "3");

console.log( map.get(1) );
console.log( map.get(2) );
console.log( map.get(3) );

let person = {name: 'Alex'}

map.set(person, '4');

console.log( map.get(person) );

delete person.name;

console.log( map.get(person) );

person = 0;

console.log( map.get(person) );

console.log( map.keys() )
console.log( map.values() )
console.log( map.entries() )

for (key of map.keys()) {
  console.log( map.get(key) );
}

map.forEach( (value, key) => {
  console.log( `${key}: ${value}` )
})