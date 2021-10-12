import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchElements } from '../../store/elements/fetchReducer';

const Home = () => {
  const dispatch = useDispatch();
  const elements = useSelector((state) => state.periodicTable.elementsList);
  const status = useSelector((state) => state.periodicTable.status);

  useEffect(() => {
    if (status === 'default') {
      dispatch(fetchElements());
    }
  }, [status]);

  const mapElements = elements.map(
    (element) => (
      <h2 key={element.name}>{element.name}</h2>
    ),
  );

  return (
    <div>
      {mapElements}
    </div>
  );
};

export default Home;
