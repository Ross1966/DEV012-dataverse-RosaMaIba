import {sortData} from "./dataFunctions.js";
import {calculoPeso}  from "./dataFunctions.js";
import {calculoHabitad}  from "./dataFunctions.js";
import { filterData } from "./dataFunctions.js";
import { filterData2 } from "./dataFunctions.js";
import { renderItems } from "./view.js";


import data from "./data/dataset.js";

const root = document.querySelector("#root");
root.innerHTML = renderItems(data);
let datosFiltrados = data;

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
  datosFiltrados = filterData(datosFiltrados, opcionqueeligioelusuario)
  root.innerHTML = renderItems(datosFiltrados);
});

//FILTRADO POR HABITAD
const filtroHabitad= document.querySelector('[name="habitad"]');
filtroHabitad.addEventListener("change", (e) => {
  const opcionqueeligioelusuario  = e.target.value;
  datosFiltrados = filterData2(datosFiltrados, opcionqueeligioelusuario)
  root.innerHTML = renderItems(datosFiltrados);
});


//BOTON
const boton= document.querySelector('[data-testid="button-clear"]');
boton.addEventListener("click", function(){

  ordenarPor.value = "";
  filtro.value = ""
  filtroHabitad.value= ""
  datosFiltrados = data;
  root.innerHTML = renderItems(data);
  calcular.innerHTML = "Dieta";
  calcularHabitad.innerHTML = "Habitad"
});

//CALCULOS DE PESO DE CARNIVOROS
const calcular = document.querySelector('#calcular');

calcular.addEventListener("click", function() {
  //const cambio  = e.target.value;
  const resultCalculo= calculoPeso(data);

  calcular.innerHTML = "EL PROMEDIO DE PESO DE LOS ANIMALES CARNIVOROS ES DE: "  +  resultCalculo  + "  KILOS";
    
});

// CALCULO HABITAD

const calcularHabitad = document.querySelector('#calcularHabitad');

calcularHabitad.addEventListener("click", function() {
  
  const resultCalculoH = calculoHabitad(data);

  calcularHabitad.innerHTML = "LOS ANIMALES QUE VIVEN EN LA SELVA SON  " + resultCalculoH + "%"

})



