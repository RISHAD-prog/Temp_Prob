function positiveSum(arr){
    let positiveNum= arr.filter(x=> x>0);
    const result = positiveNum.reduce((x,y)=> x+y,0);
    return result;
}

const arr= [2, -5, 10, -3, 7];

const output = positiveSum(arr);
console.log(output);