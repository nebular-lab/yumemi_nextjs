'use client';

import useSelectedPrefCodes from '@/store/selectedPrefCodes';
import useSelectedPrefTypeIndex from '@/store/selectedPrefTypeIndex';
import { PopulationCompositionPerYear, Prefecture } from '@/type';
import { generateRGBBySeed } from '@/utils/generateRGBBySeed';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

type Props = {
  populations: PopulationCompositionPerYear[];
  prefNames: Prefecture[];
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const Chart = (props: Props) => {
  const { populations, prefNames } = props;
  const { selectedPrefType } = useSelectedPrefTypeIndex();
  const { selectedPrefCodes } = useSelectedPrefCodes();

  const chartData = {
    labels: populations[0][0].data.map((data) => data.year),
    datasets: selectedPrefCodes.map((selectedPrefCode) => {
      const selectedPrefIndex = selectedPrefCode - 1;
      const selectedPrefNames = prefNames[selectedPrefIndex].prefName;
      const data = populations[selectedPrefIndex][selectedPrefType].data.map(
        (data) => data.value,
      );
      const borderColor = generateRGBBySeed(selectedPrefIndex);
      return {
        label: selectedPrefNames,
        borderColor: borderColor,
        data: data,
      };
    }),
  };
  const populationTypes = populations[0].map((data) => data.label);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: populationTypes[selectedPrefType],
      },
    },
  };
  return <Line data={chartData} options={options} />;
};

export default Chart;
