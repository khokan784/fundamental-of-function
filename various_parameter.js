

function evenSizeString(str){
    const size = str.length;
    console.log(str, size);
    if(size % 2 === 0){
        console.log('even number');
        return true;
    }
    else{
        console.log('odd number');
        return false;
    }
}
// evenSizeString('dhaka');
// evenSizeString('saka');





function doubleOrTriple(number, double){
    if(double === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}
// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));




function personAge(number){
    const len = number.length;
    return len;
}
const result = personAge([4,8,5,9,3,7,6]);
console.log(result);