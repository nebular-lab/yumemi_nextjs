import { fetchPopulations, fetchPrefNames } from '@/utils/fetch';

const PrefectureChart = async () => {
  const prefNames = await fetchPrefNames();
  const prefCodes = prefNames.map((prefName) => prefName.prefCode);
  //const populationData = await fetchPopulations(prefCodes);
  return <div>都道府県別人口推移グラフ</div>;
};

export default PrefectureChart;
