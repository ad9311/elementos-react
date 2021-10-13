import { formatAtomicMass } from './utils';

export const atomicMass = (elements, order = { a: -1, b: 1 }) => {
  elements.sort((a, b) => {
    const aAtomicMass = formatAtomicMass(a.atomicMass);
    const bAtomicMass = formatAtomicMass(b.atomicMass);

    if (aAtomicMass < bAtomicMass) {
      return order.a;
    }
    if (aAtomicMass > bAtomicMass) {
      return order.b;
    }
    return 0;
  });
  return elements;
};

export const meltingPoint = (elements, order = { a: -1, b: 1 }) => {
  elements.sort((a, b) => {
    const aMeltingPoint = Number(a.meltingPoint);
    const bMeltingPoint = Number(b.meltingPoint);

    if (aMeltingPoint < bMeltingPoint) {
      return order.a;
    }
    if (aMeltingPoint > bMeltingPoint) {
      return order.b;
    }
    return 0;
  });
  return elements;
};

export const sortByMethod = (elements, method, order) => {
  switch (method) {
    case 'atomicMass':
      return atomicMass(elements, order);
    case 'meltingPoint':
      return meltingPoint(elements, order);
    default:
      return {};
  }
};
