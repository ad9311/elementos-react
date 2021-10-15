import React from 'react';
import PropTypes from 'prop-types';
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

  const AT = <p><b>{`Atomic Number: ${atomicNumber}`}</b></p>;
  const AM = <p><b>{`Atomic Mass: ${Number(atomicMass).toFixed(3)} u`}</b></p>;
  const BP = <p><b>{`Boiling Point: ${boilingPoint} K`}</b></p>;
  const UBP = <p><b>Boiling Point: Undefined</b></p>;
  const DE = <p><b>{`Density: ${Number(density).toExponential(2)} g/cm3`}</b></p>;
  const UDE = <p><b>Density: Undefined</b></p>;
  const MP = <p><b>{`Melting Point: ${meltingPoint} K`}</b></p>;
  const UMP = <p><b>Melting Point: Undefined</b></p>;
  const YD = <p><b>{`Discovered in: ${yearDiscovered}`}</b></p>;

  return (
    <section className={style.inspect}>
      <div className="text-center lh-1">
        <h2 className={style.inspectSymbol}>{symbol}</h2>
        <h3>{name}</h3>
      </div>
      <div className="lh-4">
        <ul className={style.info}>
          <li>{AT}</li>
          <li>{AM}</li>
          <li>{boilingPoint === 'NaN' ? UBP : BP}</li>
          <li>{density === 'NaN' ? UDE : DE}</li>
          <li>{meltingPoint === 'NaN' ? UMP : MP}</li>
          <li>{YD}</li>
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
