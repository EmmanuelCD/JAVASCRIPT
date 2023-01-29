//- Una función sin parámetros que devuelva siempre "true"
function verdadero() {
  return true;
}
console.log(verdadero());

//- Una función asíncrona que utilice un setTimeout y pase por consola un
//"Hola soy una promesa" 5 segundos después de haberse ejecutado.

async function miPromesa() {
  let promise = new Promise((resolve) => {
    //setTimeout(() => resolve("Hola soy una promesa"),5000)
  });
  let result = await promise;
  console.log(result);
}
miPromesa();

//- Una función generadora de índices pares automáticos
function* pares() {
  let numeros = 0;
  while (true) {
    numeros++;
    if (numeros % 2 == 0) {
      console.log("este numero es par");
    } else {
      console.log("Este numero no es par");
    }
    yield numeros;
  }
}
const generar = pares();
console.log(generar.next().value);
console.log(generar.next().value);
console.log(generar.next().value);
console.log(generar.next().value);
console.log(generar.next().value);
console.log(generar.next().value);
console.log(generar.next().value);
console.log(generar.next().value);
console.log(generar.next().value);
console.log(generar.next().value);
console.log(generar.next().value);
console.log(generar.next().value);
console.log(generar.next().value);
console.log(generar.next().value);
