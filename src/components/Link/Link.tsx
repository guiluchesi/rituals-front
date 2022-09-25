import NextLink from "next/link";

import { useGetCompany } from "../../hooks/config";

export const Link = ({
  href,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const company = useGetCompany();
  const companyTo = company ? `/${company}${href}` : `${href}`;

  return <NextLink href={companyTo} {...props}></NextLink>;
};
