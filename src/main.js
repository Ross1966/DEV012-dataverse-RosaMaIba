import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const root = document.querySelector("#root");
root.innerHTML = renderItems(data);

//console.log(data, renderItems(data), data);
