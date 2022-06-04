import { useQuery } from "react-query";

import fetch from "../../../service/api";

export interface Ritual {
  id: string;
  title: string;
  link: string;
}

const getRituals = async () => {
  const queryParams = new URLSearchParams({
    search: "check",
  });

  return fetch(`/rituals?${queryParams}`);
};

export const useRituals = () => {
  return useQuery<Ritual[], Error>("rituals", getRituals, {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 /* 1 minute */,
  });
};
