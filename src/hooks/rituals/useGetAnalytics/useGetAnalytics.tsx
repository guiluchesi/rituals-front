import { useState, useEffect } from "react";

import { useGetCompany } from "../../config/useGetCompany";

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

  return fetch(
    `http://localhost:8000/rituals/${ritualId}/analytics?${queryParams}`
  ).then((res) => res.json());
};

export const useGetAnalytics = (ritualId: string) => {
  const company = useGetCompany();
  const [analytics, setAnalytics] = useState<Analityc[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const updateAnalytics = () => {
    getAnalytics(ritualId, company)
      .then((analytics) => setAnalytics(analytics))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    setIsLoading(true);
    updateAnalytics();
  }, []);

  return {
    isLoading,
    analytics,
    setAnalytics,
    updateAnalytics,
  };
};
