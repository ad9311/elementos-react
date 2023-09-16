import React, { useState } from 'react';
import Element from '../../types/element';

export const ElementsContext = React.createContext<Element[]>([]);
export const UpdateElementsContext = React.createContext((elements: Element[]) => {
  elements;
});

export const ElementContext = React.createContext<Element | undefined>(undefined);
export const UpdateElementContext = React.createContext((element: Element) => {
  element;
});

function ElementProvider({ children }: { children: React.ReactNode }) {
  const [elements, setElements] = useState<Element[]>([]);
  const [element, setElement] = useState<Element>();

  function handleElements(elements: Element[]) {
    setElements(elements);
  }

  function handleElement(element: Element | undefined) {
    setElement(element);
  }

  return (
    <ElementsContext.Provider value={elements}>
      <UpdateElementsContext.Provider value={handleElements}>
        <ElementContext.Provider value={element}>
          <UpdateElementContext.Provider value={handleElement}>
            {children}
          </UpdateElementContext.Provider>
        </ElementContext.Provider>
      </UpdateElementsContext.Provider>
    </ElementsContext.Provider>
  );
}

export default ElementProvider;
