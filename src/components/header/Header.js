import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchElements } from '../../store/elements/loadReducer';
import { inspectElement } from '../../store/elements/inspectReducer';
import { nameToLowerCase, searchElement, onInspection } from '../../utils/utils';
import groupByCategory from '../../utils/groupByCategory';
import InspectedElement from '../elements/InspectedElement';
import Navbar from './Navbar';
import GroupInfo from './GroupInfo';
import Atom from '../../img/atom.svg';
import style from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const path = useLocation().pathname;
  const { elements, status } = useSelector((state) => state.periodicTable);
  const { element, group } = useSelector((state) => state.inspect);
  const { groupBy } = useSelector((state) => state.arrange);

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
        const selection = groupByCategory(groupBy, foundElement, elements);
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
          <InspectedElement
            atomicMass={element.atomicMass}
            atomicNumber={element.atomicNumber}
            boilingPoint={element.boilingPoint}
            density={element.density}
            meltingPoint={element.meltingPoint}
            name={element.name}
            yearDiscovered={element.yearDiscovered}
            symbol={element.symbol}
          />
          <GroupInfo groupName={group.name} />
        </div>
      );
    }

    return (
      <div className="con-1">
        <div className="grid-two">
          <div><img src={Atom} alt="atom" className="img-fluid" /></div>
          <div className="d-flex flex-column align-center">
            <h1 className="fs-2">Periodic Table</h1>
            <p className="fw-4"><small>118 Elements</small></p>
          </div>
        </div>
        <GroupInfo />
      </div>
    );
  };

  return (
    <header className={`pos-sticky top-0 ${style.center}`}>
      <Navbar />
      {elementExists()}
    </header>
  );
};

export default Header;
