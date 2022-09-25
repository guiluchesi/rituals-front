import getConfig from "next/config";

const customFetch = async (url: string) => {
  const { publicRuntimeConfig } = getConfig();
  const baseUrl = publicRuntimeConfig.server ?? "http://localhost:8000";

  return fetch(`${baseUrl}${url}`).then((res) => res.json());
};

export default customFetch;
