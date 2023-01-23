const fecha = new Date();
const cumple = new Date(1997, 03, 18);

console.log(fecha);
console.log(cumple);

let validar = fecha > cumple ? true : false;
console.log(validar);

let diaCumple = cumple.getDate();
console.log(diaCumple);

let mesCumple = cumple.getMonth() + 1;
console.log(mesCumple);

let anioCumple = cumple.getFullYear();
console.log(anioCumple);
