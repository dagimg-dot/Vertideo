import { createContext, useReducer } from "react";
import { ACTIONS } from "../utils/types";
import Reducer from "./Reducer";

const initialState = {
  providers: [],
};

const generateRandomID = () => {
  return Math.floor(Math.random() * 1000000);
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const AddProvider = (formData) => {
    dispatch({
      type: ACTIONS.ADD_PROVIDER,
      payload: { id: generateRandomID(), ...formData },
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
