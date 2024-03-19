'use client';

import { Prefecture } from '@/type';
import useSelectedPrefCodes from '@/store/selectedPrefCodes';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface Props {
  prefectures: Prefecture[];
}

const PrefectureCheckboxGroup = ({ prefectures }: Props) => {
  const { selectedPrefCodes, togglePrefCode } = useSelectedPrefCodes();
  return (
    <div className='grid grid-cols-[repeat(auto-fill,minmax(5rem,1fr))] gap-4'>
      {prefectures.map((prefecture) => (
        <div key={prefecture.prefCode} className='flex items-center space-x-2'>
          <Checkbox
            id={prefecture.prefCode.toString()}
            checked={selectedPrefCodes.includes(prefecture.prefCode)}
            onClick={() => {
              togglePrefCode(prefecture.prefCode);
            }}
          />
          <Label htmlFor={prefecture.prefCode.toString()}>
            {prefecture.prefName}
          </Label>
        </div>
      ))}
    </div>
  );
};
export default PrefectureCheckboxGroup;
