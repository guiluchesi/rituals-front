import type { NextApiRequest, NextApiResponse } from "next";

import { ResponseAnswer, TypeformService } from "../../../../service/typeform";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    ritualId: ritualIdQuery,
    company: companyQuery,
    since: sinceQuery,
  } = _req.query;

  const ritualId = Array.isArray(ritualIdQuery)
    ? ritualIdQuery[0]
    : ritualIdQuery ?? "";
  const company = Array.isArray(companyQuery)
    ? companyQuery[0]
    : companyQuery ?? "";
  const since = Array.isArray(sinceQuery) ? sinceQuery[0] : sinceQuery ?? "";

  if (!company) {
    return [];
  }

  const typeform = new TypeformService();
  const remoteResponsesPromise = typeform.listResponses(ritualId, company, {
    since,
  });
  const formDetailsPromise = typeform.getFormDetails(ritualId);

  const [remoteResponses, formDetails] = await Promise.all([
    remoteResponsesPromise,
    formDetailsPromise,
  ]);

  const responsesByFields = formDetails?.fields?.map((field) => {
    const answers = remoteResponses.items
      .reduce<ResponseAnswer[]>((allResponses, response) => {
        const answer = response.answers?.find((answer) => {
          return answer.field?.id === field.id;
        });
        return answer ? [...allResponses, answer] : allResponses;
      }, [])
      .map((answer) => (answer.type ? answer[answer.type] : []));

    return {
      id: field.id,
      title: field.title,
      type: field.type,
      range: field?.properties?.steps,
      answers,
    };
  });

  res.status(200).json(responsesByFields);
}
