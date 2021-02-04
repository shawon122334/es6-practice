//'...'
const ages=[12,14,16,13,17];
const ages2=[15.16,12];
const ages3=[60,35,37,39,34];
const allAges=ages.concat(ages2).concat([200]).concat(ages3);
const allAges2=[...ages , ...ages2,5,...ages3];
//combining all array using ... this is call spread operator 

console.log(allAges2);
const a=200;
const b=300;
const c =500;
const tk=[100,200,300]
// const max=Math.max(tk); because its array but if we use ... we can get the result
const max=Math.max(...tk);
console.log(max);