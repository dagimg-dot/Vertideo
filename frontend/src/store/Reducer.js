import { ACTIONS } from "../utils/types";

const Reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_PROVIDER:
      return {
        ...state,
        providers: [...state.providers, action.payload],
      };

    case ACTIONS.EDIT_PROVIDER:
      const editedProvider = state.providers.find(
        (provider) => provider.id === action.payload.id
      );

      state.providers[state.providers.indexOf(editedProvider)] = action.payload;

      return {
        ...state,
        providers: [...state.providers],
      };
  }
};

export default Reducer;
