import { createContext, useReducer } from "react";
import { ACTIONS } from "../utils/types";
import Reducer from "./Reducer";
import randomIdGenerator from "../utils/randomIdGenerator";
import useLocalStorage from "../hooks/useLocalStorage";

const initialState = {
  providers: JSON.parse(localStorage.getItem("Providers")) || [],
  likedVideos: JSON.parse(localStorage.getItem("likedVideos")) || [],
};

export const GlobalContext = createContext({
  providers: initialState.providers,
  likedVideos: initialState.likedVideos,
  AddProvider: () => {},
  EditProvider: () => {},
  DeleteProvider: () => {},
  SaveVideos: () => {},
  likeVideo: () => {},
});

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const [providers, setProviders] = useLocalStorage(
    "Providers",
    state.providers
  );

  const [likedVideos, setLikedVideos] = useLocalStorage(
    "likedVideos",
    state.likedVideos
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

  const likeVideo = (src) => {
    if (!state.likedVideos.includes(src)) {
      setLikedVideos([...likedVideos, src]);
    } else {
      const doubleLiked = state.likedVideos.filter(
        (video_src) => video_src !== src
      );
      setLikedVideos(doubleLiked);
    }

    dispatch({ type: ACTIONS.LIKE_VIDEO, payload: { src } });
  };

  return (
    <GlobalContext.Provider
      value={{
        providers: state.providers,
        likedVideos: state.likedVideos,
        AddProvider,
        EditProvider,
        DeleteProvider,
        SaveVideos,
        likeVideo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
