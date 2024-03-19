'use client';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import useSelectedPrefTypeIndex from '@/store/selectedPrefTypeIndex';

type Props = {
  options: string[];
};

const RadioButtons = (props: Props) => {
  const { options } = props;
  const { selectedPrefType, setSelectedPrefType } = useSelectedPrefTypeIndex();
  return (
    <RadioGroup className='flex space-x-2'>
      {options.map((option, index) => (
        <div key={option} className='space-x-1 flex items-center'>
          <RadioGroupItem
            value={option}
            id={option}
            checked={selectedPrefType === index}
            onClick={() => setSelectedPrefType(index)}
          />
          <Label htmlFor={option}>{option}</Label>
        </div>
      ))}
    </RadioGroup>
  );
};

export default RadioButtons;
