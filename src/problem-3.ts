function filterEvenNumbers(arr:number[]):number[]{
return arr.filter(number=>number%2==0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]))