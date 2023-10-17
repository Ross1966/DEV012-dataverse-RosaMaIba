import {sortData} from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

const root = document.querySelector("#root");
root.innerHTML = renderItems(data);



const ordenarPor = document.querySelector('[data-testid="select-sort"]');

ordenarPor.addEventListener("change", (e) => {
  const opcion = e.target.value
  alert("Ascendente")
  sortData(data, "name" , opcion);
  root.innerHTML = renderItems(data);
  
});
