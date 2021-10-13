const INSPECT_ELEMENT = 'periodic_table/elements/INSPECT_ELEMENT';
const UPDATE_GROUP = 'periodic_table/elements/UPDATE_GROUP';

const initialState = {
  element: {},
  group: {
    list: [],
    name: undefined,
  },
};

export const inspectElement = (payload) => (
  {
    type: INSPECT_ELEMENT,
    payload,
  }
);

export const updateGroup = (payload) => (
  {
    type: UPDATE_GROUP,
    payload,
  }
);

const inspectReducer = (state = initialState, action) => {
  switch (action.type) {
    case INSPECT_ELEMENT:
      return {
        element: { ...action.payload.element },
        group: {
          list: [...action.payload.group.list],
          name: action.payload.group.name,
        },
      };
    case UPDATE_GROUP:
      return {
        element: state.element,
        group: {
          list: [...action.payload.list],
          name: action.payload.name,
        },
      };
    default:
      return state;
  }
};

export default inspectReducer;
