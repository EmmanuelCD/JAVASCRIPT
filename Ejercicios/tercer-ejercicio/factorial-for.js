// Factorial de un numero  n! = n × (n−1)!
let num = 5
let fact = 1;

for(let i = num; i >0; i--){
    fact = fact * i;
}
console.log("el numero es: " +fact);