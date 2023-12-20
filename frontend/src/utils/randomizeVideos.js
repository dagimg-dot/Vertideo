const randomizeVideos = (Videos) => {
  const randomizedVideos = [...Videos];
  const getRand = () => Math.floor(Math.random() * randomizedVideos.length);

  for (let i = 0; i < randomizedVideos.length; i++) {
    let rand = getRand();
    i;
    let rand2 = getRand();
    let temp = randomizedVideos[rand];
    randomizedVideos[rand] = randomizedVideos[rand2];
    randomizedVideos[rand2] = temp;
  }

  return randomizedVideos;
};

export default randomizeVideos;
