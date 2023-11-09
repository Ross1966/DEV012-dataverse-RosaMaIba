# Dataverse InfoZoo


* [1. Preámbulo](#1-Preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Diseño de la Interfaz de Usuaria](#3-diseño-de-la-interfaz-de-usuaria)
* [4. Historia de Usuario](#4-Historia-de-usuario)
* [5. Captura de pantalla del prompt utilizado para generar los datos](#5-captura-de-pantalla-del-prompt-utilizado-para-generar-los-datos)


## 1. Preámbulo

Este proyecto se desarrolló en dupla, el tiempo en que se realizó fue de 4 sprints. 
Se utilizaron las herramientas  de HTML, CSS y en la lógica de programación
Vainilla Javascript, el ambiente utilizado fué el Node, y para su creación se hizo uso de la inteligencia artificial (chat gpt) para generar la base de datos (dataset) la cuál ha sido utilizada en nuestras aplicaciones, así como de las imágenes. 

Se creó un diseño responsive utilizando flexbox y css, es decir adaptable a cualquier tipo de pantalla que el usuario eliga.

El proyecto se subió a github.

## 2. Resumen del proyecto

En este proyecto llamado InfoZoo, damos la información de un conjunto de animales los cuales se dividen por su tipo de alimentación (Dieta) como son: Hervívoros, Carnívoros, Omnívoros, Insectívoros y Frugívoros.

En cada tarjeta se muestra la siguiente información: Nombre, Descripción, Peso en Kilos, Años de Vida y Hábitat.

El usuario podrá hacer el filtro de la lista de animales dependiendo su dieta, y a su vez filtar por lugar donde habita (Hábitat) de cada animal. Es decir: podremos elegir un animal por su tipo de dieta y por su hábitat.
En caso de que no exista el filtro, nos indicará el texto "No hay datos para mostrar":


También se puede hacer el ordenamiento en forma alfabética de la lista de animales, es decir desplegando la lista de la A a la Z y de la Z a la A.

Cálculos:
1.- Promedio de peso de animales carnívoros, el cuál al darle click nos muestra dicho promedio de la lista total de animales carnívoros.

2.- Porcentaje total de Hábitat, el cuál al darle click nos muestra el porcentaje de animales que habita en la selva de nuestra lista.

El botón de limpiar nos sirve para regresar a nuestra lista original después de haber aplicado los filtros a nuestros datos.


## 3. Diseño de la Interfaz de Usuaria

Buscamos crear una interfaz simple pero atractiva al usuario en donde pueda observar el contenido en tarjetas de una forma facil, creamos tres columnas para la versión en desktop, dos columnas para la versión en tablet y 1 columna para la versión en mobile.
En la version mobile y tablet creamos un menú hamburguesa en donde se podra filtrar, ordenar y limpiar el contenido de igual manera que el la interfaz desktop, pero de una forma mas compacta. De esta forma lo que esperamos es que el usuario tenga una vista completa de las tarjetas.

### a. Prototipo desktop:

![Alt text](image.png) ![Alt text](image-1.png)

### b. Prototipo Mobile:

![Alt text](image-2.png) ![Alt text](image-3.png)

### c. Prototipo Tablet:

![Alt text](image-4.png) ![Alt text](image-5.png)


## 4. Historia de usuario

Como entregable final tendrás una página web que permita **visualizar la data, filtrarla, ordenarla y calcular alguna estadística.

Primero lo que se realizó fué la creación de la Data, la cuál se hizo por medio de la inteligencia artificial, tomando en cuenta el ejemplo correspondiente al de la Data del proyecto Dataverse.

Una vez generada la data, se realizaron los cambios y se especificaron los datos, así como las imagenes que decidimos contenga.

Se creó por medio de una función en Javascript la creación visible de la data en Html.

Se implementaron en Javascript las variables utilizadas pertenecientes al DOM y con esto las funciones llamadas.

En las funciones realizamos los filtros, el ordenamiento de los datos, la de reiniciar la lista, así como los cálculos correspondientes.

Por último se creó el diseño, el cual primero fué hecho en Css puro, para despues implementar un diseño responsive en el cuál se utilizaron los mediaquerys específicos para cada tamaño de pantalla.


## 5. Captura de pantalla del prompt utilizado para generar los datos

 ![Alt text](image-7.png) ![Alt text](image-6.png)





 
