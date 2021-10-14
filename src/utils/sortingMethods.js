import { formatAtomicMass } from './utils';

const atomicMass = (elements, order) => {
  if (order) {
    return elements.sort((a, b) => formatAtomicMass(a.atomicMass) < formatAtomicMass(b.atomicMass));
  }
  return elements.sort((a, b) => formatAtomicMass(a.atomicMass) > formatAtomicMass(b.atomicMass));
};

const boilingPoint = (elements, order) => {
  const unknown = elements.filter((element) => element.boilingPoint === '');
  const hasValue = elements.filter((element) => element.boilingPoint !== '');

  const getHasValue = () => {
    if (order) {
      return hasValue.sort((a, b) => Number(a.boilingPoint) < Number(b.boilingPoint));
    }
    return hasValue.sort((a, b) => Number(a.boilingPoint) > Number(b.boilingPoint));
  };

  const filteredHasValue = getHasValue();

  if (order) {
    return [...filteredHasValue, ...unknown];
  }
  return [...filteredHasValue, ...unknown];
};

const density = (elements, order) => {
  const unknown = elements.filter((element) => element.density === '');
  const hasValue = elements.filter((element) => element.density !== '');

  const getHasValue = () => {
    if (order) {
      return hasValue.sort((a, b) => Number(a.density) < Number(b.density));
    }
    return hasValue.sort((a, b) => Number(a.density) > Number(b.density));
  };

  const filteredHasValue = getHasValue();

  if (order) {
    return [...filteredHasValue, ...unknown];
  }
  return [...filteredHasValue, ...unknown];
};

const meltingPoint = (elements, order) => {
  const unknown = elements.filter((element) => element.meltingPoint === '');
  const hasValue = elements.filter((element) => element.meltingPoint !== '');

  const getHasValue = () => {
    if (order) {
      return hasValue.sort((a, b) => Number(a.meltingPoint) < Number(b.meltingPoint));
    }
    return hasValue.sort((a, b) => Number(a.meltingPoint) > Number(b.meltingPoint));
  };

  const filteredHasValue = getHasValue();

  if (order) {
    return [...filteredHasValue, ...unknown];
  }
  return [...filteredHasValue, ...unknown];
};

const name = (elements, order) => {
  if (order) {
    return elements.sort((a, b) => a.name < b.name);
  }
  return elements.sort((a, b) => a.name > b.name);
};

const yearDiscovered = (elements, order) => {
  const ancient = elements.filter((element) => element.yearDiscovered === 'Ancient');
  const modern = elements.filter((element) => element.yearDiscovered !== 'Ancient');

  const getModern = () => {
    if (order) {
      return modern.sort((a, b) => Number(a.yearDiscovered) < Number(b.yearDiscovered));
    }
    return modern.sort((a, b) => Number(a.yearDiscovered) > Number(b.yearDiscovered));
  };

  const filteredModern = getModern();

  if (order) {
    return [...filteredModern, ...ancient];
  }
  return [...ancient, ...filteredModern];
};

const sortByMethod = (elements, method, order) => {
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
