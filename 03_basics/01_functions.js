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
