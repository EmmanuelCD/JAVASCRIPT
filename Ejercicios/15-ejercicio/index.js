let nombre = "Emmanuel";
let apellido = "Camacho";

const NombreApellido = {
  nombre,
  apellido,
};

sessionStorage.setItem("nombreApellido", JSON.stringify(NombreApellido));
localStorage.setItem("nombreApellido", JSON.stringify(NombreApellido));

const now = new Date();
document.cookie = `datos=${JSON.stringify(datos)};expires=${new Date(
  now.getTime() + 2 * 60000
)}`;
