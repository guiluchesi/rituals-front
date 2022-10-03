import type { NextApiRequest, NextApiResponse } from "next";

import {
  TypeformService,
  listAnswerSerializer,
} from "../../../../service/typeform";

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

  const responses = remoteResponses.items.map((response) => {
    const { fields } = formDetails;
    const [whatsYourNameQuestion, whatsYourEmailQuestion, ...otherQuestions] =
      fields ?? [];
    const fieldsToConsider = [whatsYourNameQuestion, ...otherQuestions];

    const whatsYourNameAnswer = response?.answers?.find(
      (answer) => answer?.field?.id === whatsYourNameQuestion.id
    );
    const ownerName = whatsYourNameAnswer?.text;

    const whatsYourEmailAnswer = response?.answers?.find(
      (answer) => answer?.field?.id === whatsYourEmailQuestion.id
    );
    const ownerEmail = whatsYourEmailAnswer ? whatsYourEmailAnswer.text : "";

    return {
      id: response.response_id,
      submitted: response.submitted_at,
      owner: ownerName,
      ownerEmail,
      answers: listAnswerSerializer(response.answers, fieldsToConsider),
    };
  });

  res.status(200).json(responses);
}
