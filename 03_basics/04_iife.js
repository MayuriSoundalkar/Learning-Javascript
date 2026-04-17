function one(){
    console.log("Function one");
}

one();

//Named iife
(function two(){
    console.log("Function two");
})();

//semicolon is important between two iife otherwise it will throw an error . 

((name)=>{
    console.log("This is name : ",name);
})('Mayuri')