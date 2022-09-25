import { useRouter } from "next/router";

export const useGetCompany = (): string => {
  const router = useRouter();
  const { company } = router.query;

  if (Array.isArray(company)) {
    return company[0];
  }

  return company ?? "";
};
