import { Range, RangeSkeleton, WordCloud } from "../../components/Analytics";
import { Analityc, useAnalytics } from "../../hooks/rituals/useAnalytics";

export interface AnalyticsProps {
  ritualId: string;
}

const fieldTypes = {
  text: ["short_text", "long_text"],
  range: ["opinion_scale"],
  boolean: ["yes_no"],
};

export const Analytics = ({ ritualId }: AnalyticsProps) => {
  const { data: analytics, isFetching } = useAnalytics(ritualId);

  const [_, __, ...analyticsWithoutNameAndEmailQuestion] = analytics ?? [];
  const { textual, numeric, boolean } =
    analyticsWithoutNameAndEmailQuestion.reduce(
      (acc, curr) => {
        const { type } = curr;

        if (fieldTypes.text.includes(type)) {
          return {
            ...acc,
            textual: [...acc.textual, curr],
          };
        }

        if (fieldTypes.range.includes(type)) {
          return {
            ...acc,
            numeric: [...acc.numeric, curr],
          };
        }

        if (fieldTypes.boolean.includes(type)) {
          return {
            ...acc,
            boolean: [...acc.boolean, curr],
          };
        }

        return acc;
      },
      {
        textual: [] as Analityc[],
        numeric: [] as Analityc[],
        boolean: [] as Analityc[],
      }
    );

  const textualAnswers = textual.flatMap(
    (response) => response.answers as string[]
  );

  return (
    <>
      {isFetching ? (
        <>
          <RangeSkeleton />
          <RangeSkeleton />
          <RangeSkeleton />
        </>
      ) : (
        <>
          {numeric.map((response, index) => {
            const labels = [...Array(response?.range ?? 0).keys()];

            const data = labels.map((label) => {
              const answer = (response.answers as number[]).filter(
                (answer) => answer === label
              );
              return answer.length;
            });

            return (
              <Range
                title={response.title}
                scaleX="People"
                labels={labels.map((number) => number.toString())}
                data={data}
                mt={index === 0 ? 0 : 7}
              />
            );
          })}

          {boolean.map((response) => {
            const labels = ["Y", "N"];

            const data = labels.map((label) => {
              const truthyAnswers = label === "Y";
              const answer = (response.answers as boolean[]).filter(
                (answer: boolean) => answer === truthyAnswers
              );
              return answer.length;
            });

            return (
              <Range
                title={response.title}
                scaleX="People"
                labels={labels}
                data={data}
                datasetSizes={{
                  categoryPercentage: 0.5,
                }}
                mt={numeric.length > 0 ? 7 : 0}
              />
            );
          })}

          <WordCloud title="Word Cloud" phrases={textualAnswers} />
        </>
      )}
    </>
  );
};
