import React from 'react';
import PropTypes from 'prop-types';
import { formatAtomicMass } from '../../utils/utils';

const InspectedElement = (props) => {
  const {
    atomicMass,
    atomicNumber,
    boilingPoint,
    density,
    meltingPoint,
    name,
    yearDiscovered,
    symbol,
  } = props;

  return (
    <section>
      <p>{`Atomic Number: ${atomicNumber}`}</p>
      <h2>{symbol}</h2>
      <h3>{name}</h3>
      <p>{boilingPoint === '' ? 'Boiling Point: Undefined' : `Boiling Point: ${boilingPoint} K`}</p>
      <p>{density === '' ? 'Density: Undefined' : `Density: ${density} g/cm3`}</p>
      <p>{meltingPoint === '' ? 'Melting Point: Undefined' : `Melting Point: ${meltingPoint} K`}</p>
      <p>{`Year of Discovery: ${yearDiscovered}`}</p>
      <p>{`Atomic Mass: ${formatAtomicMass(atomicMass)} u`}</p>
    </section>
  );
};

InspectedElement.propTypes = {
  atomicMass: PropTypes.string,
  atomicNumber: PropTypes.string,
  boilingPoint: PropTypes.string,
  density: PropTypes.string,
  meltingPoint: PropTypes.string,
  name: PropTypes.string,
  yearDiscovered: PropTypes.string,
  symbol: PropTypes.string,
};

InspectedElement.defaultProps = {
  atomicMass: '0',
  atomicNumber: '0',
  boilingPoint: '0',
  density: '0',
  meltingPoint: '0',
  name: 'NoElement',
  yearDiscovered: '0',
  symbol: '0',
};

export default InspectedElement;
