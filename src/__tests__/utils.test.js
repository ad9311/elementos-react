import { searchElement, nameToLowerCase } from '../utils/utils';
import elements from './elements.json';

describe('Search an element', () => {
  test('Helium', () => {
    const element = searchElement(nameToLowerCase(elements[1].name), elements);
    expect(element.name).toEqual('Helium');
  });

  test('Chlorine', () => {
    const element = searchElement(nameToLowerCase(elements[16].name), elements);
    expect(element.name).toEqual('Chlorine');
  });

  test('Cobalt', () => {
    const element = searchElement(nameToLowerCase(elements[26].name), elements);
    expect(element.name).toEqual('Cobalt');
  });
});
