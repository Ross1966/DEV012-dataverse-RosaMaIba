// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filtrar = () => {
  return 'example';
};

export const sortData = (data, sortBy, sortOrder) => {
  
  console.log(data, sortOrder, sortBy)


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