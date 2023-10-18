
import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';
import { sortData } from './dataFunctions.js';
import  data  from './data/dataset.js'

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


//console.log(data, renderItems(data), data);
