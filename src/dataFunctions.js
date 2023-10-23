//ORDENAMIENTO
export const sortData = (data, sortBy, sortOrder) => {
  data.sort((a, b) => {
    if (sortOrder === "asc") {
      //console.log("ascendente")
      return a.name.localeCompare(b.name);
    } else if (sortOrder === "desc") {
      //console.log("descendente")
      return b.name.localeCompare(a.name);
    } else {
      return 0;
    }
      
  });
};

// FUNCION PARA FILTRAR LA INFORMACION POR TIPO DE DIETA
export const filterData = (data, filtrar) => {
  let resultado = [];
  if (filtrar === "") {
    return null;
  } else {
    resultado = data.filter((data) => data.facts.dieta === filtrar);
   
  }

  console.log(resultado)
  return resultado;
};

//FUNCION PARA FILTAR POR HABITAD

export const filterData2 = (data, filtrar) => {
  let resultado = [];
  if (filtrar === "") {
    return null;
  } else {
    resultado = data.filter((data) => data.facts.habitad === filtrar);
    //console.log(resultado)
  }
  return resultado;
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
  //let calculoH = []
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


  //const calcula = (100/filtroSabana.length)
  //console.log(calcula)
  //const totalHabitad = parseFloat(calcula).toFixed(2)
  // return totalHabitad
};


