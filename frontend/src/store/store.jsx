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

  return (
    <GlobalContext.Provider
      value={{
        providers: state.providers,
        AddProvider,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
