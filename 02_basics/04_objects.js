//const jsuser = new Object();
const jsuser = {};
jsuser.id = 1;
jsuser.name = "Mayuri";
jsuser.email = "mayuri@gmail.com";

console.log(jsuser);

const regularUser = {
    'id': '2',
    'fullname': {
        'username': {
            'firstname': "Mayuri",
            'lastname': "Soundalkar"
        }
    },
    'email': 'mayurisoundalkar@gmail.com'
}

console.log(regularUser.fullname.username.firstname);

const obj1 = { 1: 'a', 2: 'b' };
const obj2 = { 3: 'a', 4: 'b' };
const obj3 = { 5: 'a', 6: 'b' };

//const obj4 = {obj1,obj2};
//const obj4 = Object.assign({},obj1,obj2,obj3);
const obj4 = { ...obj1, ...obj2 };
console.log(obj4);

const user = [
    {
        id: 1,
        name : 'Mayuri'
    },
    {
        id: 2,
        name : 'Komal'
    }
]

console.log(user[1].name);

console.log(jsuser);

console.log(Object.keys(jsuser));
console.log(Object.values(jsuser));
console.log(Object.entries(jsuser));

console.log(user[0].hasOwnProperty('name'));






    
