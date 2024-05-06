function sumMix(x) {
    let sum = 0;

    for (let i = 0; i < x.length; i++) {
        sum += Number(x[i]);
    }
    return sum;
}

const array = ['1', 2, '3', '4'];
console.log(sumMix(array)); 
