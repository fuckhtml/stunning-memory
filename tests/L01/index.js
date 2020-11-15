// let a = 15;

// if (2 > 3) {
//   let a = 5;
// } else {
//   let a = 10;
// }

// {
//   let b = 10;
// }

// let left = 1;
// let right = 0;
// {
//   let temp = left;
//   left = right;
//   right = temp;
// }

// const nameList = ['Alex', 'Terry', 'Jide'];
// nameList.unshift('Hello');

// const str = 'hello';
// //str += '!';


// let f = function(a,b,c = 1) {
//   console.log(a,b,c);
// }
// f(1,2,3);
// f(1,2);

// f = (a,b,c = 1 ) => {
//   console.log(a,b,c);
// }

// let print = word => console.log(word);
// let multiply = (a,b) => a*b;

// print(multiply(3,3));

// let createDog = (name = 'no-name', breed = 'no-breed', sound = 'woof') => ({
//   name: name,   
//   breed: breed,
//   sound: sound
// });
// // no this. in array functions

// const arr = [0,1,2,3,4,5];
// let [,z,b,,,c,,,,,d = 'default'] = arr;
// print([z,b,c,d]);

// print([a,b]);
// [a,b] = [b,a];
// print([a,b]);

// f = () => [0,1,2,3];
// [a,b,c] = f();
// print([a,b,c]);

// //debugger;

// const cat = {
//   name: 'Fiddy',
//   age: 3,
//   breed: 'no-breed'
// }

// let {name, breed} = cat;
// print(name);
// print(breed);

// let {name: newname, breed: newbreed} = cat;
// print(newname);
// print(newbreed);

// console.log('finish');

const dog = {
  name: 'rex',
  age: 3,
  eyes: {
    color: 'brown',
    size: 'wide'
  }
}
debugger;
let {name:mydogname} = dog;
let {eyes: {color: mydogeyescolor}} = dog

console.log('finish');