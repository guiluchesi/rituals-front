import { useQuery } from "react-query";

import fetch from "../../../service/api";
import { useGetCompany } from "../../config/useGetCompany";
import { useGetCyleData } from "../../config/useGetCyleData";

export interface AnswerProperties {
  description?: string;
  choices?: {
    ref?: string;
    label?: string;
  };
  fields?: any[][];
  allow_multiple_selection?: boolean;
  randomize?: boolean;
  allow_other_choice?: boolean;
  vertical_alignment?: boolean;
  supersized?: boolean;
  show_labels?: boolean;
  alphabetical_order?: boolean;
  hide_marks?: boolean;
  button_text?: string;
  steps?: 5 | 6 | 7 | 8 | 9 | 10 | 11;
  shape?:
    | "cat"
    | "circle"
    | "cloud"
    | "crown"
    | "dog"
    | "droplet"
    | "flag"
    | "heart"
    | "lightbulb"
    | "pencil"
    | "skull"
    | "star"
    | "thunderbolt"
    | "tick"
    | "trophy"
    | "up"
    | "user";
  labels?: {
    left?: string;
    right?: string;
    center?: string;
  };
  start_at_one?: boolean;
  structure?: "MMDDYYYY" | "DDMMYYYY" | "YYYYMMDD";
  separator?: "/" | "-" | ".";
  currency?:
    | "AUD"
    | "BRL"
    | "CAD"
    | "CHF"
    | "DKK"
    | "EUR"
    | "GBP"
    | "MXN"
    | "NOK"
    | "SEK"
    | "USD";
}

export interface Answer {
  fieldId: string;
  fieldType: string;
  question: string;
  properties: any;
  type: "number" | "text" | "boolean";
  number?: number;
  text?: string;
  boolean?: boolean;
}

export interface Response {
  id: string;
  submitted: string;
  owner: string;
  ownerEmail?: string;
  answers: Answer[];
}

const getResponses = async (
  ritualId: string,
  query: {
    company: string;
    since: string;
  }
) => {
  const queryParams = new URLSearchParams(query);
  return fetch(`/rituals/${ritualId}/responses?${queryParams}`);
};

export const useResponses = (ritualId: string) => {
  const company = useGetCompany();
  const since = useGetCyleData({
    cadence: "weekly",
    format: "YYYY-MM-DDThh:mm:ss",
  });

  return useQuery<Response[], Error>(
    "responses",
    () => getResponses(ritualId, { company, since: since ?? "" }),
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 /* 1 minute */,
    }
  );
};
