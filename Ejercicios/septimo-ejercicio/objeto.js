const datosPersonales = {
    nombreCompleto: 'Emmanuel Camacho',
    edad: 25,
    altura: 1.67,
    eresDesarrollador: true
};

let edadObtenida = datosPersonales.edad;

//console.log(edadObtenida);

const nuevaLista = [
            {datosPersonales},
            {nombreCompleto:'Carlos', edad: 19, altura: 1.60, eresDesarrollador: false},
            {nombreCompleto:'Carlos', edad: 20, altura: 1.80, eresDesarrollador: false}
]

//console.log(nuevaLista);


const nuevaDerivada = nuevaLista.sort((a, b) => b.edad - a.edad)
console.log(nuevaLista);
