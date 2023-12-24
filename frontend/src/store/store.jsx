import { createContext, useReducer, useState } from "react";
import { ACTIONS } from "../utils/types";
import Reducer from "./Reducer";
import randomIdGenerator from "../utils/randomIdGenerator";

const initialState = {
  providers: [
    {
      id: 1,
      hostname: "192.168.1.7",
      port: "8080",
      foldername: "Instafeed",
      videos: [],
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const AddProvider = (formData) => {
    const id = randomIdGenerator();
    dispatch({
      type: ACTIONS.ADD_PROVIDER,
      payload: { id: id, ...formData, videos: [] },
    });
  };

  const EditProvider = (formData) => {
    dispatch({
      type: ACTIONS.EDIT_PROVIDER,
      payload: { ...formData, videos: [] },
    });
  };

  const DeleteProvider = (id) => {
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
