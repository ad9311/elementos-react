export const formatAtomicMass = (rawAtomicMass) => {
  const atomicMass = rawAtomicMass.replace(/[(*)]/g, '');
  const roundAtomicMass = parseFloat(atomicMass).toFixed(3);
  return String(roundAtomicMass);
};

export const getSelection = (element, elements) => {
  const list = elements.filter(
    (groupElement) => groupElement.groupBlock === element.groupBlock,
  ).filter((groupElement) => groupElement.atomicNumber !== element.atomicNumber);
  const name = element.groupBlock;
  const group = { list, name };

  return { element, group };
};
