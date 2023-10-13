import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

//console.log(example, renderItems(data), data);

const contenedorPrincipal = document.querySelector("#root");
contenedorPrincipal.innerHTML = renderItems(data);
console.log(renderItems(data))