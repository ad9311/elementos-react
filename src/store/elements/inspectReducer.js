const INSPECT_ELEMENT = 'periodic_table/elements/INSPECT_ELEMENT';

const initialState = {
  selection: {
    element: {},
    group: {
      list: [],
      name: undefined,
    },
  },
};

export const inspectElement = (payload) => (
  {
    type: INSPECT_ELEMENT,
    payload,
  }
);

const inspectReducer = (state = initialState, action) => {
  switch (action.type) {
    case INSPECT_ELEMENT:
      return {
        selection: {
          element: { ...action.payload.element },
          group: {
            list: [...action.payload.group.list],
            name: action.payload.group.name,
          },
        },
      };
    default:
      return state;
  }
};

export default inspectReducer;
