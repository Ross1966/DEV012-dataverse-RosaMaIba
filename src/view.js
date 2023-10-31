// Aquí comienza tu código y puedes retornar lo que tu necesites
export const renderItems = (data) => {
  let elemento = "";
  data.forEach((animal) => {
    elemento += `
    
     <li itemscope itemtype="animal" class="box">
     
     <p class="id"><strong>${animal.id}</strong></p>
     <dl itemscope itemtype="Animales">
     <img src="${animal.imageUrl}" alt=${animal.name} />
     <dt><strong>Nombre:</strong></dt>
     <dd itemprop =''>${animal.name}</dd>
     <dt><strong>Descripción:</strong></dt>
     <dd itemprop =''>${animal.shortDescription}</dd>
     <dt><strong>Peso en Kilos:</strong></dt>
     <dd itemprop =''>${animal.facts.pesoenKilos}</dd>
     <dt><strong>Años de Vida:</strong></dt>
     <dd itemprop =''>${animal.facts.añosdevida}</dd>
     <dt><strong>Habitad:</strong></dt>
     <dd itemprop =''>${animal.facts.habitad}</dd>
     <dt><strong>Dieta:</strong></dt>
     <dd itemprop =''>${animal.facts.dieta}</dd>
     </dl>
     </li>
    
     
   `;
    //.join("");

    //console.log(data)

   
  });
  return `<ul class="lista">${elemento}</ul>`;
};
