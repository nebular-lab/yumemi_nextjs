import { fetchPopulations, fetchPrefNames } from '@/utils/fetch';
import Chart from '../../../components/Chart';

const PrefectureChart = async () => {
  const prefNames = await fetchPrefNames();
  const prefCodes = prefNames.map((prefName) => prefName.prefCode);
  const populations = await fetchPopulations(prefCodes);
  return <Chart populations={populations} prefNames={prefNames} />;
};

export default PrefectureChart;
