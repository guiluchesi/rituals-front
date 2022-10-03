import type { NextApiRequest, NextApiResponse } from "next";

import { approveComment, CusdisWebhook } from "../../../service/cusdis";
import { MailService } from "../../../service/mail/maill";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const hook = _req.body as CusdisWebhook;

  if (hook.type === "new_comment") {
    const splittedEmail = hook.data.by_email.split("|");
    const appUrl = splittedEmail.length === 2 ? splittedEmail[0] : "#";
    const userEmail =
      splittedEmail.length === 2 ? splittedEmail[1] : splittedEmail[0];

    const emailConfig = {
      from: "Try Rituals <guilherme.luchesi@getbud.co>",
      to: userEmail,
      subject: "Você tem um novo comentário no seu check-in!",
      text: `Você tem um novo comentário no seu check-in. ${hook.data.by_nickname}: ${hook.data.content}`,
      html: "checkin-reply",
    };

    const dataReplacement = [
      {
        from: "{{date}}",
        to: new Intl.DateTimeFormat("pt-BR", {
          timeStyle: "short",
          dateStyle: "medium",
        }).format(new Date()),
      },
      { from: "{{user}}", to: hook.data.by_nickname },
      { from: "{{message}}", to: hook.data.content },
      { from: "{{appUrl}}", to: appUrl },
    ];

    const commentApproved = await approveComment(hook.data);
    const mailler = new MailService();
    await mailler.sendMail(emailConfig, dataReplacement);

    res.status(200).json({ commentApproved });
    return;
  }

  res.status(500).send("Hook type not supported");
}
