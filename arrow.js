// function doubleIt(num){
//     return num*2;
// }
//another way to declare a function like a variable
// const doubleIt=function(num){
//     return num*2;
// }
//declaring a function using es6,it is called arrow function
// function name =parameter => return 
const doubleIt=num=>num*2;
const result =doubleIt(5);
console.log(result);

//if there are more than one parameter
const add=(x,y)=>x+y;
console.log(add(10,20));

//const add=()=>5; if no parameter;
const bishal = (x,y)=> {
    const sum=x+y;
    const diff=x-y;
    const result=sum*diff;
    return result;
    //return manual ,we should declare
    //if we want to make big function

}
const result1=bishal(5,7);
console.log(result1);