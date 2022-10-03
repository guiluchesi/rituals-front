import getConfig from "next/config";
import * as nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

import { checkinReply } from "./templates/checkin-reply";

interface MailDataReplacer {
  from: string;
  to: string;
}

export class MailService {
  transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo>;
  templates: Map<string, string>;

  constructor() {
    this.transporter = this.createTransporter();
    this.templates = new Map([["checkin-reply", checkinReply]]);
  }

  createTransporter() {
    const { serverRuntimeConfig } = getConfig();

    return nodemailer.createTransport({
      host: serverRuntimeConfig.smtp.host,
      port: 587,
      secure: false,
      auth: {
        user: serverRuntimeConfig.smtp.user,
        pass: serverRuntimeConfig.smtp.password,
      },
    });
  }

  mountTemplate(
    templateName: nodemailer.SendMailOptions["html"],
    templateData: MailDataReplacer[]
  ): string {
    let template =
      this.templates.get(templateName ? templateName.toString() : "") ?? "";

    templateData.forEach(({ from, to }) => {
      template = template.replace(from, to);
    });

    return template;
  }

  async sendMail(
    mailConfig: nodemailer.SendMailOptions,
    data: MailDataReplacer[]
  ): Promise<any> {
    const template = this.mountTemplate(mailConfig.html, data);
    Object.assign(mailConfig, { html: template });

    const mailResponse = await this.transporter.sendMail(mailConfig);
    return mailResponse;
  }
}
