const formatRawData = (rawData) => {
  const elements = [];
  rawData.forEach((element) => {
    elements.push(
      {
        atomicMass: String(parseFloat(element.atomicMass)),
        atomicNumber: element.atomicNumber,
        boilingPoint: String(parseFloat(element.boilingPoint)),
        density: String(parseFloat(element.density)),
        groupBlock: element.groupBlock,
        meltingPoint: String(parseFloat(element.meltingPoint)),
        name: element.name,
        standardState: element.standardState,
        symbol: element.symbol,
        yearDiscovered: element.yearDiscovered,
      },
    );
  });
  return elements;
};

export default formatRawData;
