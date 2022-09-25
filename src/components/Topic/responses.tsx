import { Response } from "../../components/Response";
import { Response as ResponseType } from "../../hooks/rituals/useResponses";

export interface ResponsesProps {
  responses: ResponseType[];
}

export const Responses = ({ responses }: ResponsesProps) => {
  return (
    <>
      {responses?.map((response, index) => (
        <Response
          key={response.id}
          response={response}
          mt={index === 0 ? 0 : 8}
        />
      ))}
    </>
  );
};
