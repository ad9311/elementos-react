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
