const customFetch = async (url: string) => {
  const baseUrl = "http://localhost:8000";

  return fetch(`${baseUrl}${url}`).then((res) => res.json());
};

export default customFetch;
