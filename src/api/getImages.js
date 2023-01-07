import request from "./requests";
import url from "./getdata";
const per_page = "&per_page=";
const getImages = async (input) => {
  const data = await request(url.url, `?key=${url.key}`, input, per_page);
  return data;
};

export default getImages;
