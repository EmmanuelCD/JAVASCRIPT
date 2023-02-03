let boton = document.getElementById("boton");

boton.addEventListener("click", () => alert("Click en el boton"));

//Nota: en JQUERY es necesario agregar estos signos # - . o el nombre directo de la propiedad html.
// #: representa un id selector.
// .: representa una clase selector.
// button: representa el nombre directo de la etiqueta html.
$("#boton").click(function () {
  alert("Ha sido llamada desde JQUERY.");
});
