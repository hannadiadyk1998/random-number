let arrLenght;

do {
    arrLenght = +prompt('Enter arr lenght min=2 and max=10');
    arrLenght = Math.abs(arrLenght);
    arrLenght = Math.round(arrLenght);
} while (isNaN(arrLenght) || arrLenght<2 || arrLenght>10);

console.log(arrLenght);

let enterRandMin;
do{
    enterRandMin = Math.round(+prompt('Enter min. random number -10, 10'));  
    }while(isNaN(enterRandMin) || enterRandMin === 0 || enterRandMin < -10 || enterRandMin >10);
    console.log(enterRandMin);

let enterRandMax;
do{
    enterRandMax = Math.round(+prompt('Enter max. random number before 50'));  
}while(isNaN(enterRandMax) || enterRandMax === 0 || enterRandMax < enterRandMin || enterRandMin >50);   
console.log(enterRandMax);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
} 

let arr = new Array(arrLenght);
for(let i=0; i<arrLenght; i++){
    arr[i] = getRandomInt(enterRandMin,enterRandMax);
}
console.log(arr);

let min = Math.min(...arr);
let max = Math.max(...arr);

let indexOffMin = arr.indexOf(min);
let indexOffMax =arr.indexOf(max);
arr[indexOffMin] = max;
arr[indexOffMax] = min;

console.log(arr);