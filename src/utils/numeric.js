const formatAtomicMass = (rawAtomicMass) => {
  const atomicMass = rawAtomicMass.replace(/[(*)]/g, '');
  const roundAtomicMass = parseFloat(atomicMass).toFixed(3);
  return String(roundAtomicMass);
};

export default formatAtomicMass;
