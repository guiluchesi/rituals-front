import { Range, WordCloud } from "../../components/Analytics";

export const Analytics = () => {
  const confidentLabels = ["5", "4", "3", "2", "1"];
  const confidentData = confidentLabels.map(
    () => Math.floor(Math.random() * 10) + 1
  );

  const blockLabels = ["Y", "N"];
  const BlockData = blockLabels.map(() => Math.floor(Math.random() * 10) + 1);

  const answer1 = `
  Meetings with new client
    - Tasks
    - Reports
  `;
  const answer2 = `We had a meeting with the client`;
  const answer3 = `we are having too much meetings for my taste`;
  const answer4 = `meetings are super cool`;
  const answer5 = `I love our new client`;
  const answer6 = `Talk to client and report`;

  return (
    <>
      <Range
        title="How confident are you?"
        scaleX="People"
        scaleY="Satisfaction"
        labels={confidentLabels}
        data={confidentData}
      />

      <Range
        title="Is something blocking you?"
        scaleX="People"
        labels={blockLabels}
        data={BlockData}
        datasetSizes={{
          categoryPercentage: 0.5,
        }}
        mt={7}
      />

      <WordCloud
        title="Word Cloud"
        phrases={[answer1, answer2, answer3, answer4, answer5, answer6]}
      />
    </>
  );
};
