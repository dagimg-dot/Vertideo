import { ACTIONS } from "../utils/types";

const mergeVideos = (oldVideos, newVideos) => {
  const mergedVideos = [...oldVideos];
  newVideos.forEach((newVideo) => {
    const isDuplicate = oldVideos.some(
      (oldVideo) =>
        newVideo.src.split("/").pop() === oldVideo.src.split("/").pop()
    );
    if (!isDuplicate) {
      mergedVideos.push(newVideo);
    }
  });

  return mergedVideos;
};

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

      const videos = mergeVideos(state.videos, action.payload.videos);
      console.log(videos);

      return {
        ...state,
        providers: [...state.providers],
        videos: videos,
      };
  }
};

export default Reducer;
