import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchElements } from '../../store/elements/loadReducer';
import Element from '../elements/Element';

const Home = () => {
  const dispatch = useDispatch();
  const { elements, status } = useSelector((state) => state.periodicTable);

  useEffect(() => {
    if (status === 'default') {
      dispatch(fetchElements());
    }
  }, [status]);

  const alternateColor = (index) => {
    if (index === 0) {
      return false;
    }
    if (index % 4 === 0) {
      return false;
    }
    if ((index + 1) % 4 === 0) {
      return false;
    }
    return true;
  };

  const mapElements = elements.map(
    (element, index) => (
      <li key={element.atomicNumber}>
        <Element
          atomicMass={element.atomicMass}
          atomicNumber={element.atomicNumber}
          name={element.name}
          symbol={element.symbol}
          altColor={alternateColor(index)}
        />
      </li>
    ),
  );

  return (
    <div>
      <ul className="grid-two-ng">
        {mapElements}
      </ul>
    </div>
  );
};

export default Home;
