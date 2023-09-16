import React from 'react';
import {
  ElementsContext,
  UpdateElementsContext,
  ElementContext,
  UpdateElementContext,
} from '../../providers/element';

export function useElements() {
  return {
    elements: React.useContext(ElementsContext),
    updateElements: React.useContext(UpdateElementsContext),
  };
}

export function useElement() {
  return {
    element: React.useContext(ElementContext),
    updateElement: React.useContext(UpdateElementContext),
  };
}
