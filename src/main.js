import {sortData} from "./dataFunctions.js";
import { filterData } from "./dataFunctions.js";
import { filterData2 } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

const root = document.querySelector("#root");
root.innerHTML = renderItems(data);


//ORDENAMIENTO
const ordenarPor = document.querySelector('[data-testid="select-sort"]');

ordenarPor.addEventListener("change", (e) => {
  const opcion = e.target.value
  sortData(data, "name" , opcion);
  root.innerHTML = renderItems(data);
  
});

//FILTRADO POR DIETA
const filtro= document.querySelector('[name="dieta"]');
filtro.addEventListener("change", (e) => {
  const opcionqueeligioelusuario  = e.target.value;
  const resultadoFiltrar = filterData(data, opcionqueeligioelusuario)
  root.innerHTML = renderItems(resultadoFiltrar);
});

//FILTRADO POR HABITAD
const filtroHabitad= document.querySelector('[name="habitad"]');
filtroHabitad.addEventListener("change", (e) => {
  const opcionqueeligioelusuario  = e.target.value;
  const resultadoFiltrar = filterData2(data, opcionqueeligioelusuario)
  root.innerHTML = renderItems(resultadoFiltrar);
});


//BOTON
const boton= document.querySelector('[data-testid="button-clear"]');
boton.addEventListener("click", function(){

  ordenarPor.value = ""
  filtro.value = ""
  filtroHabitad.value= ""
  root.innerHTML = renderItems(data);
})

//CALCULOS
