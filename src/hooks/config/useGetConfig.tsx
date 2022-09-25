import getConfig from "next/config";

export const useGetConfig = () => {
  const { publicRuntimeConfig } = getConfig();

  return {
    env: publicRuntimeConfig.env,
  };
};
