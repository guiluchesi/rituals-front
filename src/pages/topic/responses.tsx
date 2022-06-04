import { Response } from "../../components/Response";
import { ResponseSkeleton } from "../../components/Response/ResponseSkeleton";
import { useResponses } from "../../hooks/rituals/useResponses";

export interface ResponsesProps {
  ritualId: string;
}

export const Responses = ({ ritualId }: ResponsesProps) => {
  const { data: responses, isFetching } = useResponses(ritualId);

  return (
    <>
      {isFetching ? (
        <>
          <ResponseSkeleton />
          <ResponseSkeleton />
          <ResponseSkeleton />
        </>
      ) : (
        responses?.map((response, index) => (
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
