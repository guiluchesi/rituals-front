import { useParams } from "react-router-dom";

export const useGetCompany = (): string => {
  const { company } = useParams();
  return company ?? "";
};
