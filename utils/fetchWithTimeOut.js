import fetch from "node-fetch";

const fetchWithTimeout = async (url, timeOut) => {
  const fetchPromise = fetch(url);
  const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("request timed out."));
    }, timeOut);
  });

  try {
    const response = await Promise.race([fetchPromise, timeoutPromise]);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default fetchWithTimeout;
