import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchElements } from '../../store/elements/fetchReducer';
import { inspectElement } from '../../store/elements/inspectReducer';
import { getSelection, nameToLowerCase, searchElement } from '../../utils/utils';
import Element from '../elements/Element';
import Navbar from './Navbar';

const Header = () => {
  const dispatch = useDispatch();
  const path = useLocation().pathname;
  const { elements, status } = useSelector((state) => state.periodicTable);
  const { element, group } = useSelector((state) => state.inspect.selection);

  useEffect(() => {
    if (path.includes('/details/', '')) {
      const name = nameToLowerCase(element.name);
      const currentElement = path.replace('/details/', '');
      const match = name !== currentElement;

      if (status === 'default') {
        dispatch(fetchElements());
      }

      if (match) {
        const foundElement = searchElement(currentElement, elements);
        const selection = getSelection(foundElement, elements);
        dispatch(inspectElement(selection));
      }
    }
  }, [status, path]);

  const isInspecting = () => {
    if (path.includes('/details/')) {
      return true;
    }
    return false;
  };

  return (
    <header className="pos-sticky top-0">
      <Navbar />
      {isInspecting()
        ? (
          <Element
            atomicMass={element.atomicMass}
            atomicNumber={element.atomicNumber}
            name={element.name}
            symbol={element.symbol}
          />
        )
        : <h1>Periodic Table</h1>}
      {isInspecting()
        ? <div><p>{`Other ${group.name} elements`}</p></div>
        : <div><p>Elements By Atomic Mass</p></div>}
    </header>
  );
};

export default Header;
