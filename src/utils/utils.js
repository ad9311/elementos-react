export const formatAtomicMass = (rawAtomicMass) => {
  if (rawAtomicMass !== undefined) {
    const atomicMass = rawAtomicMass.replace(/[(*)]/g, '');
    const roundAtomicMass = parseFloat(atomicMass).toFixed(3);
    return String(roundAtomicMass);
  }
  return '';
};

export const getSelection = (element, elements) => {
  if (element !== undefined) {
    const list = elements.filter(
      (groupElement) => groupElement.groupBlock === element.groupBlock,
    ).filter((groupElement) => groupElement.atomicNumber !== element.atomicNumber);
    const name = element.groupBlock;
    const group = { list, name };

    return { element, group };
  }
  return {
    element: {},
    group: {
      list: [],
      name: undefined,
    },
  };
};

export const nameToLowerCase = (name) => {
  if (name === undefined) {
    return undefined;
  }
  return name.toLowerCase();
};

export const searchElement = (name, elements) => {
  const foundElement = elements.filter(
    (element) => nameToLowerCase(element.name) === name,
  )[0];

  if (foundElement === undefined) {
    return {};
  }
  return foundElement;
};

export const onInspection = (path) => {
  if (path.includes('/details/')) {
    return true;
  }
  return false;
};

export const toggle = (flag) => {
  if (flag) {
    return false;
  }
  return true;
};
