const compra = [
    {id: 1, nombre: 'queso'},
    {id: 2, nombre: 'galleta'},
    {id: 3, nombre: 'Arroz'},
    {id: 4, nombre: 'habichuela'},
    {id: 5, nombre: 'snacks'}
];

// To add a obj you can use .push
compra.push(
    {id:6, nombre: 'Aceite de Girasol'});
    
// to delete a obj can use .pop    
compra.pop({id:6, nombre: 'Aceite de Girasol'});  

console.log(compra);
console.log("\n");

const movie = [
    {titulo: 'hangover', director: 'Mike mussina', fecha: '15/01/2010'},
    {titulo: 'The Fast and the furious', director: 'Pompella', fecha: '15/08/2015'},
    {titulo: 'SpiderMan', director: 'Josh', fecha: '01/08/2022'}
    ];
    
    //console.log(movie);
    
    
    const recentMovie = movie.filter((element, index) => {
        return element.fecha > '01/01/2010';
      });
      
      console.log(recentMovie);


      const DirectorMovie = movie.map((element, index) => {
        return element.director;
      });
      
      console.log(DirectorMovie);

      const TitulosMovie = movie.map((element, index) => {
        return element.titulo;
      });
      console.log(TitulosMovie);


      //To Join two array.
      const Directores_Titulos_Movie = DirectorMovie.concat(TitulosMovie);
      console.log(Directores_Titulos_Movie);

      
      //To Join By Operator Spread []...]
      const Movie_Director_titulos = [...DirectorMovie, ...TitulosMovie];
      console.log(Movie_Director_titulos);


      
