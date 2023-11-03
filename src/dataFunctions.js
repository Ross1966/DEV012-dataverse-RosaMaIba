//ORDENAMIENTO
export const sortData = (data, sortBy, sortOrder) => {
  data.sort((a, b) => {


    if(sortOrder === "asc"){
      return a.name.localeCompare(b.name)
    }else if(sortOrder === "desc"){
      return b.name.localeCompare(a.name)
    }else{
      return 0
    }
      
  })
  
  return data;

};

// FUNCION PARA FILTRAR LA INFORMACION POR TIPO DE DIETA
export const filterDataByDiet = (data, filtrar) => {
  let resultado = [];
  if (filtrar === "") {
    return null;
  } else { 
    resultado = data.filter((data) => data.facts.dieta === filtrar);
  //console.log(resultado)
  }
  return resultado
}; 

//FUNCION PARA FILTAR POR HABITAD

export const filterDataByHabit = (data, filtrar) => {
  console.log(filtrar)
 
  let resultado = [];
  const sinDatos =  [];
  resultado = data.filter((data) => data.facts.habitad === filtrar);
  //console.log(resultado)
  if (resultado.length !== 0){
    return resultado;
    //console.log("no hay datos")
  }else{
    return sinDatos
    
  }
  
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


// FUNCION DE CALCULO DEL PORCENTAJE DE HABITAD

export const calculoHabitad =(data) => {
  const totalDatos = data.map((item) => item.facts.habitad)
  //console.log(totalDatos);
  const filtroSelva = data.filter((data) => data.facts.habitad === "Selva");
  //console.log(filtroSabana)
  let conteo = [];

  for(let i = 0; i < filtroSelva.length; i++) {
    conteo += 1;
  }

  //console.log(conteo.length)

  return parseFloat((conteo.length/totalDatos.length)*100).toFixed(2)


  
};

