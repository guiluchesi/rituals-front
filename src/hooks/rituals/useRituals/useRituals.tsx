import fetch from "../../../service/api";

export interface Ritual {
  id: string;
  title: string;
  link: string;
}

export interface ParsedRitual extends Ritual {
  name: string;
  rows: {
    key: string;
    columns: {
      key: string;
      content: string;
      tagColor?: string;
    }[];
  }[];
}

export const getRituals = async () => {
  const queryParams = new URLSearchParams({
    search: "retrospectiva",
  });

  return fetch(`/rituals?${queryParams}`);
};

export const getRitual = async (ritualId: string) => {
  return fetch(`/rituals/${ritualId}`);
};

export const parseRituals =
  (startDate: string | undefined) =>
  (ritual: Ritual): ParsedRitual => ({
    id: ritual.id,
    title: ritual.title,
    name: ritual.title,
    link: ritual.link,
    rows: [
      {
        key: ritual.id,
        columns: [
          {
            key: "topic",
            content: ritual.title,
          },
          {
            key: "startDate",
            content: startDate ?? "",
            tagColor: "brand.400",
          },
          {
            key: "recurrency",
            content: "Once a week",
            tagColor: "brand.700",
          },
          {
            key: "level",
            content: "Company",
            tagColor: "brand.800",
          },
        ],
      },
    ],
  });
