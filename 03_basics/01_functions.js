function addTwoNumbers(number1,number2){
    let result = number1 + number2;
    console.log("Result:",result);
    return result;
}

addTwoNumbers(3,5);

function loginUser(username="Mayuri"){
    if(!username){
        console.log("Please enter user name ");
        return
    }
    return `${username} is logged in.`
}

console.log(loginUser());

function calculatePrice(val1,val2,...num1){
    return num1;
}

console.log(calculatePrice(100,200,4000,400,5000));

const user  = {
    username : "Mayuri Soundalkar",
    id : 34,
    course : "MCA"
}

function handleObject(anyObject){
    return `${anyObject.username} have taken ${anyObject.course} for better career.`  
}

//console.log(handleObject(user));

console.log(handleObject({
    username : "Kiran",
    course : "Food Technology"
}));

const newArray = [1,2,3,4];

function returnSecondValue(array1){
    return array1[1];
}

//console.log(returnSecondValue(newArray));
console.log(returnSecondValue([3,4,5,6]));

