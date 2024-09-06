
function sumOfNumber(numbers){
    let sum = 0;
    for(const number of numbers){
        // console.log(number);
        sum = sum + number;
    }
    return sum;
    
}
const numbs = [4,6,8,3,7,2];
const sum =sumOfNumber(numbs);
console.log(sum);