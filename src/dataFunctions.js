// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.



// FUNCION PARA FILTRAR LA INFORMACION POR TIPO DE DIETA
export const filterData = (data, filtrar) => {

  //const valor = data.facts.dieta;
  let resultado = [];



  if (filtrar  === ''){

    return null}else{
     
    resultado = data.filter((data) => data.facts.dieta === filtrar);
    
    //return resultado

    console.log(resultado)
  }

  return resultado 
};










 











  
  

/*if (filtrar  === ''){

    return null}else{
     
    resultado = data.filter((data) => (filtrar.value === "data.facts.dieta"));


   console.log(filtrar)

    
  }*/





  
  

//data.filter((data) => (valor === filterBy.value));


 

    







