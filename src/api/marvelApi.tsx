import axios from "axios";
import md5 from "md5";

const API_BASE_URL = "https://gateway.marvel.com/v1/public";
const API_PUBLIC_KEY = "c4dec6cd659443a6f7b7d44c06dd7458";
const API_PRIVATE_KEY = "af64201ab4b91f6da86a94cf7ba4eb4a83b1c110";

const getAuthorizationParams = () => {
  const timestamp = new Date().getTime();
  const hash = md5(timestamp + API_PRIVATE_KEY + API_PUBLIC_KEY!);
  console.log(`ts=${timestamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`);
  return `ts=${timestamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`;
};

export const getData = async () => {
  const response = await axios.get(
    `${API_BASE_URL}/characters?${getAuthorizationParams()}`
  );
  return response.data;
};

export const getCharacters = async () => {
  const response = await axios.get(
    `${API_BASE_URL}/characters?${getAuthorizationParams()}`
  );
  return response.data.data.results;
};

export const getCharacter = async (id: string | undefined) => {
  const response = await axios.get(
    `${API_BASE_URL}/characters/${id}?${getAuthorizationParams()}`
  );
  return response.data.data.results;
};

export const getComics = async () => {
  const response = await axios.get(
    `${API_BASE_URL}/comics?${getAuthorizationParams()}`
  );
  return response.data.data.results;
}


export const getSeries = async () => {
  const response = await axios.get(
    `${API_BASE_URL}/series?${getAuthorizationParams()}`
  );
  return response.data.data.results;
}
