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

    case ACTIONS.DELETE_PROVIDER:
      return {
        ...state,
        providers: state.providers.filter(
          (provider) => provider.id !== action.payload
        ),
      };

    case ACTIONS.SAVE_VIDEOS:
      const choosenProvider = state.providers.find(
        (provider) => provider.id === action.payload.id
      );

      state.providers[state.providers.indexOf(choosenProvider)].videos = [
        ...action.payload.videos,
      ];

      return {
        ...state,
        providers: [...state.providers],
      };
  }
};

export default Reducer;
