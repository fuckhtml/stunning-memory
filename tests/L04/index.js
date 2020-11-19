// // Coping

// const musician = {
//   name: `Mick`,
//   surname: `Thomson`,
//   band: `Slipknot`,
//   lyrics: `I'll never forget this!`,
//   instrument: `Guitar`,
//   sing() {
//     console.log(`${this.name} is singing: ${this.lyrics}`)
//   },
//   play() {
//     console.log(`${this.name} is playing: ${this.instrument}`)
//   },
//   fullName: {
//     name: `Mick`,
//     surname: `Thomson`,
//   }
// }

// musician.sing();
// musician.play();

// let clones = [];
// for (let i = 0; i < 10; i++) {
//   clones.push(musician);
// }
// console.log(clones);

// clones[0].name = `Joy`;
// clones[0].surname = `Jordison`;
// console.log(clones);

// clones = [];
// for (let i = 0; i < 10; i++) {
//   clones[i] = Object.assign({}, musician);
// }
// console.log(clones);
// clones[0].name = `Mick`;
// clones[0].surname = `Thomson`;
// console.log(clones);

// console.log(clones[1] === clones[2]); // also ==, Object.is(obj1, obj2) - are just plain referencial equality comporations

// console.log(clones[0]);
// console.log(clones[1]);

// clones[0].play = function() {
//   console.log(`${this.name} is fucking furious at playing ${this.instrument}`)
// };

// clones[0].play();
// clones[1].play();

// clones[0].fullName.name = `Korry`;
// console.log(clones[1].fullName);

// const cloneObject = (source) => {
//   let copy = {};

//   for (let key in source) {
//     if (source[key] instanceof Object && typeof(source[key]) !== `function`) {
//       copy[key] = cloneObject(source[key])
//     } else {
//       copy[key] = source[key];      
//     }
//   }

//   return copy;
// }

// let a = {
//   a: 1, 
//   b: [1,2,3], 
//   c: {a: 1, b: 2, c: 3},
//   f() {
//     console.log(`hello!`);
//   },
// };
// let b = cloneObject(a); // let b == a;
// console.log(a);
// console.log(b);
// console.log(a === b);

// // b = Object.assign({}, a);
// // b = {...a};
// // b = cloneObject(a);
// a.b[0] = 100;
// console.log(b.b[0]);

// a.c.a = 100;
// console.log(b.c.a);

// a.f();
// a.f = null;
// b.f();

// a = b;
// console.log(a == b);
// b = JSON.parse(JSON.stringify(a));
// console.log(a == b);


// Duck typization

// const musicianTypes = [`guitarist`, `singer`, `drummer`];

// const createGuitarPlayer = (name, surname) => ({
//   musicianType: musicianTypes[0],
//   name: name,
//   surname: surname,
//   play() {
//     console.log(`${this.name} rocks!`);
//   }
// })

// const createDrummerPlayer = (name, surname) => ({
//   musicianType: musicianTypes[2],
//   name: name,
//   surname: surname,
//   play() {
//     console.log(`${this.name} is furious!`);
//   }
// })

// a = createGuitarPlayer(`Alex`, `Gr`);
// b = createDrummerPlayer(`Simon`, `Smith`);

// a.musicianType === `guitarist` && a.play();
// b.musicianType === `drummer` && b.play();

// -- Inheritance and object recognizing 

// const GuitarPlayer = function(name, surname) {
//   if (!new.target) {
//     throw new Error(
//       `Error, expected new before constructor function`
//     );
//   }
//   this.name = name;
//   this.surname = surname;
// }

// GuitarPlayer.prototype.play = function() {
//   console.log(`${this.name} rocks!`);
// }

// a = new GuitarPlayer(`Alex`, `Gr`);
// a.play();
// console.log(typeof a);
// console.log(a instanceof GuitarPlayer);

// --

// const GuitarPlayer = function(name, surname) {
//   return {
//     name: name,
//     surname: surname,
//   }
// }

// GuitarPlayer.prototype.play = function() {
//   console.log(`${this.name} rocks!`);
// }

// const a = GuitarPlayer(`Alex`, `Gr`);
// // a.play();
// console.log(typeof a);
// console.log(a instanceof GuitarPlayer);

// ---

class GuitarPlayer {
  constructor(name, skill) {
    this._name = name;
    this._skill = skill
  };
  play() {                              // Method of the object
    console.log(`${this._name} rocks!`)
  }
  static _name = `Alex`;
  static _skill = 1000;
  static create() {                     // Method of the class, like Math.random(), Object.create()
    return new this(this._name, this._skill);
  }

  set skill(skill) {
    if (value < 0) {
      throw new Error(`Level can not be lesser than 0`);
    }
    console.log(`Setter has worked`);
    this._skill = skill;
  }

  get skill() {
    console.log(`Getter has worked`);
    return this._skill;
  }
}

let a = new GuitarPlayer(`Alex`, `Gr`);
console.log(a);
console.log(a instanceof GuitarPlayer);
a.play();
let b = GuitarPlayer.create();
// let c = a.create()
console.log(b.skill);
