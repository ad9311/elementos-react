const SHOW_MENU = 'periodic_table/SHOW_MENU';
const SORT_DESC = 'periodic_table/elements/SORT_DESC';
const SORT_ELEMENTS = 'periodic_table/elements/SORT_ELEMENTS';
const GROUP_ELEMENTS = 'periodic_table/elements/GROUP_ELEMENTS';

const initialState = {
  menuOn: false,
  orderDescOn: false,
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

export const sortDesc = (payload = false) => (
  {
    type: SORT_DESC,
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
        orderDescOn: state.orderDescOn,
        sortBy: state.sortBy,
        methodName: state.methodName,
        groupBy: state.groupBy,
      };
    case SORT_DESC:
      return {
        menuOn: state.menuOn,
        orderDescOn: action.payload,
        sortBy: state.sortBy,
        methodName: state.methodName,
        groupBy: state.groupBy,
      };
    case SORT_ELEMENTS:
      return {
        menuOn: false,
        orderDescOn: state.orderDescOn,
        sortBy: action.payload.sortBy,
        methodName: action.payload.methodName,
        groupBy: state.groupBy,
      };
    case GROUP_ELEMENTS:
      return {
        menuOn: false,
        orderDescOn: state.orderDescOn,
        sortBy: state.sortBy,
        methodName: state.methodName,
        groupBy: action.payload,
      };
    default:
      return state;
  }
};

export default arrangeReducer;
