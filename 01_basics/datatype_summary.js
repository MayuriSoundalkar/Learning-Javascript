//7 primitive 
//string,number,undefined,null,symbol,BigInt,Boolean

let name= "Mayuri";
let a = 23;

let bigNumber = 213454566n;
console.log(typeof bigNumber);

let isLoggedIn;
console.log(isLoggedIn);

let myNumber = null;
console.log(typeof myNumber);

let Id = Symbol('124');
let anotherId = Symbol('124');

console.log(Id == anotherId);


//3 Non-primitve (Reference variables)
//Arrays,object,functions

let values = [1,2,3];
console.log(typeof values);

let myObj = {
    name : "Mayuri",
    age : 25
};

console.log(myObj);

let myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);


