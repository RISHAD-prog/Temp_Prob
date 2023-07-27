function reverseString(input){
    let data = [];
    for (let i = input.length-1 ; i >= 0; i--) {
        data.push(input[i]);
    }
    return data.join('');
}
const input= "Hello World";
const output= reverseString(input);
console.log(output);