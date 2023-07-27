function mostFrequent (arr){
    let result =0;
    let curr= 1;
    let prev= 0;     
    for (let i = 0; i < arr.length; i++) {
        
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] === arr[j]){
                curr += 1;
            }
            
        }
        if(prev < curr)
        {
            prev = curr;
            curr = 0;
            result = arr [i];
        }
    }
    
    return result;
}

const input = [3, 5, 2, 5, 3, 3, 1, 4, 5];

const result = mostFrequent (input);

console.log(result);