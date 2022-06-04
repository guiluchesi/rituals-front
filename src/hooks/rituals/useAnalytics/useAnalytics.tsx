import { useQuery } from "react-query";

import { useGetCompany } from "../../config/useGetCompany";
import fetch from "../../../service/api";

export interface Analityc {
  id: string;
  title: string;
  type: string;
  range?: number;
  answers: string[] | number[] | boolean[];
}

const getAnalytics = async (ritualId: string, company: string) => {
  const queryParams = new URLSearchParams({
    company,
  });

  return fetch(`/rituals/${ritualId}/analytics?${queryParams}`);
};

export const useAnalytics = (ritualId: string) => {
  const company = useGetCompany();

  return useQuery<Analityc[], Error>(
    "analytics",
    () => getAnalytics(ritualId, company),
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 /* 1 minute */,
    }
  );
};
