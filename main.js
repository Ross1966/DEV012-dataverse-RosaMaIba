import {sortData} from "./dataFunctions.js";
import {calculoPeso}  from "./dataFunctions.js";
import {calculoHabitad}  from "./dataFunctions.js";
import { filterDataByDiet } from "./dataFunctions.js";
import { filterDataByHabit } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";
const root = document.querySelector("#root");
root.innerHTML = renderItems(data);
let datosFiltrados = data;
let datosDietaFiltrados = datosFiltrados;
const parrafo = document.querySelector("#sinDatos");


//ORDENAMIENTO
const ordenarPor = document.querySelector('[data-testid="select-sort"]');
ordenarPor.addEventListener("change", (e) => {
  const opcion = e.target.value
  sortData(datosFiltrados, "name" , opcion);
  root.innerHTML = renderItems(datosFiltrados);
});


//FILTRADO POR DIETA
const filtro= document.querySelector('[name="dieta"]');
filtro.addEventListener("change", (e) => {
  const opcionqueeligioelusuario  = e.target.value;
  datosFiltrados = filterDataByDiet(data, opcionqueeligioelusuario)
  datosDietaFiltrados = datosFiltrados;
  parrafo.innerHTML = '';
  root.innerHTML = renderItems(datosFiltrados);
});


//FILTRADO POR HABITAD
const filtroHabitad= document.querySelector('[name="habitad"]');
filtroHabitad.addEventListener("change", (e) => {
  const opcionqueeligioelusuario  = e.target.value;
  datosDietaFiltrados = filterDataByHabit(datosFiltrados,opcionqueeligioelusuario)
  root.innerHTML = renderItems(datosDietaFiltrados);
  arregloVacio()
});




//BOTON
const boton= document.querySelector('[data-testid="button-clear"]');
boton.addEventListener("click", function(){
  ordenarPor.selectedIndex = 0;
  filtro.value = ""
  filtroHabitad.value= ""
  datosFiltrados = data;
  root.innerHTML = renderItems(data);
  calcular.innerHTML = "<span>Promedio de peso:</span><br>Animales carnivoros";
  calcularHabitad.innerHTML = "<span>Porcentaje total Habitad:</span><br>Selva";
  parrafo.innerHTML = "";
});


//CALCULOS DE PESO DE CARNIVOROS
const calcular = document.querySelector('#calcular');
calcular.addEventListener("click", function() {
  const resultCalculo= calculoPeso(data);
  calcular.innerHTML = "El peso promedio de los aniamles carnívoros es de:   "  +  resultCalculo  + "  Kilos";
});


// CALCULO HABITAD
const calcularHabitad = document.querySelector('#calcularHabitad');
calcularHabitad.addEventListener("click", function() {
  const resultCalculoH = calculoHabitad(data);
  calcularHabitad.innerHTML = "Los animales que viven en la selva son  " + resultCalculoH + "%"
})


// CREACION DEL FOOTER
function init() {
  const footer = document.getElementById("footer");
  const pTexto = document.createTextNode("Autoras: Rossy Palacin & Rosa María Ibáñez");
  footer.appendChild(pTexto);
  document.body.appendChild(footer);
}
init();


// FUNCION CUANDO NO HAY CONTENIDO QUE MOSTRAR
function arregloVacio() {
  const vacio = datosDietaFiltrados;
  if (vacio.length !== 0){
    parrafo.innerHTML = " ";
  }else{
    parrafo.innerHTML = "No hay datos para mostrar";
    return parrafo
  }
}


//MENU HAMBURGUESA

const contenedor1 = document.querySelector("#contenedor1");
const cerrar = document.querySelector("#cerrar-menu");
const abrir = document.querySelector("#abrir-menu");

abrir.addEventListener("click", () =>{
  contenedor1.classList.add("visible")
})
cerrar.addEventListener("click", ()=>{
  contenedor1.classList.remove("visible")
})