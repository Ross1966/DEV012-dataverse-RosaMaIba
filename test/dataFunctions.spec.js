import { filterDataByDiet, filterDataByHabit, sortData, calculoPeso, calculoHabitad} from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

//console.log(fakeData);

const TEST_FILTRO_DIETA = "Insectívora"
describe('filtrarDieta', () => {

  it('Deberia devolver 4 animales insectívoros', () => {
    const dietaInsectivora = filterDataByDiet(fakeData, TEST_FILTRO_DIETA)
    expect(dietaInsectivora.length).toBe(4);
  });
});

const TEST_FILTRO_HABITAD= "Selva"
describe('filtrarHabitad', () => {
  it('Deberia devolver 4 animales de habitad selva', () => {
    const habitadSelva = filterDataByHabit(fakeData, TEST_FILTRO_HABITAD)
    expect(habitadSelva.length).toBe(4);
  });
});

const TEST_ASCENDENTE = "asc"
describe("Ascendente", ()=>{
  it("Deberia devolver los nombres ordenados de forma ascendente",()=>{
    const numAsc = sortData(fakeData, "name", TEST_ASCENDENTE)
    expect(numAsc[0]).toStrictEqual(fakeData[0]);
  });
});

const TEST_DESCENDENTE = "desc"
describe("Descendente", ()=>{
  it("Deberia de volver los nombres ordenados de forma Descendente",()=>{
    const numDesc = sortData(fakeData,"name", TEST_DESCENDENTE)
    expect(numDesc[7]).toStrictEqual(fakeData[7]);
  });
});

const TEST_CALCULO_PESO= "Carnívoro"
describe("PesoCarnivoros", () =>{
  it("Debería devolver el promedio de pesos en kilos para la dieta " + TEST_CALCULO_PESO, () => {
    const promedio = calculoPeso(fakeData, TEST_CALCULO_PESO)
    expect(promedio).toBe("190.00");
  });
});

const TEST_CALCULO_HABITAD = "Selva"
describe("CalculoHabitadSelva",()=>{
  it("Deberia devolver el porcentaje total de animales de la selva" + TEST_CALCULO_HABITAD, () =>{
    const porcentajeTotal = calculoHabitad(fakeData, TEST_CALCULO_HABITAD)
    expect(porcentajeTotal).toBe("44.44")
  })
})