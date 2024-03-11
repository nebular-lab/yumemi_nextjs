import { fetchPopulationTypes } from '@/utils/fetch';
import RadioButtonGroup from '../component/RadioButtonGroup';

const PrefectureTypeRadioButtonGroup = async () => {
  const prefectureTypes = await fetchPopulationTypes();
  return <RadioButtonGroup name='prefectureType' options={prefectureTypes} />;
};

export default PrefectureTypeRadioButtonGroup;
