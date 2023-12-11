import { ACTIONS } from "../utils/types";

const Reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_PROVIDER:
      return {
        ...state,
        providers: [...state.providers, action.payload],
      };
  }
};

export default Reducer;
