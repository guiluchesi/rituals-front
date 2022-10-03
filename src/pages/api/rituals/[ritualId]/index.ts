import type { NextApiRequest, NextApiResponse } from "next";

import {
  TypeformService,
  listFormSerializer,
} from "../../../../service/typeform";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const typeform = new TypeformService();
  const ritualId = _req.query.ritualId;
  const formDetail = await typeform.getFormDetails(
    Array.isArray(ritualId) ? ritualId[0] : ritualId ?? ""
  );
  const parsedDetail = listFormSerializer(formDetail);

  res.status(200).json(parsedDetail);
}
