import { formatAtomicMass } from './utils';

const atomicMass = (elements, order) => {
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

const boilingPoint = (elements, order) => {
  elements.sort((a, b) => {
    const aBoilingPoint = Number(a.boilingPoint);
    const bBoilingPoint = Number(b.boilingPoint);

    if (aBoilingPoint < bBoilingPoint) {
      return order.a;
    }
    if (aBoilingPoint > bBoilingPoint) {
      return order.b;
    }
    return 0;
  });
  return elements;
};

const density = (elements, order) => {
  elements.sort((a, b) => {
    const aDensity = Number(a.density);
    const bDensity = Number(b.density);

    if (aDensity < bDensity) {
      return order.a;
    }
    if (aDensity > bDensity) {
      return order.b;
    }
    return 0;
  });
  return elements;
};

const meltingPoint = (elements, order) => {
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

const name = (elements, order) => {
  elements.sort((a, b) => {
    if (a.name < b.name) {
      return order.a;
    }
    if (a.name > b.name) {
      return order.b;
    }
    return 0;
  });
  return elements;
};

const yearDiscovered = (elements, order) => {
  elements.sort((a, b) => {
    const aYear = Number(a.yearDiscovered);
    const bYear = Number(b.yearDiscovered);
    if (Number.isNaN(aYear) && a.name < b.name) {
      return order.a;
    }
    if (Number.isNaN(bYear) && a.name > b.name) {
      return order.b;
    }
    if (aYear < bYear) {
      return order.a;
    }
    if (aYear > bYear) {
      return order.b;
    }
    return 0;
  });
  return elements;
};

const sortByMethod = (elements, method, order = { a: -1, b: 1 }) => {
  switch (method) {
    case 'atomicMass':
      return atomicMass(elements, order);
    case 'boilingPoint':
      return boilingPoint(elements, order);
    case 'density':
      return density(elements, order);
    case 'meltingPoint':
      return meltingPoint(elements, order);
    case 'name':
      return name(elements, order);
    case 'yearDiscovered':
      return yearDiscovered(elements, order);
    default:
      return elements;
  }
};

export default sortByMethod;
