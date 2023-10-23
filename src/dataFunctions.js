
//ORDENAMIENTO
export const sortData = (data, sortBy, sortOrder) => {

  data.sort((a, b) => {
    if(sortOrder === "asc"){
      console.log("ascendente")
      return a.name.localeCompare(b.name)
    }else if(sortOrder === "desc"){
      console.log("descendente")
      return b.name.localeCompare(a.name)
    }else{
      return 0
    }
      
  })
  
  return data;
};

// FUNCION PARA FILTRAR LA INFORMACION POR TIPO DE DIETA
export const filterData = (data, filtrar) => {
  let resultado = [];
  if (filtrar  === ''){
    return null
  }else{
    resultado = data.filter((data) => data.facts.dieta === filtrar);
    //return resultado
    console.log(resultado)
  }
  return resultado

};

export const filterData2 = (data, filtrar) => {
  let resultado = [];
  if (filtrar  === ''){
    return null
  }else{
    resultado = data.filter((data) => data.facts.habitad === filtrar);
    //return resultado
    console.log(resultado)
  }
  return resultado

};

// FUNCION DE CALCULO PESO CARNIVOROS
export const calculoPeso= (data) => {
  const primero = data.filter((data) => data.facts.dieta === "Carnívoro");
  // console.log(primero)
  const calc = primero
    .map((item) => item.facts.pesoenKilos)
    .reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue / primero.length,
      0
    );
  const promPesoKilos = parseFloat(calc).toFixed(2);
  //console.log(promPesoKilos)
  return promPesoKilos
};

