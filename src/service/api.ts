const customFetch = async (url: string) => {
  const baseUrl = import.meta.env.VITE_API_PATH;

  return fetch(`${baseUrl}${url}`).then((res) => res.json());
};

export default customFetch;
