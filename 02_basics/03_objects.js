//singleton 

//there are two ways to define object . 1. object literal(multiple instance) 2.constructor (only one instance)

const mySym = Symbol("sym1")//wrong
const mySym2 = Symbol("sym2")//right

const user = {
    name : "Mayuri",
    "full name" : "Mayuri Soundalkar",
    mySym : "sym2",
    [mySym2] : "sym4",
    age : 25,
    email : "mayuri@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Sunday","Monday"]
}

console.log(user.age);
console.log(user['age']);
console.log(user["full name"]);//cannot access with .
console.log(user.mySym);
console.log(typeof user.mySym);
console.log(user.mySym2);//wrong-> undefined
console.log(typeof user.mySym2);//wrong-> undefined

console.log(user[mySym2]);
console.log(typeof user[mySym2]);

user.email = 'mayurisoundalkar@gmail.com';
//console.log(user.email);
//Object.freeze(user);
user.email = 'mayurisoundalkar50@gmail.com';
//console.log(user.email);
console.log(user);

user.greeting = function (){
    console.log("Hello");
}

console.log(user.greeting());

user.greeting2 = function(){
    console.log(`Hello ${this.name}`);
    
}

console.log(user.greeting2);
console.log(user.greeting2());








 


