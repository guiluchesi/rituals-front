import { useQuery } from "react-query";

import fetch from "../../../service/api";

export interface Ritual {
  id: string;
  title: string;
  link: string;
}

export const getRituals = async (company: string) => {
  const queryParams = new URLSearchParams({
    search: company === "bud" ? "retrospectiva" : "check",
  });

  return fetch(`/rituals?${queryParams}`);
};

const getRitual = async (ritualId: string) => {
  return fetch(`/rituals/${ritualId}`);
};

export const useRituals = (company: string) => {
  return useQuery<Ritual[], Error>("rituals", () => getRituals(company), {
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
