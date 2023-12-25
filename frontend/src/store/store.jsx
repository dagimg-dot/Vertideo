import { createContext, useReducer } from "react";
import { ACTIONS } from "../utils/types";
import Reducer from "./Reducer";
import randomIdGenerator from "../utils/randomIdGenerator";
import useLocalStorage from "../hooks/useLocalStorage";

const initialState = {
  providers: JSON.parse(localStorage.getItem("Providers")) || [],
};

export const GlobalContext = createContext({
  providers: initialState.providers,
  AddProvider: () => {},
  EditProvider: () => {},
  DeleteProvider: () => {},
  SaveVideos: () => {},
});

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const [providers, setProviders] = useLocalStorage(
    "Providers",
    state.providers
  );

  const AddProvider = (formData) => {
    const id = randomIdGenerator();

    const newProvider = { id, ...formData, videos: [] };
    setProviders([...providers, newProvider]);

    dispatch({
      type: ACTIONS.ADD_PROVIDER,
      payload: newProvider,
    });
  };

  const EditProvider = (formData) => {
    const editedProvider = state.providers.find(
      (provider) => provider.id === formData.id
    );

    const updatedProviders = [...state.providers];
    updatedProviders[state.providers.indexOf(editedProvider)] = formData;

    setProviders(updatedProviders);

    dispatch({
      type: ACTIONS.EDIT_PROVIDER,
      payload: formData,
    });
  };

  const DeleteProvider = (id) => {
    const filteredProviders = state.providers.filter(
      (provider) => provider.id !== id
    );
    setProviders(filteredProviders);

    dispatch({ type: ACTIONS.DELETE_PROVIDER, payload: id });
  };

  const SaveVideos = ({ id, videos }) => {
    dispatch({ type: ACTIONS.SAVE_VIDEOS, payload: { id, videos } });
  };

  return (
    <GlobalContext.Provider
      value={{
        providers: state.providers,
        AddProvider,
        EditProvider,
        DeleteProvider,
        SaveVideos,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
