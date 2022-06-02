import { Range } from "../../components/Analytics";

export const Analytics = () => {
  const confidentLabels = ["5", "4", "3", "2", "1"];
  const confidentData = confidentLabels.map(
    () => Math.floor(Math.random() * 10) + 1
  );

  const blockLabels = ["Y", "N"];
  const BlockData = blockLabels.map(() => Math.floor(Math.random() * 10) + 1);

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
    </>
  );
};
