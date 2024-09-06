

function evenOnlyNumber(numbers){
    let evens = [];
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            evens.push(number);
        }
    }
    return evens;
}
// const numbers = [2,5,8,7,3,4];
// const evens = evenOnlyNumber(numbers);
// console.log('even number is :', evens);


function sumOfEvenNumber(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}
const numbers = [2,5,8,7,3,4];
// const sum = sumOfEvenNumber(numbers)
// console.log('sum of the even number is :', sum);

