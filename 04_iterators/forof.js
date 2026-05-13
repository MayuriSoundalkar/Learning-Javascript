const arr = [1,2,3,4,5];

for (const i of arr) {
    //console.log(i);
}


const greeting = "Hello mayuri";

for (const greet of greeting) {
    //console.log(greet);
}

const map = new Map();

map.set('IN',"India");
map.set('USA',"United State of America")
map.set('IN',"India");
//console.log(map);

for (const [key,value] of map) {
    console.log(key,"=>",value);
    
}

const myobj = {
     'Game1' : "Pubg",
     'Game2' : 'Snake and ladder'
}
    
for (const [key,value] of myobj) {
    console.log(key,"=>",value);
}

