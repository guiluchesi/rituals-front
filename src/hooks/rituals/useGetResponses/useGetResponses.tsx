import { useState, useEffect } from "react";

import { useGetCompany } from "../../config/useGetCompany";

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
  answers: Answer[];
}

const getResponses = async (ritualId: string, company: string) => {
  const queryParams = new URLSearchParams({
    company,
  });

  return fetch(
    `http://localhost:8000/rituals/${ritualId}/responses?${queryParams}`
  ).then((res) => res.json());
};

export const useGetResponses = (ritualId: string) => {
  const company = useGetCompany();
  const [responses, setResponses] = useState<Response[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const updateResponses = () => {
    getResponses(ritualId, company)
      .then((responses) => setResponses(responses))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    setIsLoading(true);
    updateResponses();
  }, []);

  return {
    isLoading,
    responses,
    setResponses,
    updateResponses,
  };
};
