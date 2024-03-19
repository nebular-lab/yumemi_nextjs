import { fetchPrefNames } from '@/utils/fetch';
import CheckboxGroup from '../../../components/PrefectureCheckboxGroup';

const PrefectureCheckBoxGroup = async () => {
  const prefectures = await fetchPrefNames();
  return <CheckboxGroup prefectures={prefectures} />;
};

export default PrefectureCheckBoxGroup;
