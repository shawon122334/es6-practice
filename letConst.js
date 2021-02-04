//we can not change constant value
const hubby="Elias Kanchon";
// hubby="Tanvir "; error 
console.log(hubby);

const numbers=[12,45];
numbers[1]=88;
//const array can be updated,but can not change the whole array
numbers.push(12);
console.log(numbers);

let patientName="Rahim chacha";
patientName="karim chacha";
console.log(patientName);

let sum=0;
for (let i = 0; i < 10;i++){
    sum=sum+i;
}
//i can not be used outside for loop if i is declared by let
console.log(sum);