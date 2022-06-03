import { useState, useEffect } from "react";

export interface Ritual {
  id: string;
  title: string;
  link: string;
}

const getRituals = async () => {
  const queryParams = new URLSearchParams({
    search: "check",
  });

  return fetch(`http://localhost:8000/rituals?${queryParams}`).then((res) =>
    res.json()
  );
};

export const useGetRituals = () => {
  const [rituals, setRituals] = useState<Ritual[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const updateRituals = () => {
    getRituals()
      .then((responses) => setRituals(responses))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    setIsLoading(true);
    updateRituals();
  }, []);

  return {
    isLoading,
    rituals,
    setRituals,
    updateRituals,
  };
};
