
let factorial = 1;
let num = 5;

while (true) {
    factorial *= num;
    num--;
    if (num === 1){
        break;
    }
}
console.log(factorial);