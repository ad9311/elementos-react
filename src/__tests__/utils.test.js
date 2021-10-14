import { searchElement, nameToLowerCase, formatAtomicMass } from '../utils/utils';
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

describe('Format Atomic Mass', () => {
  test('Helium', () => {
    const atomicMass = formatAtomicMass(elements[0].atomicMass);
    expect(atomicMass).toEqual(1.008);
  });

  test('Chlorine', () => {
    const atomicMass = formatAtomicMass(elements[16].atomicMass);
    expect(atomicMass).toEqual(35.453);
  });

  test('Radon', () => {
    const atomicMass = formatAtomicMass(elements[85].atomicMass);
    expect(atomicMass).toEqual(222);
  });
});
