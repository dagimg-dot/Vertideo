const mergeVideos = (providers) => {
  const mergedVideos = [];
  providers.forEach((provider) => {
    if (provider.videos.length > 0) {
      provider.videos.forEach((video) => {
        const isDuplicate = mergedVideos.some(
          (mVideo) => mVideo.src.split("/").pop() === video.src.split("/").pop()
        );

        if (isDuplicate === false) {
          mergedVideos.push(video);
        }
      });
    }
  });

  return mergedVideos;
};

export default mergeVideos;
