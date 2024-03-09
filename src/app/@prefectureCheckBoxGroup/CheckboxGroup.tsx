'use client';

import { Prefecture } from '@/type';
import Checkbox from '../component/Checkbox';
import useSelectedPrefCodes from '@/store/selectedPrefCodes';

interface CheckboxGroupProps {
  prefectures: Prefecture[];
}

const CheckboxGroup = ({ prefectures }: CheckboxGroupProps) => {
  const { selectedPrefCodes, togglePrefCode } = useSelectedPrefCodes();
  return (
    <div className='grid grid-cols-12 gap-4'>
      {prefectures.map((prefecture) => (
        <Checkbox
          key={prefecture.prefCode}
          checked={selectedPrefCodes.includes(prefecture.prefCode)}
          label={prefecture.prefName}
          onChange={() => togglePrefCode(prefecture.prefCode)}
        />
      ))}
    </div>
  );
};
export default CheckboxGroup;
