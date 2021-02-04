const person={name:'Jack William',age:17,job:'facebook',gfName:'Emma Watson',phone:01711111111,friends:['Tom Hanks','Billy ']}
const {phone,gfName}=person;
//here phone and gfName elements of the objects would be assigned to phone and gfName

// phone=person.phone;
// console.log(person.gfName);
// console.log(phone);
// console.log(phone,gfName);

const friends=['1','2','3','4','5','6'];
const [first,second,...restFriends]=friends;
console.log(first,second);
console.log(restFriends);

const complexObject={
    name:'abc';
    info:{
        address:'kola bagan',
        leader:'Tiger Leader'
    }
}
const {leader}=complexObject.info;