import { filterData2} from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

//console.log(fakeData);
const TEST_FILTRO_HABITAD = "Selva"

describe('Animales de la Selva', () => {

  it('Debería devolver 4 animales de la selva', () => {
    const habitadSelva = filterData2 (fakeData, TEST_FILTRO_HABITAD)
    expect(filterData2(habitadSelva)).toBe(4);
  });
});

/*describe('anotherExample', () => {

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
