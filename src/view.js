// Aquí comienza tu código y puedes retornar lo que tu necesites
export const renderItems = (data) => {
 
  const  elemento =  data.map((animal) => 
    `
    
     <li>
     ${animal.id}
     <dl itemscope itemtype="Animales">
     <img src="${animal.imageUrl}" alt=${animal.name} />
     <dt>Nombre:</dt><dd itemprop =''>${animal.name}</dd>
     <dt>Descripción:</dt><dd itemprop =''>${animal.shortDescription}</dd>
     <dt>Peso en Kilos</dt><dd itemprop =''>${animal.pesoenKilos}</dd>
     </dl>
     </li>
   
     
   `
  ).join("");



  //console.log(data)
  
  return `<ul>${elemento}</ul>`;
};

