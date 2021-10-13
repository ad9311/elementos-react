import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchElements } from '../../store/elements/loadReducer';
import { inspectElement } from '../../store/elements/inspectReducer';
import {
  getSelection,
  nameToLowerCase,
  searchElement,
  onInspection,
} from '../../utils/utils';
import Element from '../elements/Element';
import Navbar from './Navbar';
import GroupInfo from './GroupInfo';

const Header = () => {
  const dispatch = useDispatch();
  const path = useLocation().pathname;
  const { elements, status } = useSelector((state) => state.periodicTable);
  const { element, group } = useSelector((state) => state.inspect.selection);

  useEffect(() => {
    if (path.includes('/details/', '')) {
      const name = nameToLowerCase(element.name);
      const currentElement = path.replace('/details/', '');
      const noMatch = name !== currentElement;

      if (status === 'default') {
        dispatch(fetchElements());
      }

      if (noMatch) {
        const foundElement = searchElement(currentElement, elements);
        const selection = getSelection(foundElement, elements);
        dispatch(inspectElement(selection));
      }
    }
  }, [status, path]);

  const elementExists = () => {
    if (onInspection(path) && element.name === undefined) {
      return (
        <h1>Element does not exist!</h1>
      );
    }

    if (onInspection(path) && element.name !== undefined) {
      return (
        <div>
          <Element
            atomicMass={element.atomicMass}
            atomicNumber={element.atomicNumber}
            name={element.name}
            symbol={element.symbol}
            noLink
          />
          <GroupInfo groupName={group.name} />
        </div>
      );
    }

    return (
      <div>
        <h1>Periodic Table</h1>
        <GroupInfo />
      </div>
    );
  };

  return (
    <header className="pos-sticky top-0">
      <Navbar />
      {elementExists()}
    </header>
  );
};

export default Header;
