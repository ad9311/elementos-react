import sortByMethod from '../utils/sortingMethods';
import elements from './elements.json';

describe('Sort', () => {
  test('Tennessine', () => {
    const sortedElements = sortByMethod(elements, 'atomicMass', true);
    expect(sortedElements[0].name).toEqual('Tennessine');
  });

  test('Iridium', () => {
    const sortedElements = sortByMethod(elements, 'density', true);
    expect(sortedElements[0].name).toEqual('Iridium');
  });

  test('Iron', () => {
    const sortedElements = sortByMethod(elements, 'yearDiscovered', false);
    expect(sortedElements[10].name).toEqual('Iron');
  });

  test('Praseodymium', () => {
    const sortedElements = sortByMethod(elements, 'meltingPoint', true);
    expect(sortedElements[50].name).toEqual('Praseodymium');
  });
});
