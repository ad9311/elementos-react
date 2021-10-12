import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchElements } from '../../store/elements/fetchReducer';
import Element from '../elements/Element';

const Home = () => {
  const dispatch = useDispatch();
  const { elements, status } = useSelector((state) => state.periodicTable);

  useEffect(() => {
    if (status === 'default') {
      dispatch(fetchElements());
    }
  }, [status]);

  const mapElements = elements.map(
    (element) => (
      <Element
        key={element.atomicNumber}
        atomicMass={element.atomicMass}
        atomicNumber={element.atomicNumber}
        name={element.name}
        symbol={element.symbol}
      />
    ),
  );

  return (
    <div className="grid-two-ng">
      {mapElements}
    </div>
  );
};

export default Home;
