
//ORDENAMIENTO
export const sortData = (data, sortBy, sortOrder) => {

  data.sort((a, b) => {
    if(sortOrder === "asc"){
      console.log("ascendente")
      return a.name.localeCompare(b.name)
    }else if(sortOrder === "desc"){
      console.log("descendente")
      return b.name.localeCompare(a.name)
    }
      
  })
  
 
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
