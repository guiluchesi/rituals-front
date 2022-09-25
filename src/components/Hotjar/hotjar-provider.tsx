import { hotjar } from "react-hotjar";

import { useGetConfig } from "../../hooks/config";

export const HotjarProvider = () => {
  const { env } = useGetConfig();

  if (env.MODE === "production")
    hotjar.initialize(env.VITE_HOTJAR_ID, env.VITE_HOTJAR_SV);

  return null;
};
