import { PopulationCompositionPerYearSchema, PrefecturesSchema } from '@/type';

export const fetchPrefNames = async () => {
  const res = await fetch(
    'https://opendata.resas-portal.go.jp/api/v1/prefectures',
    {
      headers: {
        'X-API-KEY': process.env.RESAS_API_KEY!,
      },
      cache: 'no-store',
    },
  );
  await wait(2000);

  if (!res.ok) {
    throw new Error('Failed to fetch prefectures');
  }
  return PrefecturesSchema.parse((await res.json()).result);
};

const fetchPopulationCompositionPerYearByPrefCode = async (
  prefCode: number,
) => {
  const res = await fetch(
    `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`,
    {
      headers: {
        'X-API-KEY': process.env.RESAS_API_KEY!,
      },
      cache: 'no-store',
    },
  );
  if (!res.ok) {
    throw new Error('Failed to fetch population composition per year');
  }
  await wait(5000);
  const data = (await res.json()).result.data;
  return PopulationCompositionPerYearSchema.parse(data);
};

export const fetchPopulations = async (prefCodes: number[]) =>
  await Promise.all(
    prefCodes.map((prefCode) =>
      fetchPopulationCompositionPerYearByPrefCode(prefCode),
    ),
  );

// 県コード1(北海道)の人口構成を取得し、人口の種類[総人口、年少人口、生産年齢人口、老年人口]を返す
export const fetchPopulationTypes = async () =>
  (await fetchPopulationCompositionPerYearByPrefCode(1)).map(
    (data) => data.label,
  );

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
