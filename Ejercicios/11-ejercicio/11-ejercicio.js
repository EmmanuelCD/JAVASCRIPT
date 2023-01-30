class Estudiante{
    nombre = 'Emmanuel';
    asignaturas = ['Html','css','javascript']

  

    obtenDatos(){
        return this.nombre,
               this.asignaturas;   
    }
}
const estudiante = new Estudiante();

console.log(estudiante.obtenDatos())
