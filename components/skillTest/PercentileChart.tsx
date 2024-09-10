import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Label,
} from "recharts";

interface PercentileChartProps {
  currentPercentile: number;
  data: { percentile: number; students: number }[];
}

const PercentileChart = ({ currentPercentile, data }: PercentileChartProps) => {
  const isPointExists = data.some(
    (point) => point.percentile === currentPercentile
  );

  let mapedData;
  if (isPointExists) {
    mapedData = data.map((point) => {
      if (point.percentile === currentPercentile) {
        return {
          percentile: point.percentile,
          students: point.students + 1,
        };
      }
      return point;
    });
  } else {
    mapedData = [...data, { percentile: currentPercentile, students: 1 }];
  }

  const sortedData = [...mapedData].sort((a, b) => a.percentile - b.percentile);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={sortedData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="percentile"
          label={{
            value: "Percentile",
            position: "insideBottomRight",
            offset: 0,
          }}
          domain={[0, 100]}
          type="number"
        />
        <YAxis
          label={{
            value: "Number of Students",
            angle: -90,
            position: "insideLeft",
          }}
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="students"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />

        <ReferenceLine x={currentPercentile} stroke="gray">
          <Label value="Your Percentile" position="insideTop" fill="gray" />
        </ReferenceLine>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PercentileChart;
