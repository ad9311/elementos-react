const SORT_ELEMENTS = 'periodic_table/elements/SORT_ELEMENTS';
const GROUP_ELEMENTS = 'periodic_table/elements/GROUP_ELEMENTS';

const initialState = {
  sortBy: 'atomicMass',
  grouBy: 'groupBlock',
};

export const sortElements = (payload) => (
  {
    type: SORT_ELEMENTS,
    payload,
  }
);

export const groupElements = (payload) => (
  {
    type: GROUP_ELEMENTS,
    payload,
  }
);

const arrangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_ELEMENTS:
      return {
        sortBy: action.payload,
        grouBy: state.grouBy,
      };
    case GROUP_ELEMENTS:
      return {
        sortBy: state.sortBy,
        grouBy: action.payload,
      };
    default:
      return state;
  }
};

export default arrangeReducer;
