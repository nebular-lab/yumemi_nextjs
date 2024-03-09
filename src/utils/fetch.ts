import { PopulationDataSchema, PrefecturesSchema } from '@/type';

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
  const data = await res.json();
  return PrefecturesSchema.parse(data.result);
};

export const fetchPopulationData = async (prefCode: number) => {
  const res = await fetch(
    `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`,
    {
      headers: {
        'X-API-KEY': process.env.RESAS_API_KEY!,
      },
      cache: 'force-cache',
    },
  );
  const data = await res.json();
  return PopulationDataSchema.parse(data.result.data[0].data);
};
