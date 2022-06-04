import { Box, Heading, useToken, StyleProps } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ChartOptions,
} from "chart.js";

import { InternCard } from "../Card";

ChartJS.register(CategoryScale, LinearScale, BarElement);

interface DatasetSizes {
  barPercentage?: number;
  categoryPercentage?: number;
}

export interface RangeProps extends StyleProps {
  title: string;
  labels: string[];
  data: number[];
  scaleX?: string;
  scaleY?: string;
  datasetSizes?: DatasetSizes;
}

export const Range = ({
  title,
  scaleX,
  scaleY,
  labels,
  data,
  datasetSizes = {
    barPercentage: 1,
    categoryPercentage: 0.3,
  },
  ...rest
}: RangeProps) => {
  const [brand300, brand500] = useToken("colors", ["brand.300", "brand.500"]);

  const sortedData = [...data].sort((a, b) => a - b);
  const biggestNumber = sortedData[sortedData.length - 1];
  const barColors = data.map((number) =>
    number === biggestNumber ? brand300 : brand500
  );

  const options: ChartOptions<"bar"> = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    color: "#fff",
    scales: {
      y: {
        title: {
          display: true,
          align: "start",
          text: scaleY,
          color: "#fff",
          font: {
            size: 12,
          },
        },
        ticks: {
          color: "#fff",
          stepSize: 1,
          font: {
            size: 12,
          },
        },
      },
      x: {
        title: {
          display: true,
          align: "start",
          text: scaleX,
          color: "#fff",
          font: {
            size: 12,
          },
        },
        ticks: {
          color: "#fff",
          stepSize: 1,
          font: {
            size: 12,
          },
        },
      },
    },
  };

  const chartData = {
    labels,
    datasets: [
      {
        ...datasetSizes,
        backgroundColor: barColors,
        data,
      },
    ],
  };

  return (
    <InternCard {...rest}>
      <Box borderBottom="1px solid #525F7F" pb={2}>
        <Heading fontSize="18px" fontWeight={500} color="white">
          {title}
        </Heading>
      </Box>
      <Box maxHeight={`${60 * labels.length}px`}>
        <Bar options={options} data={chartData} />;
      </Box>
    </InternCard>
  );
};
