import { createContext, useReducer } from "react";
import { ACTIONS } from "../utils/types";
import Reducer from "./Reducer";
import randomIdGenerator from "../utils/randomIdGenerator";

const initialState = {
  providers: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const AddProvider = (formData) => {
    const id = randomIdGenerator();
    dispatch({
      type: ACTIONS.ADD_PROVIDER,
      payload: { id: id, ...formData },
    });
  };

  const EditProvider = (formData) => {
    dispatch({ type: ACTIONS.EDIT_PROVIDER, payload: formData });
  };

  return (
    <GlobalContext.Provider
      value={{
        providers: state.providers,
        AddProvider,
        EditProvider,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
