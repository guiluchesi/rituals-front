import { useQuery } from "react-query";

import fetch from "../../../service/api";

export interface Ritual {
  id: string;
  title: string;
  link: string;
}

const getRituals = async () => {
  const queryParams = new URLSearchParams({
    search: "retrospectiva",
  });

  return fetch(`/rituals?${queryParams}`);
};

const getRitual = async (ritualId: string) => {
  return fetch(`/rituals/${ritualId}`);
};

export const useRituals = () => {
  return useQuery<Ritual[], Error>("rituals", getRituals, {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 /* 1 minute */,
  });
};

export const useRitual = (ritualId: string) => {
  return useQuery<Ritual, Error>("ritual", () => getRitual(ritualId), {
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 /* 1 minute */,
  });
};
