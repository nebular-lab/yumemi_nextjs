import { fetchPopulationTypes } from '@/utils/fetch';
import RadioButtonGroup from '../../../components/PopulationTypeRadioGroup';

const PrefectureTypeRadioButtonGroup = async () => {
  const prefectureTypes = await fetchPopulationTypes();
  return <RadioButtonGroup options={prefectureTypes} />;
};

export default PrefectureTypeRadioButtonGroup;
