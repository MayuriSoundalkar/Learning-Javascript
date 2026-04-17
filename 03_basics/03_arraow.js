const user = {
    username : "Mayuri",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} welcome `);
        console.log(this);
    }
}

user.welcomeMessage();
user.username = 'Komal';
user.welcomeMessage();

function chai(){
    username = "Mayuri soundalkar"
    console.log(this.username);
}

chai();

const chai1 = function (){
    username = "Rutuja"
    console.log(this.username);
    
}

chai1();

const chai2 = ()=>{
    username = "Poonam"
    console.log(username);
}

chai2();

// const addTwo = (num1,num2)=>{
//      return num1+num2;
// }

//const addTwo = (num1,num2)=> num1+num2;
//const addTwo = (num1,num2) => (num1+num2);

const addTwo = () => ({username:"Mayuri"})
console.log(addTwo(2,3));

//const myArray = [2,3,4,5];
//myArray.forEach();
