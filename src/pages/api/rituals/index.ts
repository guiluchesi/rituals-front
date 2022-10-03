import type { NextApiRequest, NextApiResponse } from "next";

import {
  TypeformService,
  listFormsSerializer,
} from "../../../service/typeform";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const typeform = new TypeformService();
  const search = _req.query?.search;
  const apiRituais = await typeform.listForms(
    Array.isArray(search) ? search[0] : search ?? ""
  );
  const characters = listFormsSerializer(apiRituais.items);

  res.status(200).json(characters);
}
