import sortByMethod from '../utils/sortingMethods';
import elements from './elements.json';

describe('Sort', () => {
  test('Tennessine', () => {
    const sortedElements = sortByMethod(elements, 'atomicMass', true);
    expect(sortedElements[0].name).toEqual('Tennessine');
  });

  test('asdasd', () => {
    const sortedElements = sortByMethod(elements, 'density', false);
    expect(sortedElements[0].name).toEqual('Xenon');
  });

  test('dfgf', () => {
    const sortedElements = sortByMethod(elements, 'yearDiscovered', false);
    expect(sortedElements[0].name).toEqual('Bismuth');
  });

  test('T45645', () => {
    const sortedElements = sortByMethod(elements, 'meltingPoint', true);
    expect(sortedElements[0].name).toEqual('Carbon');
  });
});
