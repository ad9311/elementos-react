import React from 'react';
import PropTypes from 'prop-types';
import { formatAtomicMass } from '../../utils/utils';
import style from './Element.module.css';

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

  const AT = `Atomic Number: ${atomicNumber}`;
  const AM = `Atomic Mass: ${formatAtomicMass(atomicMass)} u`;
  const BP = `Boiling Point: ${boilingPoint} K`;
  const UBP = 'Boiling Point: Undefined';
  const DE = `Density: ${density} g/cm3`;
  const UDE = 'Density: Undefined';
  const MP = `Melting Point: ${meltingPoint} K`;
  const UMP = 'Melting Point: Undefined';
  const YD = `Discovered in: ${yearDiscovered}`;

  return (
    <section className={style.inspect}>
      <div className="text-center lh-1">
        <h2 className={style.inspectSymbol}>{symbol}</h2>
        <h3>{name}</h3>
      </div>
      <div>
        <ul className={style.info}>
          <li><p>{AT}</p></li>
          <li><p>{AM}</p></li>
          <li><p>{boilingPoint === '' ? UBP : BP}</p></li>
          <li><p>{density === '' ? UDE : DE}</p></li>
          <li><p>{meltingPoint === '' ? UMP : MP}</p></li>
          <li><p>{YD}</p></li>
        </ul>
      </div>
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
