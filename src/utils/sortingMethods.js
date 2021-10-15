const atomicMass = (elements, order) => {
  if (order) {
    return elements.sort(
      (a, b) => b.atomicMass.localeCompare(
        a.atomicMass, undefined, { numeric: true },
      ),
    );
  }
  return elements.sort(
    (a, b) => a.atomicMass.localeCompare(
      b.atomicMass, undefined, { numeric: true },
    ),
  );
};

const boilingPoint = (elements, order) => {
  const unknown = elements.filter((element) => element.boilingPoint === 'NaN');
  unknown.sort((a, b) => a.name.localeCompare(b.name));
  const hasValue = elements.filter((element) => element.boilingPoint !== 'NaN');

  const getHasValue = () => {
    if (order) {
      return hasValue.sort(
        (a, b) => b.boilingPoint.localeCompare(
          a.boilingPoint, undefined, { numeric: true },
        ),
      );
    }
    return hasValue.sort(
      (a, b) => a.boilingPoint.localeCompare(
        b.boilingPoint, undefined, { numeric: true },
      ),
    );
  };
  const filteredHasValue = getHasValue();
  return [...filteredHasValue, ...unknown];
};

const density = (elements, order) => {
  const unknown = elements.filter((element) => element.density === 'NaN');
  unknown.sort((a, b) => a.name.localeCompare(b.name));
  const hasValue = elements.filter((element) => element.density !== 'NaN');

  const getHasValue = () => {
    if (order) {
      return hasValue.sort(
        (a, b) => b.density.localeCompare(
          a.density, undefined, { numeric: true },
        ),
      );
    }
    return hasValue.sort(
      (a, b) => a.density.localeCompare(
        b.density, undefined, { numeric: true },
      ),
    );
  };
  const filteredHasValue = getHasValue();
  return [...filteredHasValue, ...unknown];
};

const meltingPoint = (elements, order) => {
  const unknown = elements.filter((element) => element.meltingPoint === 'NaN');
  unknown.sort((a, b) => a.name.localeCompare(b.name));
  const hasValue = elements.filter((element) => element.meltingPoint !== 'NaN');

  const getHasValue = () => {
    if (order) {
      return hasValue.sort(
        (a, b) => b.meltingPoint.localeCompare(
          a.meltingPoint, undefined, { numeric: true },
        ),
      );
    }
    return hasValue.sort(
      (a, b) => a.meltingPoint.localeCompare(
        b.meltingPoint, undefined, { numeric: true },
      ),
    );
  };

  const filteredHasValue = getHasValue();
  return [...filteredHasValue, ...unknown];
};

const name = (elements, order) => {
  if (order) {
    return elements.sort((a, b) => b.name.localeCompare(a.name));
  }
  return elements.sort((a, b) => a.name.localeCompare(b.name));
};

const yearDiscovered = (elements, order) => {
  const ancient = elements.filter((element) => element.yearDiscovered === 'Ancient');
  ancient.sort((a, b) => a.name.localeCompare(b.name));
  const modern = elements.filter((element) => element.yearDiscovered !== 'Ancient');

  const getModern = () => {
    if (order) {
      return modern.sort(
        (a, b) => b.yearDiscovered.localeCompare(
          a.yearDiscovered, undefined, { numeric: true },
        ),
      );
    }
    return modern.sort(
      (a, b) => a.yearDiscovered.localeCompare(
        b.yearDiscovered, undefined, { numeric: true },
      ),
    );
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
