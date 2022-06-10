import moment from "moment";

interface CycleDataProps {
  cadence: "weekly" | "monthly";
  format?: string;
}

export const useGetCyleData = ({ cadence, format }: CycleDataProps) => {
  const currentDateMoment = moment();

  if (cadence === "weekly") {
    const lastFriday = currentDateMoment.day(
      currentDateMoment.day() >= 5 ? 5 : -2
    );
    return lastFriday.format(format);
  }
};
