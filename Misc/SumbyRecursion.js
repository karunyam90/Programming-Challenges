function sumbyrecursion(x) {

    // if number is 0
    if (x === 0) {
        return 0;
        
    }
    return x + sumbyrecursion(x-1);
    
}

let result = sumbyrecursion(0);
console.log(result);