const myNum = [1,2,3,4,5];

const newNum = myNum.reduce((acc,num)=> acc + num);

console.log(newNum);

const shoppingCart = [
    {
        itemName : 'JS course',
        prize : 1000
    },
    {
        itemName : 'C++ course',
        prize : 2000
    },
    {
        itemName : 'Java course',
        prize : 3000
    }
]


const bill = shoppingCart.reduce((acc,item)=>{
    return acc + item.prize;
},0)

console.log(bill);
