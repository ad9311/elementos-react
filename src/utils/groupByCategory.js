const groupBlock = (element, elements) => {
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

const standardState = (element, elements) => {
  if (element !== undefined) {
    const list = elements.filter(
      (groupElement) => groupElement.standardState === element.standardState,
    ).filter((groupElement) => groupElement.atomicNumber !== element.atomicNumber);
    const name = element.standardState;
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

const groupByCategory = (category, element, elements) => {
  switch (category) {
    case 'groupBlock':
      return groupBlock(element, elements);
    case 'standardState':
      return standardState(element, elements);
    default:
      return {
        element: {},
        group: {
          list: [],
          name: undefined,
        },
      };
  }
};

export default groupByCategory;
