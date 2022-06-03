import { Response } from "../../components/Response";
import { ResponseSkeleton } from "../../components/Response/ResponseSkeleton";
import { useGetResponses } from "../../hooks/rituals/useGetResponses";

export interface ResponsesProps {
  ritualId: string;
}

export const Responses = ({ ritualId }: ResponsesProps) => {
  const { responses, isLoading } = useGetResponses(ritualId);

  return (
    <>
      {isLoading ? (
        <>
          <ResponseSkeleton />
          <ResponseSkeleton />
          <ResponseSkeleton />
        </>
      ) : (
        responses.map((response, index) => (
          <Response
            key={response.id}
            response={response}
            mt={index === 0 ? 0 : 8}
          />
        ))
      )}
    </>
  );
};
