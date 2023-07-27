let twoSum = (nums, target) => {
    let i = 0;
    let j = 0;
    let curr = nums[0];
    let x = target - curr ;
    let check = false;
    let indices = [i];
        for ( i = i+1; i < nums.length; i++) {
            
            if(x === nums[i]){
                check = true;
                indices.push(i);
            }
            else if(check === false && i === nums.length - 1){
                i = j+1;
                j = j+1;
                curr = nums [j];
                x = target - curr;
                indices=[];
                indices.push(j);
            }
       
    }
    return indices;
};

const arr= [1, 3, 6, 11, 15];
const target = 9;
console.log(twoSum(arr,target));