import { createClient, Typeform } from "@typeform/api-client";
import { Forms } from "@typeform/api-client/dist/forms";
import { Images } from "@typeform/api-client/dist/images";
import { Responses } from "@typeform/api-client/dist/responses";
import { Themes } from "@typeform/api-client/dist/themes";
import { Webhooks } from "@typeform/api-client/dist/webhooks";
import { Workspaces } from "@typeform/api-client/dist/workspaces";
import getConfig from "next/config";

export interface Form {
  id?: FormItem["id"];
  title?: FormItem["title"];
  link?: string;
}

export interface FormItem {
  id: string;
  type: string;
  title: string;
  last_updated_at: string;
  created_at: string;
  settings: {
    is_public: boolean;
    is_trial: boolean;
  };
  self: {
    href: string;
  };
  theme: {
    href: string;
  };
  _links: {
    display: string;
  };
}

export interface ResponseAnswer {
  field?: {
    id?: string;
    type?: string;
    ref?: string;
    title?: string;
  };
  type?:
    | "choice"
    | "choices"
    | "date"
    | "email"
    | "url"
    | "file_url"
    | "number"
    | "boolean"
    | "text"
    | "payment";
  choice?: {
    label?: string;
    other?: string;
  };
  choices?: {
    labels?: string[];
    other?: string;
  };
  date?: string;
  email?: string;
  file_url?: string;
  number?: number;
  boolean?: boolean;
  text?: string;
  url?: string;
  payment?: {
    amount?: string;
    last4?: string;
    name?: string;
  };
}

export interface Answer {
  fieldId?: string;
  fieldType?: string;
  question?: string;
  properties?: Typeform.Field["properties"];
  type?:
    | "choice"
    | "choices"
    | "date"
    | "email"
    | "url"
    | "file_url"
    | "number"
    | "boolean"
    | "text"
    | "payment";
  number?: number;
  text?: string;
  boolean?: boolean;
}

export class TypeformService {
  typeform: {
    forms: Forms;
    images: Images;
    themes: Themes;
    workspaces: Workspaces;
    responses: Responses;
    webhooks: Webhooks;
  };

  constructor() {
    const config = getConfig();

    const client = createClient({
      token: config.serverRuntimeConfig.typeformApiKey,
    });

    this.typeform = client;
  }

  async listForms(search: string): Promise<Typeform.API.Forms.List> {
    const response = await this.typeform.forms.list({
      search,
    });

    return response;
  }

  async getFormDetails(formId: string): Promise<Typeform.Form> {
    const response = await this.typeform.forms.get({
      uid: formId,
    });

    return response;
  }

  async listResponses(
    formId: string,
    company?: string,
    query?: { [key: string]: string }
  ): Promise<Typeform.API.Responses.List> {
    const response: Typeform.API.Responses.List =
      await this.typeform.responses.list({
        uid: formId,
        query: company,
        ...query,
      });

    if (company) {
      const filteredResponses = response.items.filter(
        (response) => response?.hidden?.utm_source === company
      );

      return {
        ...response,
        items: filteredResponses,
      };
    }

    return response;
  }
}

export const listFormsSerializer = (
  forms: Typeform.API.Forms.List["items"]
): Form[] => forms.map(listFormSerializer);

export const listFormSerializer = (form: Typeform.Form): Form => ({
  id: form.id,
  title: form.title,
  link: form?._links?.display,
});

export const listAnswerSerializer = (
  answers: Typeform.Response["answers"],
  fields: Typeform.Field[]
): Answer[] => {
  return fields.map((field): Answer => {
    const answerField = answers?.find(
      (answer) => answer?.field?.id === field.id
    );

    return {
      fieldId: field.id,
      fieldType: field.type,
      question: field.title,
      properties: field.properties,
      type: answerField?.type,
      number: answerField?.number,
      text: answerField?.text,
      boolean: answerField?.boolean,
    };
  });
};
