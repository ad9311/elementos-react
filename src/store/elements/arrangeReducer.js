const SHOW_MENU = 'periodic_table/SHOW_MENU';
const SORT_ELEMENTS = 'periodic_table/elements/SORT_ELEMENTS';
const GROUP_ELEMENTS = 'periodic_table/elements/GROUP_ELEMENTS';

const initialState = {
  menuOn: false,
  sortBy: 'atomicMass',
  methodName: 'Atomic Mass',
  groupBy: 'groupBlock',
};

export const showMenu = (payload = false) => (
  {
    type: SHOW_MENU,
    payload,
  }
);

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
    case SHOW_MENU:
      return {
        menuOn: action.payload,
        sortBy: state.sortBy,
        methodName: state.methodName,
        groupBy: state.groupBy,
      };
    case SORT_ELEMENTS:
      return {
        menuOn: false,
        sortBy: action.payload.sortBy,
        methodName: action.payload.methodName,
        groupBy: state.groupBy,
      };
    case GROUP_ELEMENTS:
      return {
        menuOn: false,
        sortBy: state.sortBy,
        methodName: state.methodName,
        groupBy: action.payload,
      };
    default:
      return state;
  }
};

export default arrangeReducer;
