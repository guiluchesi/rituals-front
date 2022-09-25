import { useQuery } from "react-query";

import { useGetCompany } from "../../config/useGetCompany";
import fetch from "../../../service/api";
import { getCyleDate } from "../../config/useGetCyleData";

export interface Analityc {
  id: string;
  title: string;
  type: string;
  range?: number;
  answers: string[] | number[] | boolean[];
}

const getAnalytics = async (
  ritualId: string,
  query: { company: string; since: string }
) => {
  const queryParams = new URLSearchParams(query);
  return fetch(`/rituals/${ritualId}/analytics?${queryParams}`);
};

export const useAnalytics = (ritualId: string) => {
  const company = useGetCompany();
  const since = getCyleDate({
    cadence: "weekly",
    format: "YYYY-MM-DDThh:mm:ss",
  });

  return useQuery<Analityc[], Error>(
    "analytics",
    () =>
      getAnalytics(ritualId, {
        company,
        since: since ?? "",
      }),
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 /* 1 minute */,
    }
  );
};
