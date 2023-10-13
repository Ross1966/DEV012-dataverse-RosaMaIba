export const renderItems = (data) => {
  //console.log(data)


  const elemento = data.forEach( animalData => {
    const li = document.createElement("li");
    li.innerHTML = `
    ${animalData.name}
  <dl itemscope itemtype="Animales">
    <img src= ${animalData.imageUrl} alt=${animalData.id} />
    <dt>Nombre:</dt><dd itemprop="name">${animalData.name}</dd>
    <dt>Descripción:</dt><dd itemprop="description">${animalData.shortDescription}</dd>
    <dt>Cuantos años pueden vivir:</dt><dd itemprop="longevidad">${animalData.añosdevida}</dd>
    <dt>Dieta:</dt><dd itemprop="dieta">${animalData.dieta}</dd>
    <dt>Peso en kilos:</dt><dd itemprop="peso">${animalData.pesoenkilos}</dd>
  </dl>
  `;
    const ul = document.createElement("ul");
    ul.appendChild(li)
  });


  
    
  return elemento;
};

