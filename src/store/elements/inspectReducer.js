const INSPECT_ELEMENT = 'periodic_table/elements/INSPECT_ELEMENT';

const initialState = {
  inspection: {
    selectedElement: {},
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
        inspection: {
          selectedElement: { ...action.payload },
        },
      };
    default:
      return state;
  }
};

export default inspectReducer;
