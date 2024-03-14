import { PopulationCompositionPerYearSchema, PrefecturesSchema } from '@/type';

export const fetchPrefNames = async () => {
  const res = await fetch(
    'https://opendata.resas-portal.go.jp/api/v1/prefectures',
    {
      headers: {
        'X-API-KEY': process.env.RESAS_API_KEY!,
      },
      cache: 'force-cache',
    },
  );
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
      cache: 'force-cache',
    },
  );
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
