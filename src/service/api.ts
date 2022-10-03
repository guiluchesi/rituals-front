import getConfig from "next/config";

const customFetch = async (url: string) => {
  const { publicRuntimeConfig } = getConfig();
  const baseUrl =
    publicRuntimeConfig.server ?? publicRuntimeConfig.applicationUrl + "/api";

  return fetch(`${baseUrl}${url}`).then((res) => res.json());
};

export default customFetch;
