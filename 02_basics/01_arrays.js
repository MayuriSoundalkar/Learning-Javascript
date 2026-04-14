//Array

let myArr = [0,1,2,3,4];

let heroes = ["shaktiman","batman"];

let myArr2 = new Array(1,2,3);

console.log(myArr[1]);

//Arrays methods

myArr.push(5);
myArr.push(6);
myArr.pop();
console.log(myArr);

myArr.unshift(0);
console.log(myArr);
myArr.shift(0);
console.log(myArr);

console.log(myArr.includes(14));
console.log(myArr.indexOf(13));
console.log(myArr.indexOf(1));

const newArray = myArr.join();
console.log("New array "+ newArray);
console.log(typeof newArray);

//slice
console.log("Original array : ",myArr);

console.log(myArr.slice(1,3))

//Splice
console.log("Original array : ",myArr);
console.log(myArr.splice(1,3))
console.log("array : ",myArr);


