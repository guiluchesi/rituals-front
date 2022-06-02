import { Link as ReactLink, LinkProps, useParams } from "react-router-dom";

export const Link = ({
  to,
  ...props
}: LinkProps & React.RefAttributes<HTMLAnchorElement>) => {
  const { company } = useParams();
  const companyTo = company ? `/${company}/${to}` : `/${to}`;

  return <ReactLink to={companyTo} {...props}></ReactLink>;
};
