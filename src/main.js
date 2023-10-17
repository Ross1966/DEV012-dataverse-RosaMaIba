
import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const root = document.querySelector("#root");
root.innerHTML = renderItems(data);
const filtro= document.querySelector('[name="dieta"]');






filtro.addEventListener("change", (e) => {

 
  const filtrar  = e.target.value;

  filterData(data, filtrar)
 
  root.innerHTML = renderItems(data);
  
  
 
 

  

});


//console.log(data, renderItems(data), data);
