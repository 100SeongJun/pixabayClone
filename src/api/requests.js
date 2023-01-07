const request = async (url, keys, input, per_page) => {
  if (input !== undefined) {
    input = `&q=${input}`;
  }
  try {
    const response = await fetch(`${url}${keys}${input}${per_page}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default request;
