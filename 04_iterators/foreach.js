const programming = ['html','css','js','c++','java'];

programming.forEach( function(val){
 //   console.log(val);
})

programming.forEach((item)=>{
  //  console.log(item);
})

function printMe(item){
    console.log(item);
    
}

programming.forEach(printMe);

const myArray = [
    {
        'RollNo' : '1',
        'ClassNo' : '2'
    },
    {
        'RollNo' : '3',
        'ClassNo' : '4'
    },
    {
        'RollNo' : '5',
        'ClassNo' : '6'
    }
]

myArray.forEach((item)=>{
    console.log(item.RollNo);
})

