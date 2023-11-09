// Aquí comienza tu código y puedes retornar lo que tu necesites
export const renderItems = (data) => {
  let elemento = "";
  data.forEach((animal) => {
    elemento += `
    
     <li itemscope itemtype="animal" class="box">

     <dl>
     <h2 class="id">${animal.name}</h2>
     <img src="${animal.imageUrl}" alt=${animal.name}/>
     <dt>Nombre:</dt>
     <dd itemprop ='name' class="parrafoBox">${animal.name}</dd>
     <dt>Descripción:</dt>
     <dd itemprop ='' class="descripcion">${animal.shortDescription}</dd>
     <dt>Peso en Kilos:</dt>
     <dd itemprop ='' class="parrafoBox">${animal.facts.pesoEnKilos}</dd>
     <dt>Años de Vida:</dt>
     <dd itemprop ='' class="parrafoBox">${animal.facts.anosDeVida}</dd>
     <dt>Habitad:</dt>
     <dd itemprop ='' class="parrafoBox">${animal.facts.tipoHabitad}</dd>
     <dt>Dieta:</dt>
     <dd itemprop ='' class="parrafoBox">${animal.facts.tipoDieta}</dd>
     </dl>
     </li>
    
     
   `;
    //.join("");

    //console.log(data)

   
  });
  return `<ul class="lista">${elemento}</ul>`;
};
/*
.header{
    width: 100%;
    float: left;
    height: 100px;
    background-color: rgb(168, 209, 120);
    color: rgb(0, 0, 0);
    text-align: center;
    margin-bottom: 80px;
    text-align: center;
    font-size: 30px;

}
 */